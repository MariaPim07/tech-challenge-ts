import { HttpException } from "../../HttpException";
import { OrderStatusEnum } from "../../enums/orderStatus.enum";
import { IOrderRepository } from "../../repository/IOrder.repository";

export default class UpdateOrderUseCase {
    constructor(private readonly orderRepository: IOrderRepository) {}

    async execute(id: number, status: OrderStatusEnum.ORDER_READY | OrderStatusEnum.ORDER_FINISHED) {
        const order = await this.orderRepository.findOrderById(id);

        if (!order) throw new HttpException(404, "pedido não encontrado.")

        order.status = status.toString();

        return await this.orderRepository.saveOrUpdateOrder(order);
    }
}