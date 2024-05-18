import express, { Express } from 'express';

export const app: Express = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
