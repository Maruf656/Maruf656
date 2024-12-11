import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PromoCodeWhereInput = {
  code?: StringNullableFilter;
  discount?: FloatNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
};
