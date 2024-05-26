import "reflect-metadata"
import express, { Express } from 'express';
import clientRouter from './client/client.router';
import productRouter from './product/product.router';

export const app: Express = express();

app.use(express.json());

app.use("/client", clientRouter);
app.use("/product", productRouter);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
