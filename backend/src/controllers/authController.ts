import { Request, Response } from "express";
import { registerUser } from "../services/authService";

export const register = async (req: Request, res: Response) => {
    try{
        const {email , password} = req.body;
        const user = await registerUser(email,password);
    } catch (err){
        console.log("An error occured at the backend",err);
    }
};

export const login = async (req:Request,res:Response){
    try{
        const {email,password} = 
    }
}


