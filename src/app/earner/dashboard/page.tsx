"use client";

import ClockPendingIcon from "@/icons/ClockPendingIcon";
import MoneyIcon from "@/icons/MoneyIcon";
import ShoppingBagIcon from "@/icons/ShoppingBagIcon";
import BadgeIcon from "@/icons/BadgeIcon";
import CoinsIcon from "@/icons/CoinsIcon";
import Image, { StaticImageData } from "next/image";
import { ReactElement, useMemo, useState } from "react";
import Earner1 from "../../../../public/earner1.png";
import Earner2 from "../../../../public/earner2.png";
import Earner3 from "../../../../public/earner3.png";
import Earner4 from "../../../../public/earner4.png";
import Earner5 from "../../../../public/earner5.png";
import Earner6 from "../../../../public/earner6.png";
import bs1 from "../../../../public/bs1.png";
import bs2 from "../../../../public/bs2.png";
import bs3 from "../../../../public/bs3.png";
import bs4 from "../../../../public/bs4.png";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  Table,
  useReactTable,
} from "@tanstack/react-table";
import { StatusRow, TableHeader, TableRow } from "@/components/TableBody";

type CardDataSchema = {
  icon: ReactElement;
  title: string;
  value: string;
};

type EarnerCardDataSchema = {
  img: StaticImageData;
  name: string;
  value: string;
};

type BestSellingProductsSchema = {
  img: StaticImageData;
  title: string;
  size: string;
  sold: number;
};

type RecentOrderSchema = {
  orderId: string;
  amount: string;
  status: string;
  quantity: number;
  paymentStatus: string;
};

const cardData: CardDataSchema[] = [
  {
    icon: <MoneyIcon />,
    title: "Total commission earned",
    value: "₦543,410",
  },
  {
    icon: <ShoppingBagIcon />,
    title: "Total no of products sold",
    value: "6,342,705",
  },
  {
    icon: <ClockPendingIcon />,
    title: "Total pending earner orders",
    value: "123",
  },
  {
    icon: <MoneyIcon />,
    title: "Total commission earned",
    value: "₦543,410",
  },
];

const earnerCardData: EarnerCardDataSchema[] = [
  {
    img: Earner1,
    name: "M****** G*********",
    value: "₦350,000",
  },
  {
    img: Earner2,
    name: "M****** G*********",
    value: "₦350,000",
  },
  {
    img: Earner3,
    name: "M****** G*********",
    value: "₦350,000",
  },
  {
    img: Earner4,
    name: "M****** G*********",
    value: "₦350,000",
  },
  {
    img: Earner5,
    name: "M****** G*********",
    value: "₦350,000",
  },
  {
    img: Earner6,
    name: "M****** G*********",
    value: "₦350,000",
  },
];

const bestSellingProducts: BestSellingProductsSchema[] = [
  { img: bs1, title: "Midi Combat", size: "020 - Large", sold: 350 },
  { img: bs2, title: "Midi Combat", size: "020 - Large", sold: 150 },
  { img: bs3, title: "Midi Combat", size: "020 - Large", sold: 120 },
  { img: bs4, title: "Midi Combat", size: "020 - Large", sold: 50 },
];

const tableData: RecentOrderSchema[] = [
  {
    orderId: "#841896",
    amount: "₦ 10,500",
    status: "Packed",
    quantity: 2,
    paymentStatus: "Paid",
  },
  {
    orderId: "#841896",
    amount: "₦ 10,500",
    status: "Packed",
    quantity: 5,
    paymentStatus: "Paid",
  },
  {
    orderId: "#841896",
    amount: "₦ 10,500",
    status: "Delivered",
    quantity: 3,
    paymentStatus: "Paid",
  },
  {
    orderId: "#841896",
    amount: "₦ 10,500",
    status: "Delivered",
    quantity: 6,
    paymentStatus: "Paid",
  },
  {
    orderId: "#841896",
    amount: "₦ 10,500",
    status: "Packed",
    quantity: 2,
    paymentStatus: "Not paid",
  },
];

export default function EarnerDashboard() {
  const [data, setData] = useState(() => [...tableData]);

  const columns = useMemo<ColumnDef<RecentOrderSchema>[]>(
    () => [
      {
        id: "orderId",
        accessorKey: "orderId",
        header: () => <TableHeader title="Order Id" />,
        cell: (info: any) => {
          return <TableRow title={info.getValue()} />;
        },
      },
      {
        id: "amount",
        accessorKey: "amount",
        header: () => <TableHeader title="Total Amount" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "status",
        accessorKey: "status",
        header: () => <TableHeader title="Status" />,
        cell: (info: any) => <StatusRow title={info.getValue()} />,
      },
      {
        id: "quantity",
        accessorKey: "quantity",
        header: () => <TableHeader title="Quantity" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "paymentStatus",
        accessorKey: "paymentStatus",
        header: () => <TableHeader title="Payment Status" />,
        cell: (info: any) => <StatusRow title={info.getValue()} />,
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
        <h3 className="text-text-white leading-[40px]">Welcome back, Boye</h3>
        <div className="shadow w-full bg-background-white rounded-[12px] p-[20px] grid grid-cols-4 gap-[16px]">
          {cardData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </div>

        <div className="flex gap-[24px]">
          <div className="shadow w-[65%] rounded-[12px] flex flex-col gap-[20px] px-[24px] py-[20px]">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-[5px]">
                <h5 className="text-[#101828] font-semibold leading-[28px]">
                  Recent orders
                </h5>
                <p className="small text-[#667085] leading-[20px]">
                  The most recent orders
                </p>
              </div>

              <button className="h-fit icon-shadow p-[10px] rounded-[6px] text-[14px] text-text-muted leading-[20px] font-semibold text-center">
                View all
              </button>
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
          </div>
          <div className="shadow w-[35%] rounded-[12px]">
            <div className="py-[20px] px-[24px] bg-primary-100 rounded-t-[12px] text-text-white flex gap-[12px]">
              <BadgeIcon />
              <h5 className="font-semibold leading-[28px] text-text-white">
                Top Earners
              </h5>
            </div>
            <div className="py-[20px] px-[24px] flex flex-col gap-[12px]">
              {earnerCardData.map((data, index) => (
                <EarnerCard data={data} index={index + 1} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="shadow w-full flex flex-col gap-[20px] p-[24px] rounded-[12px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[#101828] font-semibold leading-[28px]">
              Best selling products
            </h5>

            <button className="text-primary-100 text-[14px] font-semibold text-center leading-[20px]">
              Show more
            </button>
          </div>

          <div className="w-full grid grid-cols-4 gap-[20px]">
            {bestSellingProducts.map((data, index) => (
              <BestProduct data={data} key={index} />
            ))}
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

function EarnerCard({
  data,
  index,
}: {
  data: EarnerCardDataSchema;
  index: number;
}) {
  return (
    <div className="flex justify-between items-center border-b-[1px]">
      <div className="p-[16px] flex items-center gap-[12px] ">
        <p className="small font-semibold text-[#475467] leading-[20px]">
          #{index}
        </p>

        <Image
          alt="Earner Img"
          src={data.img}
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="small font-medium text-text-loud leading-[20px]">
          {data.name}
        </p>
      </div>

      <div className="flex flex-col gap-[5px] items-center">
        <CoinsIcon />
        <p className="small font-medium text-text-muted leading-[20px]">
          {data.value}
        </p>
      </div>
    </div>
  );
}

function BestProduct({ data }: { data: BestSellingProductsSchema }) {
  return (
    <div className="flex flex-col gap-[12px]">
      <Image
        alt="Best Selling Img"
        src={data.img}
        width={277}
        height={288}
        className="rounded-[8px]"
      />

      <p className="font-medium leading-[24px] text-[#101928]">{data.title}</p>
      <p className="small font-normal leading-[20px] text-[#475467]">
        {data.size}
      </p>
      <p className="icon-shadow small w-fit font-medium px-[12px] py-[3px] leading-[20px] text-[#344054] bg-[#F9FAFB] rounded-[4px]">
        {data.sold} pieces sold
      </p>
    </div>
  );
}
