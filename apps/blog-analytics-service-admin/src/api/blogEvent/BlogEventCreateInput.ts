import { InputJsonValue } from "../../types";

export type BlogEventCreateInput = {
  eventType?: string | null;
  postId?: string | null;
  timestamp?: Date | null;
  userInfo?: InputJsonValue;
};
