import { Request, Response } from 'express';
import { OrderService } from './../../../core/application/services/order.service';

export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    async createOrder(req: Request, res: Response) {
        const order = req.body;
        try {
            await this.orderService.createOrder(order);
            return res.status(200).json("Pedido cadastrado com sucesso.");
        } catch {
            return res.status(500).json("Ocorreu um erro ao cadastrar o pedido.");
        }
    }

    async updateOrderStatus(req: Request, res: Response) {
        const id = Number(req.params.id);
        const status = req.body;
        try {
            await this.orderService.updateOrderStatus(id, status);
            return res.status(200).json("Status atualizado com sucesso.");
        } catch {
            return res.status(500).json("Ocorreu um erro ao atualizar o status.");
        }
    }
}