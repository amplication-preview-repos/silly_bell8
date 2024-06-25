import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketDataService } from "./marketData.service";
import { MarketDataControllerBase } from "./base/marketData.controller.base";

@swagger.ApiTags("marketData")
@common.Controller("marketData")
export class MarketDataController extends MarketDataControllerBase {
  constructor(protected readonly service: MarketDataService) {
    super(service);
  }
}
