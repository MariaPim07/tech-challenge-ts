import { PaymentStatusEnum } from "../../domain/enums/paymentStatus.enum";
import { Payment } from "../../domain/models/payment";
import { IPaymentRepository } from "../ports/IPayment.repository";
import { IOrderRepository } from '../ports/IOrder.repository';
import { OrderStatusEnum } from "../../domain/enums/orderStatus.enum";
import { HttpException } from "../../HttpException";

export class PaymentService {
    constructor(
        private readonly paymentRepository: IPaymentRepository,
        private readonly orderRepository: IOrderRepository,
    ) {}

    async setPaymentMethod(idOrder: number, payment: Payment) {
        const orderPayment = await this.paymentRepository.findByOrder(idOrder);

        if (!orderPayment) throw new HttpException(404, "Pagamento não encontrado.");

        orderPayment.paymentMethod = payment.paymentMethod.toString();
        orderPayment.paymentStatus = PaymentStatusEnum.PAYMENT_FINISHED.toString();

        await this.sendOrderToPrepare(idOrder);

        await this.paymentRepository.saveOrUpdatePayment(orderPayment);
    }

    private async sendOrderToPrepare(idOrder: number) {
        const order = await this.orderRepository.findOrderById(idOrder);

        if (!order) throw new HttpException(404, "Pedido não encontrado.");

        order.status = OrderStatusEnum.ORDER_PREPARATION.toString();

        await this.orderRepository.saveOrUpdateOrder(order);
    }
}