"use client";

import { useState } from "react";
import Link from "next/link";
import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import SlashIcon from "@/icons/SlashIcon";
import { useParams, useSearchParams } from "next/navigation";
import productImage from "../../../../../../public/productImage.png";
import { ProductsSchema } from "@/lib/AdminTypes";
import SortIcon from "@/icons/SortIcon";
import ProductDropDown from "@/components/ProductDrop";
import SearchIcon from "@/icons/SearchIcon";
import ProductCard from "@/components/ProductCard";

const productsData: ProductsSchema[] = [
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "123wqer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "13wqer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "123wqe",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "123wer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "13wqer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "1wqer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "23wqe",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "12er",
  },
];

export default function AdminEachProductCategory() {
  const searchParams = useSearchParams();
  const active = searchParams.get("active");
  const params = useParams();
  const { category } = params;

  const [searchValue, setSearchValue] = useState("");

  function dropCB(value: string) {
    console.log(value);
  }

  return (
    <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
      <div className="flex gap-[12px] py-[10px]">
        <div className="text-text-normal">
          <AdminProductsIcon />
        </div>
        <div className="text-text-disabled">
          <SlashIcon />
        </div>

        <Link
          href={`/admin/products?active=${active as string}`}
          className="small text-text-normal font-medium leading-[20px]"
        >
          {active}
        </Link>

        <div className="text-text-disabled">
          <SlashIcon />
        </div>

        <p className="small text-primary-100 !font-medium">Hoodie</p>
      </div>

      <h3 className="!font-semibold text-text-loud leading-[40px]">Hoodie</h3>

      <div className="w-full flex flex-col gap-[32px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-[16px]">
            <div className="shadow flex gap-[6px] px-[16px] py-[10px] rounded-[6px]">
              <SortIcon />
              <p className="small text-text-muted font-semibold">Sort by</p>
            </div>

            <ProductDropDown cb={dropCB} />
          </div>

          <div className="shadow flex gap-[10px] items-center p-[10px] rounded-[6px]">
            <div className="text-[#818898]">
              <SearchIcon />
            </div>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search"
              className="font-normal font-inter text-[16px] text-text-subdued leading-[24px] focus:border-none focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[24px]">
          {productsData.map((data, index) => (
            <ProductCard key={index} data={data} />
          ))}
        </div>

        <div className="w-full px-[24px] py-[16px] border-t-[1px] border-t-[#EAECF0] flex justify-between">
          <button className="py-[8px] px-[14px] shadow text-center rounded-[6px]">
            <p className="small font-medium leading-[20px] text-[#344054]">
              Previous
            </p>
          </button>
          <p className="small font-medium leading-[20px] text-[#344054]">
            Page 1 of 10
          </p>
          <button className="py-[8px] px-[14px] shadow text-center rounded-[6px]">
            <p className="small font-medium leading-[20px] text-[#344054]">
              Next
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
