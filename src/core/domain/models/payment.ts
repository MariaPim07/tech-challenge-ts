import { PaymentMethodEnum } from "../enums/paymentMethod.enum";
import { PaymentStatusEnum } from "../enums/paymentStatus.enum";

export interface Payment {
    order: string;
    totalPrice: number;
    paymentMethod: PaymentMethodEnum;
    paymentStatus: PaymentStatusEnum;
}