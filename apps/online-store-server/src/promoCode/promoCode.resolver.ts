import * as graphql from "@nestjs/graphql";
import { PromoCodeResolverBase } from "./base/promoCode.resolver.base";
import { PromoCode } from "./base/PromoCode";
import { PromoCodeService } from "./promoCode.service";

@graphql.Resolver(() => PromoCode)
export class PromoCodeResolver extends PromoCodeResolverBase {
  constructor(protected readonly service: PromoCodeService) {
    super(service);
  }
}
