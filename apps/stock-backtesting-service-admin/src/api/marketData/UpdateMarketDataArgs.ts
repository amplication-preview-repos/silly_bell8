import { MarketDataWhereUniqueInput } from "./MarketDataWhereUniqueInput";
import { MarketDataUpdateInput } from "./MarketDataUpdateInput";

export type UpdateMarketDataArgs = {
  where: MarketDataWhereUniqueInput;
  data: MarketDataUpdateInput;
};
