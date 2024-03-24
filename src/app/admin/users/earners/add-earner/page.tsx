"use client";

import { useState } from "react";

import AdminEarnerLevelsIcon from "@/icons/AdminLayout/AdminEarnerLevelsIcon";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateLevel } from "@/api/api";
import { BoolDropdownSchema } from "@/lib/AdminTypes";
import BoolDropDown from "@/components/DefaultBoolDrop";
import FileUpload from "@/components/FileUpload";
import AdminUsersIcon from "@/icons/AdminLayout/AdminUsersIcon";

const adminUsersAddEarnerSchema = z
  .object({
    full_name: z.string().min(1, "Full name is required"),
    email: z.string().email().min(1, "Email is required"),
    phone: z.string().min(1, "Phone number is required"),
    bank_name: z.string().min(1, "Bank name is required"),
    bank_account_number: z.string().min(1, "Bank account number is required"),
    bank_account_name: z.string().min(1, "Bank account name is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password must be the same",
    path: ["confirm_password"],
  });

export type TAdminUsersAddEarnerSchema = z.infer<
  typeof adminUsersAddEarnerSchema
>;

export default function AdminUsersAddEarner() {
  const [status, setStatus] = useState(true);
  const router = useRouter();

  function dropDownCB(value: boolean) {
    setStatus(value);
  }

  const dropData: BoolDropdownSchema[] = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAdminUsersAddEarnerSchema>({
    resolver: zodResolver(adminUsersAddEarnerSchema),
  });

  function onSubmit(data: TAdminUsersAddEarnerSchema) {
    const payload = {
      ...data,
      status,
    };
    console.log(payload);
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

          <Link
            href={"/admin/users/earners"}
            className="small text-text-normal font-medium leading-[20px]"
          >
            Earners
          </Link>

          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 !font-medium">Add earner</p>
        </div>
      </div>

      <div className="flex flex-col gap-[4px]">
        <h3 className="!font-semibold text-text-loud leading-[40px]">
          Add earner
        </h3>
        <p className="text-text-normal">
          Create earner to have access to the admin dashboard
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[24px] items-start p-[24px] bg-background-disabled"
      >
        <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
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
        </div>

        <div className="w-full max-w-[1024px] grid grid-cols-3 gap-[24px]">
          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Bank name*</p>
              </label>
              <input
                {...register("bank_name")}
                type="text"
                placeholder="Enter bank name"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.bank_name && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.bank_name.message}`}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Bank account number*</p>
              </label>
              <input
                {...register("bank_account_number")}
                type="text"
                placeholder="Enter bank account number"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.bank_account_number && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.bank_account_number.message}`}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Bank account name*</p>
              </label>
              <input
                {...register("bank_account_name")}
                type="text"
                placeholder="Enter bank account name"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.bank_account_name && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.bank_account_name.message}`}
              </p>
            )}
          </div>
        </div>

        <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Password*</p>
              </label>
              <input
                {...register("password")}
                type="text"
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
                <p className="small text-text-muted">Confirm password*</p>
              </label>
              <input
                {...register("confirm_password")}
                type="text"
                placeholder="Confirm password"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.confirm_password && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.confirm_password.message}`}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted px-[14px]">Status*</p>
              </label>

              <BoolDropDown
                cb={dropDownCB}
                dropData={dropData}
                initialState={{ label: "Active", value: true }}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex gap-[10px] justify-start">
          <button
            type="button"
            onClick={() => router.push("/admin/earner-levels")}
            className="shadow bg-background-white px-[56px] py-[10px] text-text-muted rounded-[6px] hover:bg-secondary_red-100 hover:text-text-white"
          >
            Cancel
          </button>

          <button
            // disabled={isPending}
            type="submit"
            className="disabled:bg-[#050210]/50 bg-[#050210] px-[56px] py-[10px] text-text-white rounded-[6px]"
          >
            {/* {isPending ? "Saving" : "Save"} */}
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
