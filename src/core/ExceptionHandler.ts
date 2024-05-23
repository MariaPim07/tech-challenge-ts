import { Response } from "express";
import { HttpException } from "./HttpException";

const ExceptionHandler = (err: any, res: Response) => {
    if (err instanceof HttpException) {
        const { status, message } = err;
        return res.status(status).json({message: message});
    }

    return res.status(500).json({message: "Ocorreu um erro ao realizar operação."});
}

export default ExceptionHandler;