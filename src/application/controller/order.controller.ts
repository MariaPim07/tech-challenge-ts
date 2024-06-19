import { Request, Response } from 'express';
import CreateOrderUseCase from '../../domain/usecase/order/createOrder.usecase';
import UpdateOrderUseCase from '../../domain/usecase/order/updateOrder.usecase';
import ExceptionHandler from '../error/ExceptionHandler';

export class OrderController {
    constructor(
        private readonly createOrderUseCase: CreateOrderUseCase,
        private readonly updateOrderUseCase: UpdateOrderUseCase
    ) {}

    async createOrder(req: Request, res: Response) {
        const order = req.body;
        try {
         return res.status(200).json(await this.createOrderUseCase.execute(order));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }

    async updateOrderStatus(req: Request, res: Response) {
        const id = Number(req.params.id);
        const status = req.body;
        try {
            return res.status(200)
                .json(await this.updateOrderUseCase.execute(id, status));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }
}