import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof AppError) {         // later want to filter the errors based on their type and isOperational or notwha
        res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
        return;
    }

    console.error("Error at the backend ", err);

    res.status(500).json({
        status: 'error at backend',
        message: "Something went wrong in the backend"
    })
};