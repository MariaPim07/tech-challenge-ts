import { Payment } from "./payment";
import { Product } from "./product";

export interface Order {
    client: number;
    hamburger: {id: number};
    accompaniment: {id: number};
    drink: {id: number};
    dessert: {id: number};
    payment: Payment;
}