import { Repository } from "typeorm";
import { PaymentEntity } from "../db/entities/payment.entity";
import { IPaymentRepository } from "../../../core/application/ports/IPayment.repository";
import connection from "../db/connection";

export class PaymentRepository implements IPaymentRepository {
    private paymentRepository: Repository<PaymentEntity>;

    constructor() {
        this.paymentRepository = connection.getRepository(PaymentEntity);
    }

    async saveOrUpdatePayment(payment: PaymentEntity): Promise<PaymentEntity> {
        return await this.paymentRepository.save(payment);
    }

    async findByOrder(id: number): Promise<PaymentEntity | null> {
        return await this.paymentRepository.findOneBy({ 
            order: {
                id: id
            }
        });
    }
}