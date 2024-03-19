"use client";

import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FileUpload from "@/components/FileUpload";

const productCategorySchema = z.object({
  name: z.string().min(1, "Product category name is required"),
  description: z.string().min(1, "Product description is required"),
});

export type TProductCategorySchema = z.infer<typeof productCategorySchema>;

export default function AdminCreateProductCategories() {
  const searchParams = useSearchParams();
  const active = searchParams.get("active");
  const router = useRouter();

  function uploadCB(imageURL: string) {
    console.log(imageURL);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TProductCategorySchema>({
    resolver: zodResolver(productCategorySchema),
  });

  function onSubmit(data: TProductCategorySchema) {
    const payload = {
      ...data,
    };
    console.log(payload);
    // createLevel(payload);
  }

  return (
    <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
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
          {active}
        </Link>

        <div className="text-text-disabled">
          <SlashIcon />
        </div>

        <p className="small text-primary-100 !font-medium">
          Create product category
        </p>
      </div>

      <div className="flex flex-col gap-[3px]">
        <h3 className="!font-semibold text-text-loud leading-[40px]">
          Create product category
        </h3>
        <p className="text-text-normal leading-[24px]">
          Rorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="p-[24px] bg-background-disabled">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-[24px] items-start"
        >
          <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">
                    Product category name*
                  </p>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter category name"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.name && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.name.message}`}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <FileUpload
              cb={uploadCB}
              actionWord="Click here to upload featured image"
            />
          </div>

          <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">Description*</p>
                </label>
                <input
                  {...register("description")}
                  type="text"
                  placeholder="Enter product description"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.description && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.description.message}`}
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex gap-[12px] justify-start mt-[8px]">
            <button
              type="button"
              onClick={() =>
                router.push(`/admin/products?active=${active as string}`)
              }
              className="shadow bg-background-white px-[16px] py-[10px] text-text-muted text-[14px] font-inter font-semibold leading-[20px] rounded-[6px] hover:bg-secondary_red-100 hover:text-text-white"
            >
              Cancel
            </button>
            <button
              //   disabled={isPending}
              type="submit"
              className="disabled:bg-[#050210]/50 bg-[#050210] px-[16px] py-[10px] text-text-white text-[14px] font-inter font-semibold leading-[20px] rounded-[6px]"
            >
              {"Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
