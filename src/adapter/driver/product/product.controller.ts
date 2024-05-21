import { ProductService } from "../../../core/application/services/product.service";
import { Request, Response } from "express";

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    async createProduct(req: Request, res: Response) {
        const product = req.body;
        try {
            await this.productService.createProduct(product);
            return res.status(200).json("Produto cadastrado com sucesso.");
        } catch (err) {
            console.log(err)
            return res.status(500).json("Ocorreu um erro ao cadastrar o produto.");
        }
    }

    async updateProduct(req: Request, res: Response) {
        const product = req.body;
        try {
            await this.productService.updateProduct(product);
            return res.status(200).json("Produto atualizado com sucesso.");
        } catch {
            return res.status(500).json("Ocorreu um erro ao atualizar o produto.");
        }
    }

    async deleteProduct(req: Request, res: Response) {
        const id = Number(req.params.id);
        try {
            await this.productService.deleteProduct(id);
            return res.status(200).json("Produto removido com sucesso.");
        } catch {
            return res.status(500).json("Ocorreu um erro ao remover o produto.");
        }
    }

    async findProductByCategory(req: Request, res: Response) {
        const {category} = req.body;
        try {
            const productList = await this.productService.findByCategory(category);
            return res.status(200).json(productList);
        } catch {
            return res.status(500).json("Ocorreu um erro ao buscar os produtos.");
        }
    }
}