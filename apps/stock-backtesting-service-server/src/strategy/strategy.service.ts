import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StrategyServiceBase } from "./base/strategy.service.base";

@Injectable()
export class StrategyService extends StrategyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
