import { Router } from "express";
import { validateRegistration } from "../validators/auth/validateRegistration";
import { register } from "../controllers/authController";
import { validateLogin } from "../validators/auth/validateLogin";


const router = Router();

router.post('/register',validateRegistration,register);
router.post('/login',validateLogin,login);