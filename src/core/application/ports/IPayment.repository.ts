import { PaymentEntity } from './../../../adapter/driven/db/entities/payment.entity';

export interface IPaymentRepository {
    saveOrUpdatePayment(payment: PaymentEntity): Promise<PaymentEntity>;
    findByOrder(id: number): Promise<PaymentEntity | null>;
}