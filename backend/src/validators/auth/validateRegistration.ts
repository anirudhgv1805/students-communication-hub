import { NextFunction, Request, RequestHandler, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationResult: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const validateRegistration: RequestHandler[] = [
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("username").notEmpty().withMessage("Give a valid mail address"),
  body("gender").notEmpty().withMessage("Give a valid gender"),
  body("role").notEmpty().withMessage("Give a valid role"),
  body("userId").notEmpty().withMessage("Give a valid UserID"),
  handleValidationResult,
];
