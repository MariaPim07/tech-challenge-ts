import { Order } from "../../entities/order";
import { OrderStatusEnum } from "../../enums/orderStatus.enum";
import { PaymentStatusEnum } from "../../enums/paymentStatus.enum";
import { IOrderRepository } from "../../repository/IOrder.repository";
import { IProductRepository } from "../../repository/IProduct.repository";
import { PaymentMethodEnum } from '../../enums/paymentMethod.enum';
import { Payment } from "../../entities/payment";

export default class CreateOrderUseCase {
    constructor(
        private readonly orderRepository: IOrderRepository,
        private readonly productRepository: IProductRepository
    ) {}

    async execute(order: Order) {
        order.status = OrderStatusEnum.ORDER_RECEIVED.toString();
        order.payment = await this.generatePayment(order);

        return await this.orderRepository.saveOrUpdateOrder(order);
    }

    private async generatePayment(order: Order) {
        const payment: Payment = {
            totalPrice: await this.calculateTotalPrice(order),
            paymentMethod: PaymentMethodEnum.PAYMENT_METHOD_MONEY,
            paymentStatus: PaymentStatusEnum.PAYMENT_PENDING
        } as Payment;

        return payment;
    }

    private async calculateTotalPrice(order: Order) {
        const products = [order.hamburger.id, order.drink.id];

       return (await this.productRepository.getPrice(products))
       .reduce((acumulador, product) => acumulador + product.price, 0);
    }
}