import {body} from 'express-validator';


export const askQuestionValidator = [
    body("question")
    .notEmpty()
    .isString()
    .withMessage("Question is required and should be a string"),    
    body("name")
    .notEmpty()
    .isString()
    .withMessage("Name is required and should be a string"),
  body("email")
    .notEmpty()
    .isString()
    .isEmail()
    .withMessage("Email is required and should be a valid email string"),
  body("number")
    .notEmpty()
    .isString()
    .withMessage("Number is required and should be a string"),
];

export const replyQuestionValidator = [ 
    body("questionId")
    .notEmpty()
    .isString()
    .withMessage("Question ID is required and should be a string"),    
    body("reply")
    .notEmpty()
    .isLength({ min: 5 })
    .isString()
    .withMessage("Reply is required and should be a string and at least 5 characters long"),    
    body("name")
    .notEmpty()
    .isString()
    .withMessage("Name is required and should be a string"),
  body("email")
    .notEmpty()
    .isString()
    .isEmail()
    .withMessage("Email is required and should be a valid email string"),
    body("number")
    .notEmpty()
    .isString()
    .withMessage("Number is required and should be a string"),
];