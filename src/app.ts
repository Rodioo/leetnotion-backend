import express from 'express';
import notionRouter from "./routes/notionRoutes";

const app = express();

app.use(express.json());

const BASE_API_ENDPOINT = '/api/v1'

app.use(`${BASE_API_ENDPOINT}/notion`, notionRouter);

export default app;