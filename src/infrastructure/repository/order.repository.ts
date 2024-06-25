import { IOrderRepository } from "../../domain/repository/IOrder.repository";
import connection from "../database/connection";
import { Repository } from 'typeorm';
import { OrderEntity } from "../entities/order.entity";

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

    async getOrder(): Promise<OrderEntity[]> {
        return await this.orderRepository.createQueryBuilder("order")
        .innerJoinAndSelect("order.client", "client")
        .leftJoinAndSelect("order.hamburger", "hamburger")
        .leftJoinAndSelect("order.accompaniment", "accompaniment")
        .leftJoinAndSelect("order.drink", "drink")
        .leftJoinAndSelect("order.dessert", "dessert")
        .innerJoinAndSelect("order.payment", "payment")
        .where("order.status != 'ORDER_FINISHED'")
        .orderBy(`Case when order.status like 'ORDER_READY' then 1 
            when order.status like 'ORDER_PREPARATION' then 2
            when order.status like 'ORDER_RECEIVED' then 3 end`, "ASC")
        .addOrderBy("order.updatedAt", "DESC")
        .getMany();
    }
}