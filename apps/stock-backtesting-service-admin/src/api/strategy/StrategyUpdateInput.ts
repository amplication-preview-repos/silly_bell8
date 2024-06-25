import { BacktestResultUpdateManyWithoutStrategiesInput } from "./BacktestResultUpdateManyWithoutStrategiesInput";

export type StrategyUpdateInput = {
  backtestResults?: BacktestResultUpdateManyWithoutStrategiesInput;
  code?: string | null;
  description?: string | null;
  name?: string | null;
};
