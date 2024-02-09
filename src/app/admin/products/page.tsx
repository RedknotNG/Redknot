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
    <div className="adminWidth flex flex-col gap-[50px] p-[32px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[12px]">
          <div className="text-text-normal">
            <AdminProductsIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 font-medium leading-[20px]">
            All products
          </p>
        </div>

        <Link
          href={"/admin/earner-levels/create-level"}
          className="bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
        >
          <p className="small font-semibold leading-[20px] text-text-white">
            Create product
          </p>
        </Link>
      </div>

      <h3 className="font-semibold text-text-loud leading-[40px]">Products</h3>

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

      {/* <div className="shadow w-full rounded-[12px] flex flex-col">
        <div className="w-full flex justify-between px-[24px] py-[20px]">
          <div className="flex gap-[10px] items-center">
            <p className="text-[#334155]">Show:</p>
            <DropDown />
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
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-background-disabled">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="border-b-[1px]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="border-b-[1px]">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
