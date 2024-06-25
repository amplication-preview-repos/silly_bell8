import { InputJsonValue } from "../../types";

export type BlogEventUpdateInput = {
  eventType?: string | null;
  postId?: string | null;
  timestamp?: Date | null;
  userInfo?: InputJsonValue;
};
