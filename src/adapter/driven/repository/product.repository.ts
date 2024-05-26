import { Repository } from "typeorm";
import { IProductRepository } from "../../../core/application/ports/IProduct.repository";
import { ProductEntity } from "../db/entities/product.entity";
import datasource from "../db/data-source";

export class ProductRepository implements IProductRepository {
    private productRepository: Repository<ProductEntity>;

    constructor() {
        this.productRepository = datasource.getRepository(ProductEntity);
    }

    async saveOrUpdateProduct(product: ProductEntity): Promise<ProductEntity> {
        return await this.productRepository.save(product);
    }

    async deleteProduct(product: ProductEntity): Promise<ProductEntity> {
       return await this.productRepository.remove(product)
    }

    async findProductByCategory(category: string): Promise<ProductEntity[]> {
        return await this.productRepository.findBy({category: category});
    }

    async findProductById(id: number): Promise<ProductEntity | null> {
        return await this.productRepository.findOneBy({id: id});
    }

    async getPrice(ids: number[]): Promise<ProductEntity[]> {
        return await this.productRepository.createQueryBuilder()
        .select('product.price')
        .from(ProductEntity, 'product')
        .where('product.id IN (:...ids)', { ids })
        .getMany();
    }
}