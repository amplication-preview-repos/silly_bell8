import { Module } from "@nestjs/common";
import { StrategyModuleBase } from "./base/strategy.module.base";
import { StrategyService } from "./strategy.service";
import { StrategyController } from "./strategy.controller";
import { StrategyResolver } from "./strategy.resolver";

@Module({
  imports: [StrategyModuleBase],
  controllers: [StrategyController],
  providers: [StrategyService, StrategyResolver],
  exports: [StrategyService],
})
export class StrategyModule {}
