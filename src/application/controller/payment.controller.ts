import { Request, Response } from "express";
import SetPaymentMethodUseCase from "../../domain/usecase/payment/setPaymentMethod.usecase";
import ExceptionHandler from "../error/ExceptionHandler";

export class PaymentController {
    constructor(private readonly setPaymentMethodUseCase: SetPaymentMethodUseCase) {}

    async paymentMethod(req: Request, res: Response) {
        const idOrder = Number(req.params.id);
        const payment = req.body;
        try {
         return res.status(200).json(await this.setPaymentMethodUseCase.execute(idOrder, payment));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }
}