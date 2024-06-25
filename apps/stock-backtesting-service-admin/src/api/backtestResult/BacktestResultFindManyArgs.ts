import { BacktestResultWhereInput } from "./BacktestResultWhereInput";
import { BacktestResultOrderByInput } from "./BacktestResultOrderByInput";

export type BacktestResultFindManyArgs = {
  where?: BacktestResultWhereInput;
  orderBy?: Array<BacktestResultOrderByInput>;
  skip?: number;
  take?: number;
};
