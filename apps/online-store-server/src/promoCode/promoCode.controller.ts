import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromoCodeService } from "./promoCode.service";
import { PromoCodeControllerBase } from "./base/promoCode.controller.base";

@swagger.ApiTags("promoCodes")
@common.Controller("promoCodes")
export class PromoCodeController extends PromoCodeControllerBase {
  constructor(protected readonly service: PromoCodeService) {
    super(service);
  }
}
