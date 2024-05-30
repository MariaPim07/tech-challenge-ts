import { Router } from "express";
import { ProductRepository } from "../../driven/repository/product.repository";
import { ProductService } from "../../../core/application/services/product.service";
import { ProductController } from "../controller/product.controller";

const productRouter = Router();

const productRepository = new ProductRepository;
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

productRouter.post("/", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = salva Informações de cadastro do produto.
    /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                $name: 'Nome Produto',
                $category: {'@enum': [
                    'CATEGORY_HAMBURGER',
                    'CATEGORY_ACCOMPANIMENT',
                    'CATEGORY_DRINK',
                    'CATEGORY_DESSERT'
                ]},
                $price: 6.50,
                description: 'Descrição produto.',
            }
    } */
    // #swagger.responses[200] = { description: 'Retorna dados de cadastro do produto.' }
    // #swagger.responses[400] = { description: 'Campos obrigatórios não informados.' }
    // #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    return productController.createProduct(req, res);
});

productRouter.put("/", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = salva Informações de edição do produto.
    /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                $id: 1,
                name: 'Nome Produto',
                category: {'@enum': [
                    'CATEGORY_HAMBURGER',
                    'CATEGORY_ACCOMPANIMENT',
                    'CATEGORY_DRINK',
                    'CATEGORY_DESSERT'
                ]},
                price: 6.50,
                description: 'Descrição produto.',
            }
    } */
    // #swagger.responses[200] = { description: 'Retorna dados de edição do produto.' }
    // #swagger.responses[400] = { description: 'Id do produto não informado.' }
    // #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    return productController.updateProduct(req, res);
});

productRouter.delete("/:id", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = deleta produto baseado no ID fornecido.
    // #swagger.responses[200] = { description: 'Produto deletado com sucesso.' }
    // #swagger.responses[404] = { description: 'Produto não encontrado.' }
    // #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    return productController.deleteProduct(req, res);
});

productRouter.post("/category", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = Lista informações do produto por categoria.
    /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                $category: {'@enum': [
                    'CATEGORY_HAMBURGER',
                    'CATEGORY_ACCOMPANIMENT',
                    'CATEGORY_DRINK',
                    'CATEGORY_DESSERT'
                ]},
            }
    } */
    // #swagger.responses[200] = { description: 'Retorna lista de produtos.' }
    // #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    return productController.findProductByCategory(req, res);
});

export default productRouter;
