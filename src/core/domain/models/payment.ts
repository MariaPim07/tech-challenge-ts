import { PaymentMethodEnum } from "../../../domain/enums/paymentMethod.enum";
import { PaymentStatusEnum } from "../../../domain/enums/paymentStatus.enum";

export interface Payment {
    order: string;
    totalPrice: number;
    paymentMethod: PaymentMethodEnum;
    paymentStatus: PaymentStatusEnum;
}