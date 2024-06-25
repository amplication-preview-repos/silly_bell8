import { Module } from "@nestjs/common";
import { MarketDataModuleBase } from "./base/marketData.module.base";
import { MarketDataService } from "./marketData.service";
import { MarketDataController } from "./marketData.controller";
import { MarketDataResolver } from "./marketData.resolver";

@Module({
  imports: [MarketDataModuleBase],
  controllers: [MarketDataController],
  providers: [MarketDataService, MarketDataResolver],
  exports: [MarketDataService],
})
export class MarketDataModule {}
