import express from "express";
import { body, validationResult } from "express-validator";
import { registerClientValidator } from "../dto/loginClientValidator.js";
import supabase from "../supabase.js";
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
    const { data: user, error } = await supabase
      .from('users')
      .insert({
        name,
        role,
        username,
        password,
      })
      .select()
      .single();
    
    if (error) {
      throw error;
    }
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
        .update({ answer, answered_by: AuthUser.name })
        .eq('id', id)
        .select()
        .single();
      
      if (updateError) {
        throw updateError;
      }
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
        const { data: question, error: findError } = await supabase
          .from('questions')
          .select('*')
          .eq('id', id)
          .single();
        
        if (findError || !question) {
          return res.status(404).json({ message: "Question not found" });
        }   
        
        const { error: deleteError } = await supabase
          .from('questions')
          .delete()
          .eq('id', id);
        
        if (deleteError) {
          throw deleteError;
        }
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
        const { data: reply, error: findError } = await supabase
          .from('replies')
          .select('*')
          .eq('id', id)
          .single();
        
        if (findError || !reply) {
          return res.status(404).json({ message: "Reply not found" });
        }   
        
        const { error: deleteError } = await supabase
          .from('replies')
          .delete()
          .eq('id', id);
        
        if (deleteError) {
          throw deleteError;
        }
        return res
          .status(200)
          .json({ message: "Reply deleted successfully" });    
    }
    catch(err) {
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }   
});


export default router;
