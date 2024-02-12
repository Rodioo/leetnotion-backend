import notion from "../notion";
import NotionObject from "../common/types/notionObject.type";
import NotionError from "../common/types/notionError.type";

export default class NotionModel {
  static async createNotionDatabase(pageId: string): Promise<NotionObject | NotionError> {
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
