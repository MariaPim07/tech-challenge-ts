import { ProductEntity } from '../../../adapter/driven/db/entities/product.entity';
import { Product } from '../../domain/product';
import { IProductRepository } from './../ports/IProduct.repository';

export class ProductService {
    constructor(private readonly productRepository: IProductRepository) {}

    async createProduct(product: Product) {
        const productEntity = new ProductEntity;

        Object.assign(productEntity, product);

        return await this.productRepository.saveOrUpdateProduct(productEntity);
    }

    async updateProduct(product: Product) {
        const productEntity = new ProductEntity;

        Object.assign(productEntity, product);

        console.log(productEntity)

        if (!productEntity.id) //throw new BadRequest

        return await this.productRepository.saveOrUpdateProduct(productEntity);
    }

    async deleteProduct(id: number) {
        const productEntity = this.productRepository.findProductById(id);

        if (!productEntity) // throw new notFound

        return await this.productRepository.deleteProduct(productEntity);
    }

    async findByCategory(category: string) {
        return await this.productRepository.findProductByCategory(category);
    }
}