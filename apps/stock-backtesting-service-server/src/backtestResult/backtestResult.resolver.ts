import * as graphql from "@nestjs/graphql";
import { BacktestResultResolverBase } from "./base/backtestResult.resolver.base";
import { BacktestResult } from "./base/BacktestResult";
import { BacktestResultService } from "./backtestResult.service";

@graphql.Resolver(() => BacktestResult)
export class BacktestResultResolver extends BacktestResultResolverBase {
  constructor(protected readonly service: BacktestResultService) {
    super(service);
  }
}
