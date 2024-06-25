import { Comment } from "../comment/Comment";

export type Post = {
  author: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  published: boolean | null;
  title: string | null;
  updatedAt: Date;
};
