import { HttpException } from '../../HttpException';
import { Product } from '../../entities/product';
import { CategoryEnum } from '../../enums/category.enum';
import { IProductRepository } from '../../repository/IProduct.repository';

export class UpdateProductUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(product: Product): Promise<Product> {
        this.requiredValidation(product);

        this.categoryValidation(product.category);

        return await this.productRepository.saveOrUpdateProduct(product);
    }

    private requiredValidation(product: Product) {   
        if (!product.id) throw new HttpException(400, "id do produto não informado.");
    }

    private categoryValidation(category: string) {
        if (!category) return;

        const isValid = !!((<any>Object).values(CategoryEnum).includes(category));

        if (!isValid) throw new HttpException(400, "categoria informada não é valida");
    }
} 