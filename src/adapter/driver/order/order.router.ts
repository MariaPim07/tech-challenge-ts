import { Router } from "express";
import { OrderRepository } from "../../driven/repository/order.repository";
import { OrderService } from "../../../core/application/services/order.service";
import { OrderController } from "./order.controller";
import { ProductRepository } from "../../driven/repository/product.repository";

const orderRouter = Router();

const orderRepository = new OrderRepository;
const productRepository = new ProductRepository;
const orderService = new OrderService(orderRepository, productRepository);
const orderController = new OrderController(orderService);

orderRouter.post("/", (req, res) => orderController.createOrder(req, res));
orderRouter.put("/:id", (req, res) => orderController.updateOrderStatus(req, res));

export default orderRouter;