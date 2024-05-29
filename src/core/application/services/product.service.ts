import { Product } from '../../domain/models/product';
import { ProductEntity } from '../../../adapter/driven/db/entities/product.entity';
import { HttpException } from '../../HttpException';
import { IProductRepository } from './../ports/IProduct.repository';

export class ProductService {
    constructor(private readonly productRepository: IProductRepository) {}

    async createProduct(product: Product) {
        this.requiredValidation(product);

        const productEntity = new ProductEntity;

        Object.assign(productEntity, product);

        return await this.productRepository.saveOrUpdateProduct(productEntity);
    }

    async updateProduct(product: Product) {
        const productEntity = new ProductEntity;

        Object.assign(productEntity, product);

        if (!productEntity.id) throw new HttpException(400, "id do produto não informado.");

        return await this.productRepository.saveOrUpdateProduct(productEntity);
    }

    async deleteProduct(idProduct: number) {
        const productEntity = await this.productRepository.findProductById(idProduct);

        if (!productEntity) throw new HttpException(404, "produto não encontrado.");

        return await this.productRepository.deleteProduct(productEntity);
    }

    async findByCategory(category: string) {
        return await this.productRepository.findProductByCategory(category);
    }

    private requiredValidation(product: Product) {   
        if (!product.name || !product.category || !product.price)
            throw new HttpException(400, "campos obrigatórios não informados.")
    }
}