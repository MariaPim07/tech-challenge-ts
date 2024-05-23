import { PaymentStatusEnum } from "../../domain/enums/paymentStatus.enum";
import { Payment } from "../../domain/models/payment";
import { IPaymentRepository } from "../ports/IPayment.repository";
import { IOrderRepository } from '../ports/IOrder.repository';
import { OrderStatusEnum } from "../../domain/enums/orderStatus.enum";

export class PaymentService {
    constructor(
        private readonly paymentRepository: IPaymentRepository,
        private readonly orderRepository: IOrderRepository,
    ) {}

    async payment(idOrder: number, payment: Payment) {
        const orderPayment = await this.paymentRepository.findByOrder(idOrder);

        if (!orderPayment) return; //not found

        orderPayment.payment = payment.payment;
        orderPayment.paymentStatus = PaymentStatusEnum.PAYMENT_FINISHED;

        await this.sendOrder(idOrder);

        await this.paymentRepository.saveOrUpdatePayment(orderPayment);
    }

    private async sendOrder(idOrder: number) {
        const order = await this.orderRepository.findOrderById(idOrder);

        if (!order) return; //not found

        order.status = OrderStatusEnum.ORDER_PREPARATION;

        await this.orderRepository.saveOrUpdateOrder(order);
    }
}