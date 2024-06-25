import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MarketDataWhereInput = {
  closePrice?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  highPrice?: FloatNullableFilter;
  id?: StringFilter;
  lowPrice?: FloatNullableFilter;
  openPrice?: FloatNullableFilter;
  volume?: IntNullableFilter;
};
