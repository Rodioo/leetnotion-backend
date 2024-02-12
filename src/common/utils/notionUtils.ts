import NotionObject from "../types/notionObject.type";
import NotionError from "../types/notionError.type";

export const isNotionObject = (obj: NotionObject | NotionError): obj is NotionObject => {
  return ["database", "page"].includes((obj as NotionObject).object);
}

export const isNotionError = (obj: NotionObject | NotionError): obj is NotionError => {
  return (obj as NotionError).object === "error";
}