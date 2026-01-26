import {body} from 'express-validator';

export const loginClientValidator = [
  body("username")
    .notEmpty()
    .isString()
    .withMessage("Username is required and should be a string"),
  body("password").notEmpty().isString().withMessage("Password is required "),
];

export const registerClientValidator = [
  body("name")
    .notEmpty()
    .isString()
    .withMessage("Name is required and should be a string"),
  body("role")
    .isIn(["admin", "user"])
    .withMessage("Role is required and should be either 'admin' or 'user'"),
  body("username")
    .notEmpty()
    .isString()
    .withMessage("Username is required and should be a string"),
  body("password")
    .notEmpty()
    .isString()
    .withMessage("Password is required and should be a string"),
];