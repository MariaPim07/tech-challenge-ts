import { Payment } from '../entities/payment';

export interface IPaymentRepository {
    saveOrUpdatePayment(payment: Payment): Promise<Payment>;
    findByOrder(id: number): Promise<Payment | null>;
}