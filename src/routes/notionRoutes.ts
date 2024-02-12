import express from 'express';
import {createNotionDatabase, getNotionPageContents} from '../controllers/notionController';

const notionRouter = express.Router();

notionRouter.get('/pageContents', getNotionPageContents)

notionRouter.post('/database', createNotionDatabase);

export default notionRouter;