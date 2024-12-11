export type PromoCode = {
  code: string | null;
  createdAt: Date;
  discount: number | null;
  expiryDate: Date | null;
  id: string;
  updatedAt: Date;
};
