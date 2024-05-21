import express, { Express } from 'express';
import clientRouter from './client/client.router';

export const app: Express = express();

app.use(express.json());

app.use("/client", clientRouter);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
