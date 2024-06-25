import { SortOrder } from "../../util/SortOrder";

export type MarketDataOrderByInput = {
  closePrice?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  highPrice?: SortOrder;
  id?: SortOrder;
  lowPrice?: SortOrder;
  openPrice?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
