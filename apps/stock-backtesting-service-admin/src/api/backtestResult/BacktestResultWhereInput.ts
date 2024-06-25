import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StrategyWhereUniqueInput } from "../strategy/StrategyWhereUniqueInput";

export type BacktestResultWhereInput = {
  backtestDate?: DateTimeNullableFilter;
  finalCapital?: FloatNullableFilter;
  id?: StringFilter;
  initialCapital?: FloatNullableFilter;
  strategy?: StrategyWhereUniqueInput;
};
