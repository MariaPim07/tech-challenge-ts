import { OrderEntity } from '../../../adapter/driven/db/entities/order.entity';
import { PaymentEntity } from '../../../adapter/driven/db/entities/payment.entity';
import { HttpException } from '../../../domain/HttpException';
import { OrderStatusEnum } from '../../../domain/enums/orderStatus.enum';
import { PaymentStatusEnum } from '../../../domain/enums/paymentStatus.enum';
import { Order } from '../../domain/models/order';
import { IOrderRepository } from '../ports/IOrder.repository';
import { IProductRepository } from '../../../domain/repository/IProduct.repository';

export class OrderService {
    constructor(
        private readonly orderRepository: IOrderRepository,
        private readonly productRepository: IProductRepository
    ) {}

    async createOrder(order: Order) {
        const orderEntity = new OrderEntity;

        Object.assign(orderEntity, order);

        orderEntity.status = OrderStatusEnum.ORDER_RECEIVED.toString();

        orderEntity.payment = await this.generatePayment(orderEntity);

        return await this.orderRepository.saveOrUpdateOrder(orderEntity);
    }

    async updateOrderStatus(
        id: number, 
        status: OrderStatusEnum.ORDER_READY | OrderStatusEnum.ORDER_FINISHED
    ) {
        const orderEntity = await this.orderRepository.findOrderById(id);

        if (!orderEntity) throw new HttpException(404, "pedido não encontrado.")

        orderEntity.status = status.toString();

        return await this.orderRepository.saveOrUpdateOrder(orderEntity);
    }

    private async generatePayment(order: OrderEntity) {
        const paymentEntity = new PaymentEntity;

        paymentEntity.totalPrice = await this.calculateTotalPrice(order);
        paymentEntity.paymentMethod = "";
        paymentEntity.paymentStatus = PaymentStatusEnum.PAYMENT_PENDING.toString();

        return paymentEntity;
    }

    private async calculateTotalPrice(order: OrderEntity) {
        const products = [order.hamburger.id, order.drink.id];

       return (await this.productRepository.getPrice(products))
       .reduce((acumulador, product) => acumulador + product.price, 0);
    }
}