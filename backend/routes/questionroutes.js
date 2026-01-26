import express from "express";
import { body, validationResult } from "express-validator";
import { registerClientValidator } from "../dto/loginClientValidator.js";
import { askQuestionValidator,replyQuestionValidator } from "../dto/questionsValidator.js";
import prisma from "../prisma.js";
const router = express.Router();

router.post("/register", registerClientValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, role, username, password } = req.body;
  const AuthUser = req.user;
  if (AuthUser.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Forbidden: only admin can register new users" });
  }
  try {
    const user = await prisma.user.create({
      data: {
        name,
        role,
        username,
        password,
      },
    });
    return res
      .status(201)
      .json({ message: "User registered successfully", data: user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

//ask a question
router.post("/ask", askQuestionValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { question, name, email, number } = req.body;
  try {
    const questionEntry = await prisma.question.create({
      data: {
        question,
        name,
        email,
        number,
      },
    });
    return res
      .status(201)
      .json({
        message: "Question registered successfully",
        data: questionEntry,
      });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

//get all questions
router.get("/all", async (req, res) => {
  try {
    const questions = await prisma.question.findMany({
      orderBy: {
        likes: "desc",
      },
    });
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }
    return res
      .status(200)
      .json({ message: "Questions fetched successfully", data: questions });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

//like a question
router.patch("/like/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const question = await prisma.question.findUnique({
      where: { id: id },
    });
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    const updatedQuestion = await prisma.question.update({
      where: { id: id },
      data: { likes: question.likes + 1 },
    });
    return res
      .status(200)
      .json({ message: "Question liked successfully", data: updatedQuestion });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

//dislike a question
router.patch("/dislike/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const question = await prisma.question.findUnique({
      where: { id: id },
    });
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    const updatedQuestion = await prisma.question.update({
      where: { id: id },
      data: { likes: question.likes - 1 },
    });
    return res
      .status(200)
      .json({
        message: "Question disliked successfully",
        data: updatedQuestion,
      });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

//answer a question
router.patch("/answer/:id",
  [
    body("answer")
      .notEmpty()
      .isLength({ min: 10 })
      .isString()
      .withMessage(
        "Answer is required and should be a string and at least 10 characters long",
      ),
  ],
  async (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;
    const AuthUser = req.user;
    try {
      const question = await prisma.question.findUnique({
        where: { id: id },
      });
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
      const updatedQuestion = await prisma.question.update({
        where: { id: id },
        data: { answer, answeredBy: AuthUser.name },
      });
      return res
        .status(200)
        .json({
          message: "Question answered successfully",
          data: updatedQuestion,
        });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  },
);

//create a reply to a question
router.post('/reply',replyQuestionValidator, async (req, res) => {
  const { questionId, reply, name,email,number} = req.body;
    try {
        const question = await prisma.question.findUnique({
          where: { id: questionId },
        }); 
        if (!question) {
          return res.status(404).json({ message: "Question not found" });
        }
        const replyEntry = await prisma.replies.create({
          data: {
            questionId: questionId,   
            reply,
            name,
            email,
            number,
          },
        });
        return res
          .status(201)
          .json({ message: "Reply created successfully", data: replyEntry }); 

    } catch(err) {
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

//get replies for a question
router.get('/replies/:questionId', async (req, res) => {
  const { questionId } = req.params;    
    try {
        const replies = await prisma.replies.findMany({
          where: { questionId: questionId },
        });
        if (!replies || replies.length === 0) {
          return res.status(404).json({ message: "No replies found" });
        }   
        return res
          .status(200)
          .json({ message: "Replies fetched successfully", data: replies });    
    } catch(err) {
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

//delete a question
router.delete('/:id', async (req, res) => {
  const { id } = req.params;    
    try {
        const question = await prisma.question.findUnique({
          where: { id: id },
        });
        if (!question) {
          return res.status(404).json({ message: "Question not found" });
        }   
        await prisma.question.delete({
          where: { id: id },
        });
        return res
          .status(200)
          .json({ message: "Question deleted successfully" });    
    } catch(err) {
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }       
});

//delete a reply
router.delete('/reply/:id', async (req, res) => {
  const { id } = req.params;
    try {
        const reply = await prisma.replies.findUnique({
          where: { id: id },
        });
        if (!reply) {
          return res.status(404).json({ message: "Reply not found" });
        }   
        await prisma.replies.delete({
          where: { id: id },
        });
        return res
          .status(200)
          .json({ message: "Reply deleted successfully" });    
    }
    catch(err) {
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }   
});


export default router;
