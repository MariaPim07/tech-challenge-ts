import { ProductEntity } from './../../../adapter/driven/db/entities/product.entity';

export interface IProductRepository {
    saveOrUpdateProduct(product: ProductEntity): Promise<ProductEntity>;
    deleteProduct(product: ProductEntity): Promise<ProductEntity>;
    findProductById(id: number): Promise<ProductEntity | null>;
    findProductByCategory(category: string): Promise<ProductEntity[]>
}