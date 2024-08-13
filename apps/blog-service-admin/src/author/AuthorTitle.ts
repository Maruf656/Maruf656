import { Author as TAuthor } from "../api/author/Author";

export const AUTHOR_TITLE_FIELD = "id";

export const AuthorTitle = (record: TAuthor): string => {
  return record.id?.toString() || String(record.id);
};
