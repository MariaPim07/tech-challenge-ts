import { Payment } from "./payment";

export interface Order {
    client: {id: number};
    hamburger: {id: number};
    accompaniment: {id: number};
    drink: {id: number};
    dessert: {id: number};
    payment: Payment;
}