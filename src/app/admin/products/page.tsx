"use client";

import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { ReactElement, useState } from "react";

import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import AdminAllProducts from "@/components/AdminProducts/AllProducts";
import { useRouter, useSearchParams } from "next/navigation";
import AdminProductCategories from "@/components/AdminProducts/AdminProductCategories";

const switchButtonData = [
  "All products",
  "Colors data",
  "Sizes data",
  "Product categories",
];

export default function AdminProducts() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const active = searchParams.get("active");

  const [activeTab, setActiveTab] = useState<string>(active as string);

  function handleActive(data: string) {
    setActiveTab(data);
    router.push(`/admin/products?active=${data}`);
  }

  function boardHandler(switchCase: string) {
    let holder: ReactElement | string;
    switch (switchCase) {
      case "All products":
        holder = <AdminAllProducts />;
        break;
      case "Colors data":
        holder = "Colors Data";
        break;
      case "Sizes data":
        holder = "Sizes Data";
        break;
      case "Product categories":
        holder = <AdminProductCategories />;
        break;

      default:
        holder = <AdminAllProducts />;
    }
    return holder;
  }
  return (
    <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[12px] py-[10px]">
          <div className="text-text-normal">
            <AdminProductsIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 !font-medium">{activeTab}</p>
        </div>

        {active === "All products" && (
          <Link
            href={`/admin/products/create-product?active=${active}`}
            className="bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
          >
            <p className="small !font-semibold text-text-white">
              Create product
            </p>
          </Link>
        )}

        {active === "Product categories" && (
          <Link
            href={`/admin/products/categories/create-categories?active=${active}`}
            className="w-fit bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
          >
            <p className="small !font-semibold text-text-white">
              Create category
            </p>
          </Link>
        )}
      </div>

      <h3 className="!font-semibold text-text-loud leading-[40px]">Products</h3>

      <div className="flex gap-[20px] justify-left ">
        {switchButtonData.map((data, index) => {
          return (
            <button
              key={index}
              onClick={() => handleActive(data)}
              className={`font-inter text-[14px] font-medium leading-[20px] ${
                activeTab === data
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
