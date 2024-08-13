import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
