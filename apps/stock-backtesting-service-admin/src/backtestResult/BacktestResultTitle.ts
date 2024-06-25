import { BacktestResult as TBacktestResult } from "../api/backtestResult/BacktestResult";

export const BACKTESTRESULT_TITLE_FIELD = "id";

export const BacktestResultTitle = (record: TBacktestResult): string => {
  return record.id?.toString() || String(record.id);
};
