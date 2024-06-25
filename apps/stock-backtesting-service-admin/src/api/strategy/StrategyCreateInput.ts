import { BacktestResultCreateNestedManyWithoutStrategiesInput } from "./BacktestResultCreateNestedManyWithoutStrategiesInput";

export type StrategyCreateInput = {
  backtestResults?: BacktestResultCreateNestedManyWithoutStrategiesInput;
  code?: string | null;
  description?: string | null;
  name?: string | null;
};
