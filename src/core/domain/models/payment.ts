import { PaymentEnum } from "../enums/payment.enum";
import { PaymentStatusEnum } from "../enums/paymentStatus.enum";

export interface Payment {
    order: string;
    totalValue: number;
    payment: PaymentEnum;
    paymentStatus: PaymentStatusEnum;
}