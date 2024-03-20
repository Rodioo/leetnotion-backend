import {Request, Response} from 'express';
import NotionModel from '../models/notionModel';
import {APIResponseError} from '@notionhq/client';

export const createDatabase = (req: Request, res: Response): void => {
  const pageId = '6ede119cde884cf896022cab02e63cdd';
  NotionModel.createDatabase(pageId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error: APIResponseError) => {
      res.status(error.status).json(error);
    });
};

export const getPageContents = (req: Request, res: Response): void => {
  const pageId = '6ede119cde884cf896022cab02e63cdd';
  NotionModel.getPageContents(pageId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error: APIResponseError) => {
      res.status(error.status).json(error);
    });
};

export const createPage = (req: Request, res: Response): void => {
  const databaseId = 'eeee50af-6b39-4de6-ab82-5d09de6479b8';
  NotionModel.createPage(databaseId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error: APIResponseError) => {
      res.status(error.status).json(error);
    });
};
