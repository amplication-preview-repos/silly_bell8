import { StrategyWhereInput } from "./StrategyWhereInput";
import { StrategyOrderByInput } from "./StrategyOrderByInput";

export type StrategyFindManyArgs = {
  where?: StrategyWhereInput;
  orderBy?: Array<StrategyOrderByInput>;
  skip?: number;
  take?: number;
};
