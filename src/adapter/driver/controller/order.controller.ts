import { Request, Response } from 'express';
import { OrderService } from '../../../core/application/services/order.service';
import ExceptionHandler from '../../../core/ExceptionHandler';

export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    async createOrder(req: Request, res: Response) {
        const order = req.body;
        try {
         return res.status(200).json(await this.orderService.createOrder(order));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }

    async updateOrderStatus(req: Request, res: Response) {
        const id = Number(req.params.id);
        const status = req.body;
        try {
            return res.status(200)
                .json(await this.orderService.updateOrderStatus(id, status));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }
}