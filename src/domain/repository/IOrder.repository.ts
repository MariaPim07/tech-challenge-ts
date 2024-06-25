import { Order } from "../entities/order";

export interface IOrderRepository {
    saveOrUpdateOrder(order: Order): Promise<Order>;
    findOrderById(id: number): Promise<Order | null>;
    getOrder(): Promise<Order[]>;
}