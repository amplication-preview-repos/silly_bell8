import { Strategy as TStrategy } from "../api/strategy/Strategy";

export const STRATEGY_TITLE_FIELD = "name";

export const StrategyTitle = (record: TStrategy): string => {
  return record.name?.toString() || String(record.id);
};
