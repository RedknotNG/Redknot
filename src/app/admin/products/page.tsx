"use client";

import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { ReactElement, useState } from "react";

import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import AdminAllProducts from "@/components/AdminProducts/AllProducts";

const switchButtonData = [
  "All products",
  "Colors data",
  "Sizes data",
  "Product categories",
];

export default function AdminProducts() {
  const [activeTab, setActiveTab] = useState<number>(0);

  function boardHandler(switchCase: number) {
    let holder: ReactElement | string;
    switch (switchCase) {
      case 0:
        holder = <AdminAllProducts />;
        break;
      case 1:
        holder = "Colors Data";
        break;
      case 2:
        holder = "Sizes Data";
        break;
      case 3:
        holder = "Product categories";
        break;

      default:
        holder = <AdminAllProducts />;
    }
    return holder;
  }
  return (
    <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[12px]">
          <div className="text-text-normal">
            <AdminProductsIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 !font-medium">All products</p>
        </div>

        <Link
          href={"/admin/products/create-product"}
          className="bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
        >
          <p className="small !font-semibold text-text-white">Create product</p>
        </Link>
      </div>

      <h3 className="!font-semibold text-text-loud leading-[40px]">Products</h3>

      <div className="flex gap-[20px] justify-left ">
        {switchButtonData.map((data, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`font-inter text-[14px] font-medium leading-[20px] ${
                activeTab === index
                  ? "text-primary-700 underline underline-offset-[20px] border-b-primary-700 decoration-2"
                  : "text-text-normal"
              }`}
            >
              {data}
            </button>
          );
        })}
      </div>

      {boardHandler(activeTab)}
    </div>
  );
}
