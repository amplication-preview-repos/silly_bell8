import { MarketDataWhereInput } from "./MarketDataWhereInput";
import { MarketDataOrderByInput } from "./MarketDataOrderByInput";

export type MarketDataFindManyArgs = {
  where?: MarketDataWhereInput;
  orderBy?: Array<MarketDataOrderByInput>;
  skip?: number;
  take?: number;
};
