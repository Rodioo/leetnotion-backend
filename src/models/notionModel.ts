import notion from '../notion';
import {
  CreateDatabaseResponse,
  CreatePageResponse,
  ListBlockChildrenResponse,
} from '@notionhq/client/build/src/api-endpoints';

export default class NotionModel {
  static async getPageContents(
    pageId: string
  ): Promise<ListBlockChildrenResponse> {
    return await notion.blocks.children.list({
      block_id: pageId,
      page_size: 10,
    });
  }

  static async createDatabase(pageId: string): Promise<CreateDatabaseResponse> {
    return await notion.databases.create({
      parent: {
        type: 'page_id',
        page_id: pageId,
      },
      icon: {
        type: 'emoji',
        emoji: '🫣',
      },
      title: [
        {
          type: 'text',
          text: {
            content: 'LeetNotion',
            link: null,
          },
        },
      ],
      properties: {
        NAME: {
          title: {},
        },
        CATEGORY: {
          rich_text: {},
        },
        DIFFICULTY: {
          select: {
            options: [
              {
                name: 'EASY',
                color: 'green',
              },
              {
                name: 'MEDIUM',
                color: 'yellow',
              },
              {
                name: 'HARD',
                color: 'red',
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

  static async createPage(databaseId: string): Promise<CreatePageResponse> {
    return await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        NAME: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: '1. Two Sum',
                link: {
                  url: 'https://leetcode.com/problems/two-sum/description/',
                },
              },
            },
          ],
        },
        CATEGORY: {
          type: 'rich_text',
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Arrays & Hashing',
              },
            },
          ],
        },
        DIFFICULTY: {
          type: 'select',
          select: {
            name: 'MEDIUM',
          },
        },
        NOTES: {
          type: 'rich_text',
          rich_text: [
            {
              type: 'text',
              text: {
                content:
                  'use a map to store current {nums[i]: i} and for each iteration check if our current diff (target - nums[i]) is in the hm and return the 2 indexes',
              },
            },
          ],
        },
      },
    });
  }
}
