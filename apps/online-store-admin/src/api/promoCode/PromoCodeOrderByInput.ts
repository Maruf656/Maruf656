import { SortOrder } from "../../util/SortOrder";

export type PromoCodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
