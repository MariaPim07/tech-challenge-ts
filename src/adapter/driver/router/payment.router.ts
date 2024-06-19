import { PaymentRepository } from '../../driven/repository/payment.repository';
import { Router } from "express";
import { PaymentService } from "../../../core/application/services/payment.service";
import { PaymentController } from "../controller/payment.controller";
import { OrderRepository } from '../../../infrastructure/repository/order.repository';

const paymentRouter = Router();

const orderRepository = new OrderRepository()
const paymentRepository = new PaymentRepository();
const paymentService = new PaymentService(paymentRepository, orderRepository);
const paymentController = new PaymentController(paymentService);

paymentRouter.post("/:id", (req, res) => {
    // #swagger.tags = ['Pagamento']
    // #swagger.description = Salva método de pagamento.
    /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                $paymentMethod: {'@enum': [
                    'PAYMENT_METHOD_MONEY',
                    'PAYMENT_METHOD_QR_CODE'
                ]}
            }
    } */
    // #swagger.responses[200] = { description: 'Método de pagamento salvo com sucesso.' }
    // #swagger.responses[404] = { description: 'Pagamento não encontrado.' }
    // #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    return paymentController.paymentMethod(req, res);
});

export default paymentRouter;