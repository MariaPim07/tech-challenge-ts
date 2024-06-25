import { IOrderRepository } from "../../repository/IOrder.repository";

export class GetOrderUseCase {
    constructor(private readonly orderRepository: IOrderRepository) {}

    async execute() {
        return this.orderRepository.getOrder();
    }
}