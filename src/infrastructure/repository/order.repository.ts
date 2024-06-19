import { IOrderRepository } from "../../core/application/ports/IOrder.repository";
import connection from "../database/connection";
import { OrderEntity } from "../db/entities/order.entity";
import { Repository } from 'typeorm';

export class OrderRepository implements IOrderRepository {
    private orderRepository: Repository<OrderEntity>;

    constructor() {
        this.orderRepository = connection.getRepository(OrderEntity);
    }

    async saveOrUpdateOrder(order: OrderEntity): Promise<OrderEntity> {
        return await this.orderRepository.save(order);
    }

    async findOrderById(id: number): Promise<OrderEntity | null> {
        return await this.orderRepository.findOneBy({id: id});
    }
}