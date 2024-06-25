import { StrategyWhereUniqueInput } from "../strategy/StrategyWhereUniqueInput";

export type BacktestResultCreateInput = {
  backtestDate?: Date | null;
  finalCapital?: number | null;
  initialCapital?: number | null;
  strategy?: StrategyWhereUniqueInput | null;
};
