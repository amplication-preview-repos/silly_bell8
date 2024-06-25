import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BacktestResultServiceBase } from "./base/backtestResult.service.base";

@Injectable()
export class BacktestResultService extends BacktestResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
