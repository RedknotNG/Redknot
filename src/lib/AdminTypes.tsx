import { StaticImageData } from "next/image";
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

export type ProductCategoriesTableDataSchema = {
  name: { title: string; image: StaticImageData };
  description: string;
  id: string;
};

export type ProductsSchema = {
  img: StaticImageData;
  title: string;
  position: string;
  available: number;
  price: string;
  id: string;
};
