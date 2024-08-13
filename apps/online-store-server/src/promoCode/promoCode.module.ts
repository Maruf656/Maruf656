import { Module } from "@nestjs/common";
import { PromoCodeModuleBase } from "./base/promoCode.module.base";
import { PromoCodeService } from "./promoCode.service";
import { PromoCodeController } from "./promoCode.controller";
import { PromoCodeResolver } from "./promoCode.resolver";

@Module({
  imports: [PromoCodeModuleBase],
  controllers: [PromoCodeController],
  providers: [PromoCodeService, PromoCodeResolver],
  exports: [PromoCodeService],
})
export class PromoCodeModule {}
