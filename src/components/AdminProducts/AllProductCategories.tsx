"use client";

import { ReactElement, useEffect, useMemo, useState } from "react";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import {
  DateRow,
  ProductStatusRow,
  ProductTitleRow,
  TableHeader,
  TableRow,
} from "@/components/TableBody";
import SearchIcon from "@/icons/SearchIcon";
import DropDown from "@/components/DropDown";

import { StaticImageData } from "next/image";
import EditIcon from "@/icons/EditIcon";
import ViewIcon from "@/icons/ViewIcon";
import { useQuery } from "@tanstack/react-query";
import { UseGetEarnerLevels } from "@/api/api";
import ImageIcon from "@/icons/ImageIcon";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCategoriesTableDataSchema } from "@/lib/AdminTypes";

export default function AdminAllProductCategories({
  tableData,
}: {
  tableData: ProductCategoriesTableDataSchema[];
}) {
  const [data, setData] = useState(() => [...tableData]);
  const [searchValue, setSearchValue] = useState("");

  const columns = useMemo<ColumnDef<ProductCategoriesTableDataSchema>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: () => <TableHeader title="Category name" />,
        cell: (info: any) => {
          return <ProductTitleRow name={info.getValue()} />;
        },
      },

      {
        id: "description",
        accessorKey: "description",
        header: () => <TableHeader title="Description" />,
        cell: (info: any) => {
          return <TableRow title={info.getValue()} />;
        },
      },

      {
        id: "id",
        accessorKey: "id",
        header: () => <TableHeader title="" />,
        cell: (info: any) => <TableAction id={info.getValue()} />,
      },
    ],
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className="shadow w-full rounded-[12px] flex flex-col">
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

      <div className="w-full flex justify-between items-center px-[24px] py-[20px]">
        <p className="small font-medium text-[#334155]">Page 1 of 10</p>

        <div className="flex gap-[10px] items-center ">
          <button
            type="button"
            onClick={() => console.log("previous")}
            className="shadow bg-background-white px-[14px] py-[8px] text-[14px] font-medium leading-[20px] text-text-muted rounded-[6px]"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => console.log("next")}
            className="shadow bg-background-white px-[14px] py-[8px] text-[14px] font-medium leading-[20px] text-text-muted rounded-[6px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function TableAction({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const active = searchParams.get("active");
  return (
    <div className="flex gap-[24px] justify-center">
      <Link
        href={`/admin/products/categories/${id}?active=${active as string}`}
        className="text-text-normal"
      >
        <ViewIcon />
      </Link>
      <button className="text-text-normal">
        <EditIcon />
      </button>
    </div>
  );
}
