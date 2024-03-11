"use client";

import AddIcon from "@/icons/AddIcon";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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
  AdminOrderStatusRow,
  DateRow,
  TableHeader,
  TableRow,
} from "@/components/TableBody";
import SearchIcon from "@/icons/SearchIcon";
import DropDown from "@/components/DropDown";
import EditIcon from "@/icons/EditIcon";
import ViewIcon from "@/icons/ViewIcon";
import { useQuery } from "@tanstack/react-query";
import AdminOrdersIcon from "@/icons/AdminLayout/AdminOrdersIcon";

type EarnerOrderTableDataSchema = {
  created_at: string;
  orderId: string;
  customer_name: string;
  order_amount: string;
  order_quantity: number;
  payment_status: string;
  order_status: string;
  buyer_type: string;
  commission: string;
  slug: string;
};

const tableData: EarnerOrderTableDataSchema[] = [
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    customer_name: "Mubarak Olabisi",
    order_amount: "₦ 500,705",
    order_quantity: 12,
    payment_status: "Paid",
    order_status: "Pending",
    buyer_type: "Customer",
    commission: "₦500",
    slug: "1234ewq",
  },
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    customer_name: "Samuel Ogunleti",
    order_amount: "₦ 500,705",
    order_quantity: 52,
    payment_status: "Paid",
    order_status: "Delivered",
    buyer_type: "Earner",
    commission: "₦500",
    slug: "14ewq",
  },
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    customer_name: "Abdulhakeem Olanrewaju",
    order_amount: "₦ 500,705",
    order_quantity: 13,
    payment_status: "Paid",
    order_status: "Shipped",
    buyer_type: "Customer",
    commission: "₦500",
    slug: "14ew34q",
  },
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    customer_name: "Gbadebo Soroye",
    order_amount: "₦ 500,705",
    order_quantity: 8,
    payment_status: "Unpaid",
    order_status: "Packed",
    buyer_type: "Customer",
    commission: "₦500",
    slug: "1ew34q",
  },
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    customer_name: "Phillip Obasi",
    order_amount: "₦ 500,705",
    order_quantity: 12,
    payment_status: "Unpaid",
    order_status: "Unpacked",
    buyer_type: "Customer",
    commission: "₦500",
    slug: "1ewq",
  },
];

export default function AdminEarnerOrders() {
  const [data, setData] = useState(() => [...tableData]);
  const [searchValue, setSearchValue] = useState("");

  const columns = useMemo<ColumnDef<EarnerOrderTableDataSchema>[]>(
    () => [
      {
        id: "created_at",
        accessorKey: "created_at",
        header: () => <TableHeader title="Date Created" />,
        cell: (info: any) => {
          return <DateRow date={info.getValue()} />;
        },
      },
      {
        id: "orderId",
        accessorKey: "orderId",
        header: () => <TableHeader title="Order Id" />,
        cell: (info: any) => {
          return <TableRow title={info.getValue()} />;
        },
      },
      {
        id: "customer_name",
        accessorKey: "customer_name",
        header: () => <TableHeader title="Customer name" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "order_amount",
        accessorKey: "order_amount",
        header: () => <TableHeader title="Order amount" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "order_quantity",
        accessorKey: "order_quantity",
        header: () => <TableHeader title="Order quantity" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "payment_status",
        accessorKey: "payment_status",
        header: () => <TableHeader title="Payment status" />,
        cell: (info: any) => <AdminOrderStatusRow title={info.getValue()} />,
      },
      {
        id: "order_status",
        accessorKey: "order_status",
        header: () => <TableHeader title="Order status" />,
        cell: (info: any) => <AdminOrderStatusRow title={info.getValue()} />,
      },
      {
        id: "buyer_type",
        accessorKey: "buyer_type",
        header: () => <TableHeader title="Buyer type" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "commission",
        accessorKey: "commission",
        header: () => <TableHeader title="Total commission" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "slug",
        accessorKey: "slug",
        header: () => <TableHeader title="" />,
        cell: ({ row }) => {
          return (
            <TableAction slug={row.original.slug} id={row.original.orderId} />
          );
        },
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
    <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[12px]">
          <div className="text-text-normal">
            <AdminOrdersIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 !font-medium">Earner Orders</p>
        </div>

        <Link
          href={"/admin/orders/earner-orders/create-level"}
          className="bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
        >
          <AddIcon />
          <p className="small !font-semibold text-text-white">Create order</p>
        </Link>
      </div>

      <h3 className="!font-semibold text-text-loud leading-[40px]">
        Earner Orders
      </h3>

      <div className="shadow w-full rounded-[12px] flex flex-col overflow-x-visible">
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

        <div className="w-full admin-earner-orders">
          <table className="w-full min-w-[1360px]">
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
    </div>
  );
}

function TableAction({ slug, id }: { slug: string; id: string }) {
  return (
    <div className="flex gap-[24px] justify-center">
      <button className="text-text-normal">
        <ViewIcon />
      </button>
      <button className="text-text-normal">
        <EditIcon />
      </button>
    </div>
  );
}
