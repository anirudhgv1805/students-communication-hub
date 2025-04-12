import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { AppError } from "../utils/AppError";
import { User } from "../models/User";

export const authService = new AuthService();


export const register = async (req: Request, res: Response) => {
  try {
    const userReq:User = req.body;
    const user = await authService.registerUser(userReq);
    res.status(200).json({
      message:"user registration is successful",
    });
    return;
  } catch (err) {
    console.log("An error occured at the backend", err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);
    res.status(200).json({
      message:"user login is successful",
    });
    return;
  } catch (err) {
    throw new AppError("Login failed!!!");
  }
};
