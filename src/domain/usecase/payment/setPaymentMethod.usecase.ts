import { HttpException } from "../../HttpException";
import { Payment } from "../../entities/payment";
import { OrderStatusEnum } from "../../enums/orderStatus.enum";
import { PaymentStatusEnum } from "../../enums/paymentStatus.enum";
import { IOrderRepository } from "../../repository/IOrder.repository";
import { IPaymentRepository } from "../../repository/IPayment.repository";

export default class SetPaymentMethodUseCase {
    constructor(
        private readonly paymentRepository: IPaymentRepository,
        private readonly orderRepository: IOrderRepository,
    ) {}

    async execute (idOrder: number, payment: Payment) {
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