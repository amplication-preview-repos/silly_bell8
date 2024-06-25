import * as graphql from "@nestjs/graphql";
import { MarketDataResolverBase } from "./base/marketData.resolver.base";
import { MarketData } from "./base/MarketData";
import { MarketDataService } from "./marketData.service";

@graphql.Resolver(() => MarketData)
export class MarketDataResolver extends MarketDataResolverBase {
  constructor(protected readonly service: MarketDataService) {
    super(service);
  }
}
