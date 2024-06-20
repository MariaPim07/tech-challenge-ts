import { Order } from "./order";

export interface Payment {
    order: Order;
    totalPrice: number;
    paymentMethod: string;
    paymentStatus: string;
}