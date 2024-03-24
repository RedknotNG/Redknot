"use client";

import AddIcon from "@/icons/AddIcon";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useMemo, useState } from "react";
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
import AdminUsersIcon from "@/icons/AdminLayout/AdminUsersIcon";
import Image, { StaticImageData } from "next/image";
import earnerLevel1 from "../../../../../public/earnerLevel1.png";
import earnerLevel2 from "../../../../../public/earnerLevel2.png";
import earnerLevel3 from "../../../../../public/earnerLevel3.png";
import adminEmptyUsersEarners from "../../../../../public/emptyState/adminEmptyUsersEarners.webp";
import StatusArrowDownIcon from "@/icons/StatusArrowDownIcon";
import CoinIcon from "@/icons/CoinIcon";
import { useModalContext } from "@/contexts/ModalContext";
import { useModalComponentContext } from "@/contexts/ModalComponentContext";
import InfoIcon from "@/icons/InfoIcon";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import NotificationModal from "@/components/NotificationModal";
import { useRouter } from "next/navigation";
import CancelIcon from "@/icons/CancelIcon";
import SupportInfoIcon from "@/icons/SupportInfoIcon";

type AdminUsersSupportTableDataSchema = {
  created_at: string;
  id: string;
  name: string;
  email: string;
  status: string;
  created_by: string;
};

const tableData: AdminUsersSupportTableDataSchema[] = [
  {
    created_at: "15 Sep 2023",
    id: "01",
    name: "Mubarak Olabisi",
    email: "mubarakolabisi@gmail.com",
    status: "Active",
    created_by: "Mubarak Olatunde",
  },

  {
    created_at: "15 Sep 2023",
    id: "02",
    name: "Samuel Ogunleti",
    email: "samuelogunleti@gmail.com",
    status: "Active",
    created_by: "Mubarak Olatunde",
  },

  {
    created_at: "15 Sep 2023",
    id: "03",
    name: "Abdulhakeem Olanrewaju",
    email: "abdulhakeemola@gmail.com",
    status: "Active",
    created_by: "Mubarak Olatunde",
  },

  {
    created_at: "15 Sep 2023",
    id: "04",
    name: "Gbadebo Soroye",
    email: "gbadesoroye@gmail.com",
    status: "Inactive",
    created_by: "Mubarak Olatunde",
  },

  {
    created_at: "15 Sep 2023",
    id: "05",
    name: "Phillip Obasi",
    email: "obasiphils@gmail.com",
    status: "Inactive",
    created_by: "Mubarak Olatunde",
  },
];

export default function AdminUsersSupportPage() {
  const [data, setData] = useState(() => [...tableData]);
  const [searchValue, setSearchValue] = useState("");

  const { setModalActive } = useModalContext();
  const { setModal } = useModalComponentContext();

  const columns = useMemo<ColumnDef<AdminUsersSupportTableDataSchema>[]>(
    () => [
      {
        id: "created_at",
        accessorKey: "created_at",
        header: () => <TableHeader title="Date Created" />,
        cell: (info: any) => {
          return <DateRow date={info.getValue()} darkColor={true} />;
        },
      },
      {
        id: "id",
        accessorKey: "id",
        header: () => <TableHeader title="ID" />,
        cell: (info: any) => {
          return <TableRow title={info.getValue()} />;
        },
      },
      {
        id: "name",
        accessorKey: "name",
        header: () => <TableHeader title="Name" />,
        cell: (info: any) => {
          return (
            <TableRow title={info.getValue()} darkColor={true} bold={true} />
          );
        },
      },
      {
        id: "email",
        accessorKey: "email",
        header: () => <TableHeader title="Email address" />,
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
        id: "created_by",
        accessorKey: "created_by",
        header: () => <TableHeader title="Created by" />,
        cell: (info: any) => <TableRow title={info.getValue()} />,
      },
      {
        id: "id",
        accessorKey: "id",
        header: () => <TableHeader title="" />,
        cell: ({ row }) => {
          return <TableAction id={row.original.id} />;
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

  function handleAddSupport() {
    setModalActive((prev) => !prev);
    setModal(<AddSupport id="qw21" />);
  }

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

          <p className="small text-primary-100 !font-medium">Support</p>
        </div>

        {data.length > 0 && (
          <button
            onClick={handleAddSupport}
            className="bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
          >
            <AddIcon />
            <p className="small !font-semibold text-text-white">Add support</p>
          </button>
        )}
      </div>

      <h3 className="!font-semibold text-text-loud leading-[40px]">
        Support users
      </h3>

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
                Create a support user
              </p>
              <p className="small text-text-subdued text-center">
                Create a support user to have access to the admin dashboard
              </p>
            </div>

            <button
              onClick={handleAddSupport}
              className="w-fit bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
            >
              <p className="small !font-semibold text-text-white">
                Add support
              </p>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="w-fit order-card-container flex gap-[50px] justify-between items-center py-[21px] px-[16px]">
            <div className="flex flex-col gap-[6px]">
              <p className="x-small text-text-subdued leading-[17px]">
                Total no of support
              </p>

              <p className="large !font-semibold leading-[24px] text-text-muted">
                5o
              </p>
            </div>

            <div className="w-[40px] h-[40px] rounded-[6px] bg-[#F5FDDC] flex justify-center items-center">
              <SupportInfoIcon />
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

function TableAction({ id }: { id: string }) {
  return (
    <div className="flex gap-[24px] justify-center">
      <button className="text-text-normal">
        <EditIcon />
      </button>
    </div>
  );
}

const adminUsersAddSupportSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email().min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  password: z.string().min(1, "Password is required"),
  role: z.string().min(1, "Designated role is required"),
});

type TAdminUsersAddSupportSchema = z.infer<typeof adminUsersAddSupportSchema>;

function AddSupport({ id }: { id: string }) {
  const router = useRouter();
  const { setModalActive } = useModalContext();
  const { setModal } = useModalComponentContext();

  function notifySuccess() {
    setModal(
      <NotificationModal
        type="success"
        msg="Support user successfully created"
        msgInfo="They can now have access to the admin dashboard"
      />
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAdminUsersAddSupportSchema>({
    resolver: zodResolver(adminUsersAddSupportSchema),
  });

  function onSubmit(data: TAdminUsersAddSupportSchema) {
    console.log(data);
    notifySuccess();
  }

  function handleCancel() {
    setModalActive((prev) => !prev);
  }
  return (
    <div className="focus-bg-full h-screen flex justify-center">
      <div className="h-fit w-[640px] bg-background-white p-[24px] flex flex-col gap-[16px] rounded-[10px]">
        <div className="w-full flex justify-between items-start">
          <div className="h-[48px] w-[48px] flex justify-center items-center rounded-[10px] bg-primary-50">
            <InfoIcon />
          </div>

          <button
            onClick={handleCancel}
            className="flex justify-center items-center text-text-normal hover:text-secondary_red-100"
          >
            <CancelIcon />
          </button>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h6 className="text-text-loud !font-semibold">Add support user</h6>
          <p className="small text-text-normal">
            Create support user to have access to the admin dashboard
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-[16px]"
        >
          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Full name*</p>
              </label>
              <input
                {...register("full_name")}
                type="text"
                placeholder="Enter full name"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.full_name && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.full_name.message}`}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Email address*</p>
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter email"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.email && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.email.message}`}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Phone number*</p>
              </label>
              <input
                {...register("phone")}
                type="text"
                placeholder="Enter phone number"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.phone && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.phone.message}`}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Password*</p>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter password"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.password && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.password.message}`}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Role*</p>
              </label>
              <input
                {...register("role")}
                type="text"
                placeholder="Enter designated role"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.role && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.role.message}`}
              </p>
            )}
          </div>

          <div className="w-full grid gap-[12px] grid-cols-2">
            <button
              type="button"
              onClick={handleCancel}
              className="shadow bg-background-white px-[20px] py-[12px] text-[16px] font-semibold leading-[24px] text-text-muted rounded-[6px] hover:bg-secondary_red-100 hover:text-text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="disabled:bg-[#050210]/50 bg-[#050210] px-[20px] py-[12px] text-[16px] font-semibold leading-[24px] text-text-white rounded-[6px]"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
