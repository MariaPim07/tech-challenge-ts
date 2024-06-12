import { Product } from '../entities/product';

export interface IProductRepository {
    saveOrUpdateProduct(product: Product): Promise<Product>;
    deleteProduct(product: Product): Promise<Product>;
    findProductById(id: number): Promise<Product | null>;
    findProductByCategory(category: string): Promise<Product[]>;
    getPrice(ids: number[]): Promise<Product[]>;
}