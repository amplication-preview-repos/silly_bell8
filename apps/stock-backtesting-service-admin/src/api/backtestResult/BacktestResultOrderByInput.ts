import { SortOrder } from "../../util/SortOrder";

export type BacktestResultOrderByInput = {
  backtestDate?: SortOrder;
  createdAt?: SortOrder;
  finalCapital?: SortOrder;
  id?: SortOrder;
  initialCapital?: SortOrder;
  strategyId?: SortOrder;
  updatedAt?: SortOrder;
};
