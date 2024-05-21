import { Router } from "express";
import { ProductRepository } from "../../driven/repository/product.repository";
import { ProductService } from "../../../core/application/services/product.service";
import { ClientController } from "../client/client.controller";
import { ProductController } from "./product.controller";

const productRouter = Router();

const productRepository = new ProductRepository;
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

productRouter.post("/", (req, res) => productController.createProduct(req, res));
productRouter.put("/", (req, res) => productController.updateProduct(req, res));
productRouter.delete("/:id", (req, res) => productController.deleteProduct(req, res));
productRouter.post("/category", (req, res) => productController.findProductByCategory(req, res));

export default productRouter;
