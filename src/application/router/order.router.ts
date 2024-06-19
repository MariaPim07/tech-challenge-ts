import { Router } from "express";
import { OrderRepository } from "../../infrastructure/repository/order.repository";
import { OrderController } from "../controller/order.controller";
import CreateOrderUseCase from "../../domain/usecase/order/createOrder.usecase";
import { ProductRepository } from "../../infrastructure/repository/product.repository";
import UpdateOrderUseCase from "../../domain/usecase/order/updateOrder.usecase";

const orderRouter = Router();

const orderRepository = new OrderRepository;
const productRepository = new ProductRepository;

const createOrderUseCase = new CreateOrderUseCase(orderRepository, productRepository);
const updateOrderUseCase = new UpdateOrderUseCase(orderRepository);

const orderController = new OrderController(createOrderUseCase, updateOrderUseCase);

orderRouter.post("/", (req, res) => {
    // #swagger.tags = ['Pedido']
    // #swagger.description = salva informações de cadastro do pedido.
    /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: { $ref: '#/definitions/order' }
    } */
    // #swagger.responses[200] = { description: 'Pedido cadastrado com sucesso.' }
    // #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    return orderController.createOrder(req, res);
});

orderRouter.put("/:id", (req, res) => {
    // #swagger.tags = ['Pedido']
    // #swagger.description = altera status do pedido.
    /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                $status: {'@enum': [
                    'ORDER_READY',
                    'ORDER_FINISHED'
                ]}
            }
    } */
    // #swagger.responses[200] = { description: 'Status alterado com sucesso.' }
    // #swagger.responses[404] = { description: 'Pedido não encontrado.' }
    // #swagger.responses[500] = { description: 'Erro interno do servidor.' }
    return orderController.updateOrderStatus(req, res);
});

export default orderRouter;