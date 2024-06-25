import { Strategy } from "../strategy/Strategy";

export type BacktestResult = {
  backtestDate: Date | null;
  createdAt: Date;
  finalCapital: number | null;
  id: string;
  initialCapital: number | null;
  strategy?: Strategy | null;
  updatedAt: Date;
};
