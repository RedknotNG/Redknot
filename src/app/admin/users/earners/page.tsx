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
  AdminOrderTableRow,
  AdminUserLevelRow,
  AdminUserNameEmailRow,
  DateRow,
  ProductStatusRow,
  TableHeader,
  TableRow,
} from "@/components/TableBody";
import SearchIcon from "@/icons/SearchIcon";
import DropDown from "@/components/DropDown";
import EditIcon from "@/icons/EditIcon";
import ViewIcon from "@/icons/ViewIcon";
import { useQuery } from "@tanstack/react-query";
import AdminOrdersIcon from "@/icons/AdminLayout/AdminOrdersIcon";
import AdminUsersIcon from "@/icons/AdminLayout/AdminUsersIcon";
import Image, { StaticImageData } from "next/image";
import earnerLevel1 from "../../../../../public/earnerLevel1.png";
import earnerLevel2 from "../../../../../public/earnerLevel2.png";
import earnerLevel3 from "../../../../../public/earnerLevel3.png";
import adminEmptyUsersEarners from "../../../../../public/emptyState/adminEmptyUsersEarners.webp";
import StatusArrowDownIcon from "@/icons/StatusArrowDownIcon";
import CoinIcon from "@/icons/CoinIcon";
import CoinsIcon from "@/icons/CoinsIcon";

type AdminUsersEarnerTableDataSchema = {
  created_at: string;
  info: { name: string; email: string };
  earner_level: { badge: StaticImageData; level: string };
  commission: string;
  orders: number;
  status: string;
  slug: string;
};

const tableData: AdminUsersEarnerTableDataSchema[] = [
  {
    created_at: "15 Sep 2023",
    info: { name: "Mubarak Olabisi", email: "mubarakbisi@gmail.com" },
    earner_level: { badge: earnerLevel1, level: "Earner I" },
    commission: "₦500,705",
    orders: 12,
    status: "Active",
    slug: "1234ewq",
  },
  {
    created_at: "15 Sep 2023",
    info: { name: "Samuel Ogunleti", email: "samueloguns@gmail.com" },
    earner_level: { badge: earnerLevel2, level: "Earner II" },
    commission: "₦500,705",
    orders: 52,
    status: "Active",
    slug: "1234ewq",
  },
  {
    created_at: "15 Sep 2023",
    info: { name: "Abdulhakeem Olanrewaju", email: "hakeemwaju@outlook.com" },
    earner_level: { badge: earnerLevel3, level: "Earner III" },
    commission: "₦500,705",
    orders: 12,
    status: "Active",
    slug: "1234ewq",
  },
  {
    created_at: "15 Sep 2023",
    info: { name: "Gbadebo Soroye", email: "gbadeso1@yahoo.com" },
    earner_level: { badge: earnerLevel1, level: "Earner I" },
    commission: "₦500,705",
    orders: 12,
    status: "Inactive",
    slug: "1234ewq",
  },
  {
    created_at: "15 Sep 2023",
    info: { name: "Phillip Obasi", email: "phillipobasi@yahoo.com" },
    earner_level: { badge: earnerLevel1, level: "Earner I" },
    commission: "₦500,705",
    orders: 12,
    status: "Inactive",
    slug: "1234ewq",
  },
];

export default function AdminUsersEarnersPage() {
  const [data, setData] = useState(() => [...tableData]);
  const [searchValue, setSearchValue] = useState("");

  const columns = useMemo<ColumnDef<AdminUsersEarnerTableDataSchema>[]>(
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
        id: "info",
        accessorKey: "info",
        header: () => <TableHeader title="Full name & Email address" />,
        cell: (info: any) => {
          return <AdminUserNameEmailRow info={info.getValue()} />;
        },
      },
      {
        id: "earner_level",
        accessorKey: "earner_level",
        header: () => <TableHeader title="Earner level" />,
        cell: (info: any) => (
          <AdminUserLevelRow earner_level={info.getValue()} />
        ),
      },
      {
        id: "commission",
        accessorKey: "commission",
        header: () => <TableHeader title="Commission earned" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "orders",
        accessorKey: "orders",
        header: () => <TableHeader title="No of orders fulfilled" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "status",
        accessorKey: "status",
        header: () => (
          <TableHeader title="Status" icon={<StatusArrowDownIcon />} />
        ),
        cell: (info: any) => <ProductStatusRow title={info.getValue()} />,
      },

      {
        id: "slug",
        accessorKey: "slug",
        header: () => <TableHeader title="" />,
        cell: ({ row }) => {
          return <TableAction slug={row.original.slug} />;
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
            <AdminUsersIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 !font-medium">Earners</p>
        </div>

        {data.length > 0 && (
          <Link
            href={"/admin/orders/earner-orders/create-order"}
            className="bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
          >
            <AddIcon />
            <p className="small !font-semibold text-text-white">Add earner</p>
          </Link>
        )}
      </div>

      <h3 className="!font-semibold text-text-loud leading-[40px]">Earners</h3>

      {data.length < 1 ? (
        <div className="shadow w-full rounded-[12px] flex justify-center items-center py-[80px]">
          <div className="flex flex-col gap-[24px] justify-center items-center">
            <Image
              alt="Empty state"
              src={adminEmptyUsersEarners}
              width={91}
              height={91}
              className="p-[20px]"
            />

            <div className="w-[352px] flex flex-col justify-center items-center gap-[5px]">
              <p className="!font-medium text-text-loud text-center">
                Create an earner
              </p>
              <p className="small text-text-subdued text-center">
                Create an earner to have access to the admin dashboard
              </p>
            </div>

            <Link
              href={`/admin/users/earners/add-earner`}
              className="w-fit bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
            >
              <p className="small !font-semibold text-text-white">Add earner</p>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="w-fit order-card-container flex gap-[50px] justify-between items-center py-[21px] px-[16px]">
            <div className="flex flex-col gap-[6px]">
              <p className="x-small text-text-subdued leading-[17px]">
                Total no of earners
              </p>

              <p className="large !font-semibold leading-[24px] text-text-muted">
                45
              </p>
            </div>

            <div className="w-[40px] h-[40px] rounded-[6px] bg-[#E8E7FE] text-[#5F57FF] flex justify-center items-center">
              <CoinIcon />
            </div>
          </div>

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

            <table className="w-full">
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
        </>
      )}
    </div>
  );
}

function TableAction({ slug }: { slug: string }) {
  return (
    <div className="flex gap-[24px] justify-center">
      <Link href={`/admin/users/earners/${slug}`} className="text-text-normal">
        <ViewIcon />
      </Link>
      <button className="text-text-normal">
        <EditIcon />
      </button>
    </div>
  );
}
