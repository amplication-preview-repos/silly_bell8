import { Module } from "@nestjs/common";
import { BacktestResultModuleBase } from "./base/backtestResult.module.base";
import { BacktestResultService } from "./backtestResult.service";
import { BacktestResultController } from "./backtestResult.controller";
import { BacktestResultResolver } from "./backtestResult.resolver";

@Module({
  imports: [BacktestResultModuleBase],
  controllers: [BacktestResultController],
  providers: [BacktestResultService, BacktestResultResolver],
  exports: [BacktestResultService],
})
export class BacktestResultModule {}
