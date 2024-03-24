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
  EachProductTitleRow,
  ProductStatusRow,
  ProductTitleRow,
  TableHeader,
  TableRow,
} from "@/components/TableBody";
import SearchIcon from "@/icons/SearchIcon";
import DropDown from "@/components/DropDown";
import bs1 from "../../../../../public/bs1.png";
import { StaticImageData } from "next/image";
import EditIcon from "@/icons/EditIcon";
import ViewIcon from "@/icons/ViewIcon";
import { useQuery } from "@tanstack/react-query";
import { UseGetEarnerLevels } from "@/api/api";
import ImageIcon from "@/icons/ImageIcon";
import Link from "next/link";
import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import SlashIcon from "@/icons/SlashIcon";
import AddIcon from "@/icons/AddIcon";
import { useParams, useSearchParams } from "next/navigation";
import CancelIcon from "@/icons/CancelIcon";
import CategoryDropDown from "@/components/AdminProducts/CategoryDrop";
import { useModalContext } from "@/contexts/ModalContext";
import { useModalComponentContext } from "@/contexts/ModalComponentContext";

type EachProductTableDataSchema = {
  color: { color: string; quantity: number; code: string };
  size: string;
  quantity: number;
  status: string;
  id: string;
};

const tableData: EachProductTableDataSchema[] = [
  {
    id: "12ew",
    color: { color: "Black", quantity: 20, code: "#000000" },
    quantity: 20,
    size: "Small",
    status: "Active",
  },
  {
    id: "12w",
    color: { color: "Black", quantity: 20, code: "#000000" },
    quantity: 50,
    size: "Medium",
    status: "Active",
  },
  {
    id: "12e",
    color: { color: "Black", quantity: 20, code: "#000000" },
    quantity: 120,
    size: "Large",
    status: "Inactive",
  },
];

export default function AdminEachProducts() {
  const searchParams = useSearchParams();
  const active = searchParams.get("active");
  const params = useParams();
  const { id } = params;

  const [data, setData] = useState(() => [...tableData]);
  const [searchValue, setSearchValue] = useState("");

  // const { data: earnerLevels, isLoading } = useQuery({
  //   queryFn: () => UseGetEarnerLevels(),
  //   queryKey: ["getEarnerLevels"],
  // });

  const columns = useMemo<ColumnDef<EachProductTableDataSchema>[]>(
    () => [
      {
        id: "color",
        accessorKey: "color",
        header: () => <TableHeader title="Colour" />,
        cell: (info: any) => {
          return <EachProductTitleRow color={info.getValue()} />;
        },
      },
      {
        id: "size",
        accessorKey: "size",
        header: () => <TableHeader title="Size" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "quantity",
        accessorKey: "quantity",
        header: () => <TableHeader title="Available quantity" />,
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
    <div>
      <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-[12px] py-[10px]">
            <div className="text-text-normal">
              <AdminProductsIcon />
            </div>
            <div className="text-text-disabled">
              <SlashIcon />
            </div>

            <Link
              href={`/admin/products?active=${active as string}`}
              className="small text-text-normal font-medium leading-[20px]"
            >
              All products
            </Link>

            <div className="text-text-disabled">
              <SlashIcon />
            </div>

            <p className="small text-primary-100 !font-medium">
              Nini - Adire Agbada dress
            </p>
          </div>

          <Link
            href={`/admin/products/${id as string}/create-variation?active=${
              active as string
            }`}
            className="bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
          >
            <p className="small !font-semibold text-text-white">
              Create variation
            </p>
          </Link>
        </div>

        <h3 className="!font-semibold text-text-loud leading-[40px]">
          Nini - Adire Agbada dress
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

          <div className="w-full flex justify-between items-center px-[24px] py-[20px]">
            <p className="small !font-medium text-[#334155]">Page 1 of 10</p>

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

function TableAction({ id }: { id: string }) {
  const { setModalActive } = useModalContext();
  const { setModal } = useModalComponentContext();

  function handleAdd() {
    setModalActive((prev) => !prev);
    setModal(<AddQuantity id={id} />);
  }

  return (
    <div className="flex gap-[24px] justify-center">
      <button onClick={handleAdd} className="text-text-normal">
        <AddIcon />
      </button>
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

function AddQuantity({ id }: { id: string }) {
  const { setModalActive } = useModalContext();

  function categoryDropCB(value: string) {
    console.log(value);
  }

  function handleAdd() {
    setModalActive((prev) => !prev);
  }

  function handleCancel() {
    setModalActive((prev) => !prev);
  }
  return (
    <div className="focus-bg-full h-screen flex justify-center">
      <div className="h-fit w-[640px] bg-background-white p-[24px] flex flex-col gap-[16px] rounded-[10px]">
        <div className="w-full flex justify-between items-center">
          <div className="h-[48px] w-[48px] flex justify-center items-center rounded-[10px] bg-primary-50">
            <div className="h-[18px] w-[18px] rounded-full border border-white text-text-white flex justify-center items-center bg-primary-50">
              <AddIcon />
            </div>
          </div>

          <button
            onClick={handleCancel}
            className="flex justify-center items-center text-text-normal hover:text-secondary_red-100"
          >
            <CancelIcon />
          </button>
        </div>

        <div className="w-full flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[5px]">
            <h6 className="text-text-loud !font-semibold">Add quantity</h6>
            <p className="small text-text-normal">
              Nini - Adire Agbada dress (Black-small)
            </p>
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-[#36394A] px-[14px] !font-medium">
                  Quantity
                </p>
              </label>

              <CategoryDropDown cb={categoryDropCB} />
            </div>
          </div>
        </div>

        <div className="w-full flex gap-[12px] justify-end">
          <button
            type="button"
            onClick={handleCancel}
            className="shadow bg-background-white px-[20px] py-[12px] text-[16px] font-semibold leading-[24px] text-text-muted rounded-[6px] hover:bg-secondary_red-100 hover:text-text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            type="button"
            className="disabled:bg-[#050210]/50 bg-[#050210] px-[20px] py-[12px] text-[16px] font-semibold leading-[24px] text-text-white rounded-[6px]"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
