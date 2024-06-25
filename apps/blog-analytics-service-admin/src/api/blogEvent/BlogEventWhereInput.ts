import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BlogEventWhereInput = {
  eventType?: StringNullableFilter;
  id?: StringFilter;
  postId?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userInfo?: JsonFilter;
};
