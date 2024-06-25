import { MarketData as TMarketData } from "../api/marketData/MarketData";

export const MARKETDATA_TITLE_FIELD = "id";

export const MarketDataTitle = (record: TMarketData): string => {
  return record.id?.toString() || String(record.id);
};
