export default interface NotionError {
  object: "error",
  status: number,
  code: string,
  message: string,
}
