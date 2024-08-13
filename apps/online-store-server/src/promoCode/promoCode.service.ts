import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromoCodeServiceBase } from "./base/promoCode.service.base";

@Injectable()
export class PromoCodeService extends PromoCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
