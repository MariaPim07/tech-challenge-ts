import { Request, Response } from "express";
import ExceptionHandler from "../../../core/ExceptionHandler";
import { PaymentService } from "../../../core/application/services/payment.service";

export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    async paymentMethod(req: Request, res: Response) {
        const idOrder = Number(req.params.id);
        const payment = req.body;
        try {
         return res.status(200).json(await this.paymentService.setPaymentMethod(idOrder, payment));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }
}