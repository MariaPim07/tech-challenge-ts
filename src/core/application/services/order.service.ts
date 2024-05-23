import { OrderEntity } from '../../../adapter/driven/db/entities/order.entity';
import { PaymentEntity } from '../../../adapter/driven/db/entities/payment.entity';
import { OrderStatusEnum } from '../../domain/enums/orderStatus.enum';
import { PaymentStatusEnum } from '../../domain/enums/paymentStatus.enum';
import { Order } from '../../domain/models/order';
import { IOrderRepository } from '../ports/IOrder.repository';

export class OrderService {
    constructor(private readonly orderRepository: IOrderRepository) {}

    async createOrder(order: Order) {
        const orderEntity = new OrderEntity;

        Object.assign(orderEntity, order);

        orderEntity.status = OrderStatusEnum.ORDER_RECEIVED;

        const savedOrderEntity = await this.orderRepository.saveOrUpdateOrder(orderEntity);

        await this.orderPayment(savedOrderEntity);
    }

    async updateOrderStatus(
        id: number, 
        status: OrderStatusEnum.ORDER_READY | OrderStatusEnum.ORDER_FINISHED
    ) {
        const orderEntity = await this.orderRepository.findOrderById(id);

        if (!orderEntity) return; //not found

        orderEntity.status = status;

        return await this.orderRepository.saveOrUpdateOrder(orderEntity);
    }

    private async orderPayment(orderEntity: OrderEntity) {
        const paymentEntity = new PaymentEntity;

        paymentEntity.order = orderEntity.id;
        paymentEntity.totalValue = await this.calculateTotalValue();
        paymentEntity.paymentStatus = PaymentStatusEnum.PAYMENT_PENDING;
    }

    private async calculateTotalValue(): Promise<number> {
        return 0;
    }
}