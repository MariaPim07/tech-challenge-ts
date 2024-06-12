import { IProductRepository } from '../../repository/IProduct.repository';
import { Product } from '../../entities/product';
import { HttpException } from '../../HttpException';
import { CategoryEnum } from '../../enums/category.enum';

export class findProductByCategoryUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(category: string): Promise<Product[]> {
        this.categoryValidation(category);
        
        return await this.productRepository.findProductByCategory(category);
    }

    private categoryValidation(category: string) {
        if (!category) throw new HttpException(400, "categoria não informada");

        const isValid = !!((<any>Object).values(CategoryEnum).includes(category));

        if (!isValid) throw new HttpException(400, "categoria informada não é valida");
    }
}