import express from "express";
import { validationResult } from "express-validator";
import { askQuestionValidator,replyQuestionValidator } from "../dto/questionsValidator.js";
import prisma from "../prisma.js";
const router = express.Router();


//ask a question
router.post("/ask", askQuestionValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { question, name, email, number, category } = req.body;
  try {
    const questionEntry = await prisma.question.create({
      data: {
        question,
        name,
        email,
        number,
        category,
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


export default router;
