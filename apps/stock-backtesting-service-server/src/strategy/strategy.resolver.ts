import * as graphql from "@nestjs/graphql";
import { StrategyResolverBase } from "./base/strategy.resolver.base";
import { Strategy } from "./base/Strategy";
import { StrategyService } from "./strategy.service";

@graphql.Resolver(() => Strategy)
export class StrategyResolver extends StrategyResolverBase {
  constructor(protected readonly service: StrategyService) {
    super(service);
  }
}
