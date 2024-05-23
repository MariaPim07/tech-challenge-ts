import { Router } from "express";
import { OrderRepository } from "../../driven/repository/order.repository";
import { OrderService } from "../../../core/application/services/order.service";
import { OrderController } from "./order.controller";

const orderRouter = Router();

const orderRepository = new OrderRepository;
const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

orderRouter.post("/", (req, res) => orderController.createOrder(req, res));
orderRouter.put("/", (req, res) => orderController.updateOrderStatus(req, res));

export default orderRouter;