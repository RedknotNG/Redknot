"use client";

import AddIcon from "@/icons/AddIcon";
import AdminEarnerLevelsIcon from "@/icons/AdminLayout/AdminEarnerLevelsIcon";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
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
import { DateRow, TableHeader, TableRow } from "@/components/TableBody";
import SearchIcon from "@/icons/SearchIcon";
import DropDown from "@/components/DropDown";
import EarnerLevelOne from "../../../../public/earnerLevel1.png";
import EarnerLevelTwo from "../../../../public/earnerLevel2.png";
import EarnerLevelThree from "../../../../public/earnerLevel3.png";
import Image, { StaticImageData } from "next/image";
import EditIcon from "@/icons/EditIcon";
import ViewIcon from "@/icons/ViewIcon";
import { useQuery } from "@tanstack/react-query";
import { UseGetEarnerLevels } from "@/api/api";

// type EarnerLevelTableDataSchema = {
//   dateCreated: string;
//   levelName: string;
//   badge: StaticImageData;
//   totalEarners: number;
//   target: string;
//   commission: string;
//   salary: string;
//   id: string;
// };

type EarnerLevelTableDataSchema = {
  bonus: string;
  commission: string;
  created_at: string;
  id: number;
  image_url: null | string;
  is_active: number;
  is_default: number;
  name: string;
  salary: string;
  sale_target: string;
  updated_at: string;
};

// const tableData: EarnerLevelTableDataSchema[] = [
//   {
//     id: "12ew",
//     dateCreated: "15 Sep 2023",
//     levelName: "Earner",
//     badge: EarnerLevelOne,
//     totalEarners: 30,
//     target: "10 Products",
//     commission: "₦15,000",
//     salary: "₦10,000",
//   },
//   {
//     id: "12ew",
//     dateCreated: "15 Sep 2023",
//     levelName: "Earner II",
//     badge: EarnerLevelTwo,
//     totalEarners: 30,
//     target: "10 Products",
//     commission: "₦15,000",
//     salary: "₦15,000",
//   },
//   {
//     id: "12ew",
//     dateCreated: "15 Sep 2023",
//     levelName: "Earner III",
//     badge: EarnerLevelThree,
//     totalEarners: 30,
//     target: "10 Products",
//     commission: "₦15,000",
//     salary: "₦25,000",
//   },
// ];

const tableData: EarnerLevelTableDataSchema[] = [
  {
    bonus: "",
    commission: "",
    created_at: "",
    id: 1,
    image_url: null,
    is_active: 1,
    is_default: 0,
    name: "",
    salary: "",
    sale_target: "",
    updated_at: "",
  },
];

export default function AdminEarnerLevels() {
  const [data, setData] = useState(() => [...tableData]);
  const [searchValue, setSearchValue] = useState("");

  const { data: earnerLevels, isLoading } = useQuery({
    queryFn: () => UseGetEarnerLevels(),
    queryKey: ["getEarnerLevels"],
  });

  const columns = useMemo<ColumnDef<EarnerLevelTableDataSchema>[]>(
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
        id: "name",
        accessorKey: "name",
        header: () => <TableHeader title="Level Name" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "image_url",
        accessorKey: "image_url",
        header: () => <TableHeader title="Badge" />,
        cell: (info: any) => <ImageRow image={info.getValue()} />,
      },
      // {
      //   id: "totalEarners",
      //   accessorKey: "totalEarners",
      //   header: () => <TableHeader title="No of Earners" />,
      //   cell: (info: any) => <TableRow title={info.getValue()} />,
      // },
      {
        id: "sale_target",
        accessorKey: "sale_target",
        header: () => <TableHeader title="Monthly Sales Target" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "commission",
        accessorKey: "commission",
        header: () => <TableHeader title="Commission" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "salary",
        accessorKey: "salary",
        header: () => <TableHeader title="Base Salary" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
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

  useEffect(() => {
    setData(earnerLevels?.data);
  }, [earnerLevels]);

  return (
    <div className="adminWidth flex flex-col gap-[50px] p-[32px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[12px]">
          <div className="text-text-normal">
            <AdminEarnerLevelsIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 font-medium leading-[20px]">
            Earner levels
          </p>
        </div>

        <Link
          href={"/admin/earner-levels/create-level"}
          className="bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
        >
          <AddIcon />
          <p className="small font-semibold leading-[20px] text-text-white">
            Create earner level
          </p>
        </Link>
      </div>

      <h3 className="font-semibold text-text-loud leading-[40px]">
        Earner levels
      </h3>

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
    </div>
  );
}

function ImageRow({ image }: { image: StaticImageData }) {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        alt="Level BAdge"
        src={image ? image : EarnerLevelOne}
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
}

function TableAction({ id }: { id: string }) {
  return (
    <div className="flex gap-[24px] justify-center">
      <button className="text-text-normal">
        <AddIcon />
      </button>
      <button className="text-text-normal">
        <EditIcon />
      </button>
      <button className="text-text-normal">
        <ViewIcon />
      </button>
    </div>
  );
}
