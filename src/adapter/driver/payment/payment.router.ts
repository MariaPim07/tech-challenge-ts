import { PaymentRepository } from './../../driven/repository/payment.repository';
import { Router } from "express";
import { PaymentService } from "../../../core/application/services/payment.service";
import { PaymentController } from "./payment.controller";
import { OrderRepository } from '../../driven/repository/order.repository';

const paymentRouter = Router();

const orderRepository = new OrderRepository()
const paymentRepository = new PaymentRepository();
const paymentService = new PaymentService(paymentRepository, orderRepository);
const paymentController = new PaymentController(paymentService);

paymentRouter.post("/:id", (req, res) => paymentController.paymentMethod(req, res));

export default paymentRouter;