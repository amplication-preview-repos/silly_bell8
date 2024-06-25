import { SortOrder } from "../../util/SortOrder";

export type BlogEventOrderByInput = {
  createdAt?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userInfo?: SortOrder;
};
