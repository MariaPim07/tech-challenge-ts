import "reflect-metadata"
import express, { Express } from 'express';
import clientRouter from './router/client.router';
import productRouter from '../../application/router/product.router';
import orderRouter from './router/order.router';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import paymentRouter from "./router/payment.router";

const swaggerJson = JSON.parse(fs.readFileSync('src/adapter/driver/swagger-output.json', 'utf-8'))

export const app: Express = express();

app.use(express.json());

app.use("/client", clientRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/payment", paymentRouter);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
