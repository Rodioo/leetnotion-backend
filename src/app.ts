import express from 'express';
import notionRouter from "./routes/notionRoutes";

const app = express();

app.use(express.json());

app.use('/notion', notionRouter);

export default app;