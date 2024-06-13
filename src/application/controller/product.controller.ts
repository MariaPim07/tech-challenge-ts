import { FindProductByCategoryUseCase } from './../../domain/usecase/product/findProductByCategory.usecase';
import { DeleteProductUseCase } from './../../domain/usecase/product/deleteProduct.usecase';
import { UpdateProductUseCase } from './../../domain/usecase/product/updateProduct.usecase';
import { CreateProductUseCase } from './../../domain/usecase/product/createProduct.usecase';
import ExceptionHandler from '../error/ExceptionHandler';
import { Request, Response } from "express";

export class ProductController {
    constructor(
        private readonly createProductUseCase: CreateProductUseCase, 
        private readonly updateProductUseCase: UpdateProductUseCase,
        private readonly deleteProductUseCase: DeleteProductUseCase,
        private readonly findProductByCategoryUseCase: FindProductByCategoryUseCase
    ) {}

    async createProduct(req: Request, res: Response) {
        const product = req.body;
        try {
            return res.status(200)
                .json(await this.createProductUseCase.execute(product));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }

    async updateProduct(req: Request, res: Response) {
        const product = req.body;
        try {
            return res.status(200)
                .json(await this.updateProductUseCase.execute(product));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }

    async deleteProduct(req: Request, res: Response) {
        const id = Number(req.params.id);
        try {
            await this.deleteProductUseCase.execute(id);
            return res.status(200).json({message: "Produto removido com sucesso."});
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }

    async findProductByCategory(req: Request, res: Response) {
        const {category} = req.body;
        try {
            return res.status(200)
                .json(await this.findProductByCategoryUseCase.execute(category));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }
}