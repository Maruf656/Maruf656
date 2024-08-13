import { PromoCode as TPromoCode } from "../api/promoCode/PromoCode";

export const PROMOCODE_TITLE_FIELD = "id";

export const PromoCodeTitle = (record: TPromoCode): string => {
  return record.id?.toString() || String(record.id);
};
