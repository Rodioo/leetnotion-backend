import notion from "../notion";
import {CreateDatabaseResponse, ListBlockChildrenResponse} from '@notionhq/client/build/src/api-endpoints';

export default class NotionModel {

  static async getNotionPageContents(pageId: string): Promise<ListBlockChildrenResponse> {
    return await notion.blocks.children.list({
      block_id: pageId,
      page_size: 10,
    });
  }

  static async createNotionDatabase(pageId: string): Promise<CreateDatabaseResponse> {
    return await notion.databases.create({
      parent: {
        type: "page_id",
        page_id: pageId,
      },
      icon: {
        type: "emoji",
        emoji: "🫣",
      },
      title: [
        {
          type: "text",
          text: {
            content: "LeetNotion",
            link: null,
          },
        },
      ],
      properties: {
        CATEGORY: {
          title: {},
        },
        NAME: {
          rich_text: {},
        },
        DIFFICULTY: {
          select: {
            options: [
              {
                name: "EASY",
                color: "green",
              },
              {
                name: "MEDIUM",
                color: "yellow",
              },
              {
                name: "HARD",
                color: "red",
              },
            ],
          },
        },
        NOTES: {
          rich_text: {},
        },
      },
    });
  }
}
