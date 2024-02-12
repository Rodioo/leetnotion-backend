import express from 'express';
import { createNotionDatabase } from "../controllers/notionController";

const notionRouter = express.Router();

notionRouter.get('/', createNotionDatabase);

export default notionRouter;