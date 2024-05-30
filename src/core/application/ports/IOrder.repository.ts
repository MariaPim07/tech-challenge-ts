import { OrderEntity } from "../../../adapter/driven/db/entities/order.entity";

export interface IOrderRepository {
    saveOrUpdateOrder(order: OrderEntity): Promise<OrderEntity>;
    findOrderById(id: number): Promise<OrderEntity | null>;
}