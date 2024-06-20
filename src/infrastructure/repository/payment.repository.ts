import { Repository } from "typeorm";
import connection from "../database/connection";
import { PaymentEntity } from "../entities/payment.entity";
import { IPaymentRepository } from "../../domain/repository/IPayment.repository";

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