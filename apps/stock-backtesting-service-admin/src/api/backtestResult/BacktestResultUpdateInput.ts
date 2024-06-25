import { StrategyWhereUniqueInput } from "../strategy/StrategyWhereUniqueInput";

export type BacktestResultUpdateInput = {
  backtestDate?: Date | null;
  finalCapital?: number | null;
  initialCapital?: number | null;
  strategy?: StrategyWhereUniqueInput | null;
};
