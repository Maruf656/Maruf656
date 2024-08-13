import { PromoCode as TPromoCode } from "../api/promoCode/PromoCode";

export const PROMOCODE_TITLE_FIELD = "code";

export const PromoCodeTitle = (record: TPromoCode): string => {
  return record.code?.toString() || String(record.id);
};
