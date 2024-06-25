import { JsonValue } from "type-fest";

export type BlogEvent = {
  createdAt: Date;
  eventType: string | null;
  id: string;
  postId: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  userInfo: JsonValue;
};
