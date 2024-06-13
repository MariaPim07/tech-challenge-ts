import { HttpException } from '../../HttpException';
import { Product } from '../../entities/product';
import { IProductRepository } from '../../repository/IProduct.repository';

export class DeleteProductUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(idProduct: number): Promise<Product> {
        const product = await this.productRepository.findProductById(idProduct);

        if (!product) throw new HttpException(404, "produto não encontrado.");

        return await this.productRepository.deleteProduct(product);
    }
}