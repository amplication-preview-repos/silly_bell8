import { BacktestResultListRelationFilter } from "../backtestResult/BacktestResultListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StrategyWhereInput = {
  backtestResults?: BacktestResultListRelationFilter;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
