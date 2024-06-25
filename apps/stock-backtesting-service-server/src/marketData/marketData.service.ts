import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketDataServiceBase } from "./base/marketData.service.base";

@Injectable()
export class MarketDataService extends MarketDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
