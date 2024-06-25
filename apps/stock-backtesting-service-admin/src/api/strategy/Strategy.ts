import { BacktestResult } from "../backtestResult/BacktestResult";

export type Strategy = {
  backtestResults?: Array<BacktestResult>;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
