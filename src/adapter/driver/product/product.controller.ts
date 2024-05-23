import ExceptionHandler from "../../../core/ExceptionHandler";
import { ProductService } from "../../../core/application/services/product.service";
import { NextFunction, Request, Response } from "express";

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    async createProduct(req: Request, res: Response) {
        const product = req.body;
        try {
            return res.status(200)
                .json(await this.productService.createProduct(product));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }

    async updateProduct(req: Request, res: Response) {
        const product = req.body;
        try {
            return res.status(200)
                .json(await this.productService.updateProduct(product));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }

    async deleteProduct(req: Request, res: Response) {
        const id = Number(req.params.id);
        try {
            await this.productService.deleteProduct(id);
            return res.status(200).json({message: "Produto removido com sucesso."});
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }

    async findProductByCategory(req: Request, res: Response) {
        const {category} = req.body;
        try {
            return res.status(200)
                .json(await this.productService.findByCategory(category));
        } catch (err) {
            ExceptionHandler(err, res);
        }
    }
}