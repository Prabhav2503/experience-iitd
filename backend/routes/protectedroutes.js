import express from "express";
import { body, validationResult } from "express-validator";
import { registerClientValidator } from "../dto/loginClientValidator.js";
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
