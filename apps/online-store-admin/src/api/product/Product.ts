import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  updatedAt: Date;
};
