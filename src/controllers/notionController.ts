import { Request, Response } from 'express';
import NotionModel from "../models/notionModel";
import {isNotionError, isNotionObject} from "../common/utils/notionUtils";

export const createNotionDatabase = (req: Request, res: Response): void => {
  const pageId: string = "6ede119cde884cf896022cab02e63cdd"
  NotionModel.createNotionDatabase(pageId)
    .then((response) => {
      console.log(response)
      if (isNotionObject(response)) {
        res.status(200).json(response)
      } else if (isNotionError(response)) {
        res.status(response.status).json(response)
      }
    })
    .catch((error) => {
      console.log(error)
    })
};