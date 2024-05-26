import { CategoryEnum } from "../enums/category.enum";

export interface Product {
    name: string;
    category: CategoryEnum;
    price: number;
    description: string;
}