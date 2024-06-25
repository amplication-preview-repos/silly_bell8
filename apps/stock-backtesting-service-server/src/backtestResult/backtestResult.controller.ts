import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BacktestResultService } from "./backtestResult.service";
import { BacktestResultControllerBase } from "./base/backtestResult.controller.base";

@swagger.ApiTags("backtestResults")
@common.Controller("backtestResults")
export class BacktestResultController extends BacktestResultControllerBase {
  constructor(protected readonly service: BacktestResultService) {
    super(service);
  }
}
