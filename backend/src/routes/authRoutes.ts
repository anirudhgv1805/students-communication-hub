import { Router } from "express";
import { validateRegistration } from "../validators/auth/validateRegistration";
import { login, register } from "../controllers/authController";
import { validateLogin } from "../validators/auth/validateLogin";


export const authRouter = Router();

authRouter.post('/register',validateRegistration,register);
authRouter.post('/login',validateLogin,login);