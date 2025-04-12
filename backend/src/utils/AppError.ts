export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode = 500, isOperational = true) {    // The purpose of the isOperational flag is to specify whether that error that we have got is                                                                        
        super(message);                                                       // an expected error not
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        Error.captureStackTrace(this, this.constructor);
    }
}