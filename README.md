# LeetNotion Backend

LeetNotion is a browser extension that allows you to easily take notes from solved problems on LeetCode.

This repository contains the backend logic that handles requests and uses the [Notion SDK](https://github.com/makenotion/notion-sdk-js) to interact with the [Notion API](https://developers.notion.com).

## Motivation

I've heard many people say that the best way to get better at DSA and LeetCode problems is not trying to memorize every line of code of every problem, but understanding the main idea of the algorithm.

Therefore, I've started to solve more LeetCode problems and take notes from them in plain English on Notion. 
To be honest, it got tedious that after every problem I had to open Notion, go to my notes page, create a new table row, add the problem's category, name, link, difficulty and, of course, the description of the solution.

This is why I've decided to build a browser extension that sees when you succesfully solve a LeetCode problem and sends you a notification that asks you if you want to add the current problem details to your Notion page.

You don't even have to leave your LeetCode tab, just write your personal notes in a pop-up and the extension will handle the rest.

## Stack
  
  - [TypeScript](https://www.typescriptlang.org)
  - [Node.js](https://nodejs.org/en)
  - [Express](https://expressjs.com)
  - [Notion JS SDK](https://github.com/makenotion/notion-sdk-js)

## Installation

If you want to clone the project and run or modify the source code you can follow these steps:
  - Clone the repository
  - Assuming you have [node](https://nodejs.org/en) already installed on your machine, you can simply run:
    ```bash
      npm i
      npm run dev
    ```
  - Create a Notion account(if you don't already have one)
  - Go to [Notion Integrations](https://www.notion.so/my-integrations) and create a new integration with the default settings
  - As of the time when I write this README, Notion API does not support creating a new database/page without an already existing parent database/page, therefore you will have to manually create a parent page and add the integration:
    - Go to [your Notion workspace](https://www.notion.so/) and create a new page
    - Click the 3 dots in the top right corner and scroll down until you see ```+ Add Connection```, click it and select your own integration from the list.
  - Create a .env file at the root level of the project and add the following keys:
      ```
      NOTION_API_KEY="${YOUR_OWN_INTEGRATION_KEY}"
      NOTION_PAGE_ID="${YOUR_OWN_PAGE_ID}" // you can get your page id by copying the last 32 characters from the page URL
      ```

## License

You can clone and modify this project however you want.

For more details check [LICENSE](https://github.com/Rodioo/leetnotion-backend/blob/main/LICENSE).
