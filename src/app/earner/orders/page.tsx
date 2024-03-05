"use client";

import ClockPendingIcon from "@/icons/ClockPendingIcon";
import ShoppingBagIcon from "@/icons/ShoppingBagIcon";
import { ReactElement, useMemo, useState } from "react";
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
  StatusRow,
  TableHeader,
  TableRow,
} from "@/components/TableBody";
import SearchIcon from "@/icons/SearchIcon";
import ViewIcon from "@/icons/ViewIcon";
import Link from "next/link";

type CardDataSchema = {
  icon: ReactElement;
  title: string;
  value: string;
};

type OrdersSchema = {
  created_at: string;
  orderId: string;
  quantity: number;
  amount: string;
  commission: string;
  paymentStatus: string;
  deliveryStatus: string;
  slug: string;
};

const cardData: CardDataSchema[] = [
  {
    icon: <ClockPendingIcon />,
    title: "Total pending orders",
    value: "31",
  },
  {
    icon: <ShoppingBagIcon />,
    title: "Total orders completed",
    value: "500",
  },
];

const tableData: OrdersSchema[] = [
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    quantity: 2,
    amount: "₦ 10,500",
    commission: "₦ 500",
    paymentStatus: "Paid",
    deliveryStatus: "Packed",
    slug: "1234ewq",
  },
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    quantity: 5,
    amount: "₦ 10,500",
    commission: "₦ 500",
    paymentStatus: "Paid",
    deliveryStatus: "Packed",
    slug: "1234wq",
  },
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    quantity: 3,
    amount: "₦ 10,500",
    commission: "₦ 500",
    paymentStatus: "Paid",
    deliveryStatus: "Picked up",
    slug: "14ewq",
  },
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    quantity: 6,
    amount: "₦ 10,500",
    commission: "₦ 500",
    paymentStatus: "Paid",
    deliveryStatus: "Completed",
    slug: "234ewq",
  },
  {
    created_at: "15 Sep 2023",
    orderId: "841896",
    quantity: 9,
    amount: "₦ 10,500",
    commission: "₦ 500",
    paymentStatus: "Pending",
    deliveryStatus: "Completed",
    slug: "1234q",
  },
];

export default function OrdersPage() {
  const [data, setData] = useState(() => [...tableData]);
  const [searchValue, setSearchValue] = useState("");

  const columns = useMemo<ColumnDef<OrdersSchema>[]>(
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
        id: "quantity",
        accessorKey: "quantity",
        header: () => <TableHeader title="Quantity" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "amount",
        accessorKey: "amount",
        header: () => <TableHeader title="Order amount" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "commission",
        accessorKey: "commission",
        header: () => <TableHeader title="Order commission" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "paymentStatus",
        accessorKey: "paymentStatus",
        header: () => <TableHeader title="Payment Status" />,
        cell: (info: any) => <StatusRow title={info.getValue()} />,
      },
      {
        id: "deliveryStatus",
        accessorKey: "deliveryStatus",
        header: () => <TableHeader title="Delivery status" />,
        cell: (info: any) => <StatusRow title={info.getValue()} />,
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
    <div className="w-full flex justify-center relative">
      <div className="w-full absolute top-0 left-0 bg-background-loud h-[220px]"></div>
      <div className="w-[1280px] px-[32px] flex flex-col gap-[32px] mt-[50px] mb-[100px] z-30">
        <h3 className="text-text-white leading-[40px]">Orders</h3>
        <div className="shadow w-full bg-background-white rounded-[12px] p-[20px] grid grid-cols-2 gap-[16px]">
          {cardData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>

        <div className="shadow w-full rounded-[12px] flex flex-col gap-[20px] px-[24px] py-[20px]">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-[5px]">
              <h5 className="text-[#101828] font-semibold leading-[28px]">
                Orders
              </h5>
              <p className="small text-[#667085]">All orders</p>
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

          <div className="shadow w-full rounded-[12px] flex flex-col">
            <table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
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
            <p className="small font-medium text-[#344054]">Page 1 of 10</p>

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
    </div>
  );
}

function Card({ data }: { data: CardDataSchema }) {
  return (
    <div className="flex flex-col icon-shadow rounded-[12px]">
      <div className="p-[16px] flex items-center gap-[12px] bg-background-disabled border-b-[1px] rounded-t-[12px]">
        <div className="icon-shadow w-[40px] h-[40px] rounded-[6px] bg-background-white p-[8px] flex justify-center items-center">
          {data.icon}
        </div>
        <p className="small font-medium text-text-subdued leading-[20px]">
          {data.title}
        </p>
      </div>
      <h4 className="px-[16px] py-[20px] text-text-muted font-semibold leading-[32px]">
        {data.value}
      </h4>
    </div>
  );
}
function TableAction({ slug, id }: { slug: string; id: string }) {
  return (
    <div className="flex justify-center px-[10px]">
      <Link
        href={`/earner/orders/${slug}?orderId=${id}`}
        className="text-text-normal"
      >
        <ViewIcon />
      </Link>
    </div>
  );
}
