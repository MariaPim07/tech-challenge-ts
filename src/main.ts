import "reflect-metadata"
import orderRouter from "./adapter/driver/router/order.router";
import paymentRouter from "./adapter/driver/router/payment.router";
import clientRouter from "./application/router/client.router";
import productRouter from "./application/router/product.router";
import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

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
