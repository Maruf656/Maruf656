import { PromoCodeWhereInput } from "./PromoCodeWhereInput";
import { PromoCodeOrderByInput } from "./PromoCodeOrderByInput";

export type PromoCodeFindManyArgs = {
  where?: PromoCodeWhereInput;
  orderBy?: Array<PromoCodeOrderByInput>;
  skip?: number;
  take?: number;
};
