import express from 'express';
import {
  createDatabase,
  createPage,
  getPageContents,
} from '../controllers/notionController';

const notionRouter = express.Router();

notionRouter.get('/pageContents', getPageContents);

notionRouter.post('/database', createDatabase);
notionRouter.post('/page', createPage);

export default notionRouter;
