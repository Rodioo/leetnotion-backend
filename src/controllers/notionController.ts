import { Request, Response } from 'express';
import NotionModel from "../models/notionModel";
import {APIResponseError} from '@notionhq/client';

export const createNotionDatabase = (req: Request, res: Response): void => {
  const pageId = "6ede119cde884cf896022cab02e63cdd"
  NotionModel.createNotionDatabase(pageId)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error: APIResponseError) => {
      res.status(error.status).json(error)
    })
};

export const getNotionPageContents = (req: Request, res: Response): void => {
  const pageId = "6ede119cde884cf896022cab02e63cdd"
  NotionModel.getNotionPageContents(pageId)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error: APIResponseError) => {
      res.status(error.status).json(error)
    })
};