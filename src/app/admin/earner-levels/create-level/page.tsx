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

const earnerLevelSchema = z.object({
  name: z.string().min(1, "Level Name is required"),
  salary: z.number({
    required_error: "Base Salary is required",
    invalid_type_error: "Base Salary must be a number",
  }),
  bonus: z.number({
    required_error: "Quarterly Bonus is required",
    invalid_type_error: "Quarterly Bonus must be a number",
  }),
  commission: z.number({
    required_error: "Commission is required",
    invalid_type_error: "Commission must be a number",
  }),
  sale_target: z.number({
    required_error: "Monthly Sales Target is required",
    invalid_type_error: "Monthly Sales Target must be a number",
  }),
});

export type TEarnerLevelSchema = z.infer<typeof earnerLevelSchema>;

export default function AdminCreateLevel() {
  const [level, setLevel] = useState(true);
  const router = useRouter();

  const { mutate: createLevel, isPending } = useCreateLevel(createLevelCB);

  function createLevelCB() {
    router.push("/admin/earner-levels");
  }

  function uploadCB(imageURL: string) {
    console.log(imageURL);
  }

  function dropDownCB(value: boolean) {
    setLevel(value);
  }

  const dropData: BoolDropdownSchema[] = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEarnerLevelSchema>({
    resolver: zodResolver(earnerLevelSchema),
  });

  function onSubmit(data: TEarnerLevelSchema) {
    const payload = {
      ...data,
      is_default: level,
    };
    console.log(payload);
    createLevel(payload);
  }
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

          <Link
            href={"/admin/earner-levels"}
            className="small text-text-normal font-medium leading-[20px]"
          >
            Earner levels
          </Link>

          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 font-medium leading-[20px]">
            Create earner levels
          </p>
        </div>
      </div>

      <h3 className="font-semibold text-text-loud leading-[40px]">
        Create earner levels
      </h3>

      <div className="p-[24px] bg-background-disabled">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-[16px] items-start"
        >
          <h5 className="font-medium text-text-loud leading-[28px]">
            Level information
          </h5>

          <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">Level name*</p>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter name of level"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.name && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.name.message}`}
                </p>
              )}
            </div>

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted px-[14px]">
                    Default level*
                  </p>
                </label>

                <BoolDropDown
                  cb={dropDownCB}
                  dropData={dropData}
                  initialState={{ label: "Yes", value: true }}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">Base salary (₦)*</p>
                </label>
                <input
                  {...register("salary", {
                    valueAsNumber: true,
                  })}
                  type="text"
                  placeholder="Enter base salary in Naira"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.salary && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.salary.message}`}
                </p>
              )}
            </div>

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">Quarterly bonus (₦)*</p>
                </label>
                <input
                  {...register("bonus", {
                    valueAsNumber: true,
                  })}
                  type="text"
                  placeholder="Enter quarterly bonus in Naira"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.bonus && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.bonus.message}`}
                </p>
              )}
            </div>

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">Commission (%)*</p>
                </label>
                <input
                  {...register("commission", {
                    valueAsNumber: true,
                  })}
                  type="text"
                  placeholder="Enter commission in percentage"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.commission && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.commission.message}`}
                </p>
              )}
            </div>

            <div className="w-full flex flex-col gap-[10px] ">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">Monthly sales target*</p>
                </label>
                <input
                  {...register("sale_target", {
                    valueAsNumber: true,
                  })}
                  type="text"
                  placeholder="Enter no of products per month"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.sale_target && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.sale_target.message}`}
                </p>
              )}
            </div>
          </div>

          <div className="w-full max-w-[740px] flex flex-col gap-[10px]">
            <p className="small leading-[20px] text-text-loud">
              Upload visual cue or badge to represent level
            </p>

            <div className="w-full">
              <FileUpload
                cb={uploadCB}
                actionWord="Click here to upload image"
              />
            </div>
          </div>

          <div className="h-[0.5px] w-full bg-background-pressed"></div>

          <div className="w-full flex gap-[10px] justify-start">
            <button
              disabled={isPending}
              type="submit"
              className="disabled:bg-[#050210]/50 bg-[#050210] px-[56px] py-[10px] text-text-white rounded-[6px]"
            >
              {isPending ? "Submitting" : "Submit"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/earner-levels")}
              className="shadow bg-background-white px-[56px] py-[10px] text-text-muted rounded-[6px] hover:bg-secondary_red-100 hover:text-text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
