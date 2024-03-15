import { ReactElement } from "react";

export type BoolDropdownSchema = { label: string; value: boolean };

export type ProductVariationSchema = {
  id: string;
  color: string;
  size: string;
  quantity: number;
  variationStatus: boolean;
};

export type NavLinkSchema = {
  title: string;
  path: string;
  icon: ReactElement;
};

export type AdminAddProductOrderSchema = {
  id: string;
  product: string;
  color: string;
  size: string;
  quantity: number;
};
