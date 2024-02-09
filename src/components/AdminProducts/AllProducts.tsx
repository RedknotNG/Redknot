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
import bs1 from "../../../public/bs1.png";
import { StaticImageData } from "next/image";
import EditIcon from "@/icons/EditIcon";
import ViewIcon from "@/icons/ViewIcon";
import { useQuery } from "@tanstack/react-query";
import { UseGetEarnerLevels } from "@/api/api";
import ImageIcon from "@/icons/ImageIcon";

type ProductsTableDataSchema = {
  name: { title: string; image: StaticImageData };
  quantity: number;
  price: string;
  commission: string;
  status: string;
  id: string;
};

const tableData: ProductsTableDataSchema[] = [
  {
    id: "12ew",
    name: { title: "Nini - Adire Agbada dress", image: bs1 },
    quantity: 20,
    price: "₦10,000",
    commission: "₦400",
    status: "Active",
  },
  {
    id: "12w",
    name: { title: "Oyin sleeveless Hoodie", image: bs1 },
    quantity: 50,
    price: "₦3,500",
    commission: "₦200",
    status: "Active",
  },
  {
    id: "12e",
    name: { title: "Otutu Set (children)", image: bs1 },
    quantity: 120,
    price: "₦10,000",
    commission: "₦1000",
    status: "Inactive",
  },
  {
    id: "1ew",
    name: { title: "Sleeveless Hoodie", image: bs1 },
    quantity: 45,
    price: "₦8,000",
    commission: "₦100,000",
    status: "Inactive",
  },
];

export default function AdminAllProducts() {
  const [data, setData] = useState(() => [...tableData]);
  const [searchValue, setSearchValue] = useState("");

  // const { data: earnerLevels, isLoading } = useQuery({
  //   queryFn: () => UseGetEarnerLevels(),
  //   queryKey: ["getEarnerLevels"],
  // });

  const columns = useMemo<ColumnDef<ProductsTableDataSchema>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: () => <TableHeader title="Name" />,
        cell: (info: any) => {
          return <ProductTitleRow name={info.getValue()} />;
        },
      },
      {
        id: "quantity",
        accessorKey: "quantity",
        header: () => <TableHeader title="Available quantity" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },

      {
        id: "price",
        accessorKey: "price",
        header: () => <TableHeader title="Customer price" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "commission",
        accessorKey: "commission",
        header: () => <TableHeader title="Commission" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "status",
        accessorKey: "status",
        header: () => <TableHeader title="Status" />,
        cell: (info: any) => <ProductStatusRow title={info.getValue()} />,
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

  // useEffect(() => {
  //   setData(earnerLevels?.data);
  // }, [earnerLevels]);

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
    </div>
  );
}

function TableAction({ id }: { id: string }) {
  return (
    <div className="flex gap-[24px] justify-center">
      <button className="text-text-normal">
        <EditIcon />
      </button>
      <button className="text-text-normal">
        <ViewIcon />
      </button>
      <button className="text-text-normal">
        <ImageIcon />
      </button>
    </div>
  );
}
