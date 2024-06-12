import { HttpException } from '../../HttpException';
import { Product } from '../../entities/product';
import { CategoryEnum } from '../../enums/category.enum';
import { IProductRepository } from '../../repository/IProduct.repository';

export class CreateProductUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(product: Product): Promise<Product> {
        this.requiredValidation(product);

        this.categoryValidation(product.category);

        return await this.productRepository.saveOrUpdateProduct(product);
    }

    private requiredValidation(product: Product) {   
        if (!product.name || !product.category || !product.price)
            throw new HttpException(400, "campos obrigatórios não informados.")
    }

    private categoryValidation(category: string) {
        const isValid = !!((<any>Object).values(CategoryEnum).includes(category));

        if (!isValid) throw new HttpException(400, "categoria informada não é valida");
    }
}