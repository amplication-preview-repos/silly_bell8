import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
};
