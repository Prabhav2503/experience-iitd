import express from "express";
import { PrismaClient } from "@prisma/client";
import { body, validationResult } from "express-validator";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const authorization = (req,res,next) => {
    try {
     const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    // Verify token
    const secretKey = process.env.JWT_SECRET || "your-secret-key";
    const decoded = jwt.verify(token, secretKey);

    // Attach user info to request object for later use
    req.user = decoded;

    next();
    } catch (err) {
        return res.status(401).json({ error: "Unauthorized", message: err.message });
    }
}

app.post("/login",[
    body("username").trim().notEmpty().withMessage("Username is required"),
    body("password").trim().notEmpty().withMessage("Password is required"),
],async (req,res) => {
    const { username, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try{
        const user = await prisma.user.findUnique({
            where: {username: username}
        })
        if(!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        const token = jwt.sign(
            { id: user.id, username: user.username,name: user.name },
            process.env.JWT_SECRET)
        res.cookie("token", token, { httpOnly: true, secure: true });
        return res.status(200).json({ message: "Login Successful" });

    } catch(err) {
        return res.status(500).json({ error: "Server Error", message: err.message });
    }
})

app.post("/create",[
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("username").trim().notEmpty().withMessage("Username is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
], async (req,res) => {
    const { name, username, password } = req.body;
    try{
        const existingUser = await prisma.user.findUnique({
            where: {username: username}
        });
        if(existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }
        const newUser = await prisma.user.create({
            data: { name, username, password }
        });

        const token = jwt.sign(
            { id: newUser.id, username: newUser.username,name: newUser.name },
            process.env.JWT_SECRET)
        res.cookie("token", token, { httpOnly: true, secure: true });
        return res.status(201).json({ message: "User created successfully", data: newUser });
    } catch(err) {
        return res.status(500).json({ error: "Server Error", message: err.message });
    }
})

app.post("/logout", (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout Successful" });
});

app.post("/ask",
  [
    body("question")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Question must be at least 5 characters"),

    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("number").isMobilePhone("any").withMessage("Invalid phone number"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const response = await prisma.question.create({
        data: req.body,
      });

      return res.status(201).json({
        message: "Question Posted Successfully",
        data: response,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: "Server Error",
        message: err.message,
      });
    }
  },
);

app.get("/all", async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    if (!questions || questions.length === 0) {
      return res.status(404).json({ error: "No Questions Found" });
    }
    return res.status(200).json({ data: questions });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Server Error", message: err.message });
  }
});

app.post("/like/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await prisma.question.findUnique({
      where: { id: questionId },
    });
    if (!question) {
      return res.status(400).json({ error: "Invalid Question ID" });
    }
    const response = await prisma.question.update({
      where: { id: questionId },
      data: { likes: { increment: 1 } },
    });
    return res
      .status(200)
      .json({ message: "Liked Successfully", data: response });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Server Error", message: err.message });
  }

});

app.post("/dislike/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await prisma.question.findUnique({
      where: { id: questionId },
    });
    if (!question) {
      return res.status(400).json({ error: "Invalid Question ID" });
    }
    const response = await prisma.question.update({
      where: { id: questionId },
      data: { likes: { decrement: 1 } },
    });
    return res
      .status(200)
      .json({ message: "Disliked Successfully", data: response });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Server Error", message: err.message });
  }

});

app.post("/reply",
  [
    body("reply")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Reply cannot be empty"),
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("number").isMobilePhone("any").withMessage("Invalid phone number"),
    body("questionId").notEmpty().withMessage("Question ID is required"),
  ],
  async (req, res) => {
    const { reply,name,email,number,questionId } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const question = await prisma.question.findUnique({
        where: { id: questionId },
      });

      if (!question) {
        return res.status(400).json({ error: "Invalid Question ID" });
      }

      const response = await prisma.replies.create({
        data: {
          questionId: questionId,
          reply: reply,
          name: name,
          email: email,
          number: number,

        },
      });
      return res.status(201).json({
        message: "Reply Posted Successfully",
        data: response,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Server Error", message: err.message });
    }
  },
);

app.get("/replies/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const replies = await prisma.replies.findMany({
      where: { questionId: questionId },
    });
    if (!replies || replies.length === 0) {
      return res.status(404).json({ error: "No Replies Found" });
    }
    return res.status(200).json({ data: replies });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Server Error", message: err.message });
  }
});

//authorization required
app.post("/answer/:id",
  [
    body("answer")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Answer cannot be empty"),
  ], authorization,
  async (req, res) => {
    const questionId = req.params.id;
    const user = req.user;
    const { answer } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const question = await prisma.question.findUnique({
        where: { id: questionId },
      });
      if (!question) {
        return res.status(404).json({ error: "Invalid Question ID" });
      }
      const response = await prisma.question.update({
        where: { id: questionId },
        data: { answer: answer, answeredBy: user.name },
      });
      return res
        .status(200)
        .json({ message: "Answer Posted Successfully", data: response });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Server Error", message: err.message });
    }
  },
);



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
