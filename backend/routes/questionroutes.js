import express from "express";
import { validationResult } from "express-validator";
import { askQuestionValidator,replyQuestionValidator } from "../dto/questionsValidator.js";
import supabase from "../supabase.js";
const router = express.Router();


//ask a question
router.post("/ask", askQuestionValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { question, name, email, number, category } = req.body;
  try {
    const { data: questionEntry, error } = await supabase
      .from('questions')
      .insert({
        question,
        name,
        email,
        number,
        category,
      })
      .select()
      .single();
    
    if (error) {
      throw error;
    }
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
    const { data: questions, error } = await supabase
      .from('questions')
      .select('*')
      .order('likes', { ascending: false });
    
    if (error) {
      throw error;
    }
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
    const { data: question, error: findError } = await supabase
      .from('questions')
      .select('*')
      .eq('id', id)
      .single();
    
    if (findError || !question) {
      return res.status(404).json({ message: "Question not found" });
    }
    
    const { data: updatedQuestion, error: updateError } = await supabase
      .from('questions')
      .update({ likes: question.likes + 1 })
      .eq('id', id)
      .select()
      .single();
    
    if (updateError) {
      throw updateError;
    }
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
    const { data: question, error: findError } = await supabase
      .from('questions')
      .select('*')
      .eq('id', id)
      .single();
    
    if (findError || !question) {
      return res.status(404).json({ message: "Question not found" });
    }
    
    const { data: updatedQuestion, error: updateError } = await supabase
      .from('questions')
      .update({ likes: question.likes - 1 })
      .eq('id', id)
      .select()
      .single();
    
    if (updateError) {
      throw updateError;
    }
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
        const { data: question, error: findError } = await supabase
          .from('questions')
          .select('*')
          .eq('id', questionId)
          .single();
        
        if (findError || !question) {
          return res.status(404).json({ message: "Question not found" });
        }
        
        const { data: replyEntry, error: insertError } = await supabase
          .from('replies')
          .insert({
            question_id: questionId,   
            reply,
            name,
            email,
            number,
          })
          .select()
          .single();
        
        if (insertError) {
          throw insertError;
        }
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
        const { data: replies, error } = await supabase
          .from('replies')
          .select('*')
          .eq('question_id', questionId);
        
        if (error) {
          throw error;
        }
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
