import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
};
