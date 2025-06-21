import { body } from "express-validator";

export const registerValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be 2-50 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6, max: 100 })
    .withMessage("Password must be 6-100 characters"),
];

export const loginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
];

export const tipValidation = [
  body("content")
    .trim()
    .notEmpty()
    .withMessage("Tip content is required")
    .isLength({ min: 5, max: 500 })
    .withMessage("Tip must be 5-500 characters"),
];

export const aiTipValidation = [
  body("topic")
    .trim()
    .notEmpty()
    .withMessage("Topic is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Topic must be 2-100 characters"),
];
