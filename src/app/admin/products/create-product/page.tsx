"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCreateLevel } from "@/api/api";
import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import BoolDropDown from "@/components/DefaultBoolDrop";
import { BoolDropdownSchema, ProductVariationSchema } from "@/lib/AdminTypes";
import CategoryDropDown from "@/components/AdminProducts/CategoryDrop";
import AddIcon from "@/icons/AddIcon";
import StringDropDown from "@/components/StringDropDown";
import FileUpload from "@/components/FileUpload";
import Image from "next/image";
import bs1 from "../../../../../public/bs1.png";
import Dot from "@/icons/Dot";

const productSchema = z.object({
  name: z.string().min(1, "Level Name is required"),
  price: z.number({
    required_error: "Base Salary is required",
    invalid_type_error: "Base Salary must be a number",
  }),
  commission: z.number({
    required_error: "Commission is required",
    invalid_type_error: "Commission must be a number",
  }),
});

export type TProductSchema = z.infer<typeof productSchema>;

export default function AdminCreateProduct() {
  const [level, setLevel] = useState(true);
  const [addPageError, setAddVariationError] = useState(false);
  const [variationData, setVariationData] = useState<ProductVariationSchema[]>(
    []
  );
  const [variationActive, setVariationActive] = useState(false);

  const router = useRouter();
  const countRef = useRef(0);

  //   const { mutate: createLevel, isPending } = useCreateLevel(createProductCB);

  //   function createProductCB() {
  //     router.push("/admin/earner-levels");
  //   }

  function uploadCB(imageURL: string) {
    console.log(imageURL);
  }

  function categoryDropCB(value: string) {
    console.log(value);
  }

  function dropDownCB(value: boolean) {
    setLevel(value);
  }

  function handleAddNewVariation() {
    if (variationActive) {
      setAddVariationError(true);
    } else {
      setVariationActive(true);
      setAddVariationError(false);
      setVariationData((prev) => [
        ...prev,
        {
          id: `${countRef.current++}`,
          color: "Red",
          size: "XXXL",
          quantity: 0,
          variationStatus: true,
        },
      ]);
    }
  }

  function handleSaveNewVariation(newData: ProductVariationSchema) {
    console.log(newData);
    setVariationActive(false);
    setVariationData((prev) =>
      prev.map((data) => {
        if (data.id === newData.id) {
          return newData;
        }
        return data;
      })
    );
  }

  function handleVariationCancel(id: string) {
    setVariationActive(false);
    setVariationData((prev) => prev.filter((data) => data.id !== id));
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
  } = useForm<TProductSchema>({
    resolver: zodResolver(productSchema),
  });

  function onSubmit(data: TProductSchema) {
    const payload = {
      ...data,
      is_default: level,
    };
    console.log(payload);
    // createLevel(payload);
  }
  return (
    <div className="adminWidth flex flex-col gap-[50px] p-[32px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[12px]">
          <div className="text-text-normal">
            <AdminProductsIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <Link
            href={"/admin/products"}
            className="small text-text-normal font-medium leading-[20px]"
          >
            All products
          </Link>

          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 font-medium leading-[20px]">
            Create product
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[3px]">
        <h3 className="font-semibold text-text-loud leading-[40px]">
          Create product
        </h3>
        <p className="text-text-normal leading-[24px]">
          Add a product so users can have access to stock
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[16px] items-start"
      >
        <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Product name*</p>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter product name"
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
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Product price (₦)*</p>
              </label>
              <input
                {...register("price", {
                  valueAsNumber: true,
                })}
                type="text"
                placeholder="Enter product price"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>

            {errors.price && (
              <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                {`${errors.price.message}`}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted px-[14px]">
                  Product Category*
                </p>
              </label>

              <CategoryDropDown cb={categoryDropCB} />
            </div>
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
        </div>

        <div className="w-full">
          <FileUpload cb={uploadCB} />
        </div>

        <div className="w-full max-w-[740px] p-[16px] flex flex-col gap-[12px] bg-background-disabled">
          <button
            onClick={handleAddNewVariation}
            type="button"
            className="w-full flex flex-col justify-center items-center p-[18px] text-text-muted bg-background-white"
          >
            <AddIcon />
            <p className="small text-text-muted font-semibold leading-[20px]">
              Add variation
            </p>
          </button>

          <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px]">
            {variationData.length > 0 &&
              variationData.map((data) => (
                <AddVariation
                  initialData={data}
                  key={data.id}
                  handleSaveNewVariation={handleSaveNewVariation}
                  handleCancel={handleVariationCancel}
                  setVariationActive={setVariationActive}
                />
              ))}
          </div>
        </div>

        <div className="w-full flex gap-[10px] justify-start">
          <button
            type="button"
            onClick={() => router.push("/admin/earner-levels")}
            className="shadow bg-background-white px-[20px] py-[10px] text-text-muted rounded-[6px] hover:bg-secondary_red-100 hover:text-text-white"
          >
            Cancel
          </button>
          <button
            // disabled={isPending}
            type="submit"
            className="disabled:bg-[#050210]/50 bg-[#050210] px-[20px] py-[10px] text-text-white rounded-[6px]"
          >
            {/* {isPending ? "Submitting" : "Submit"} */}
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

function AddVariation({
  initialData,
  handleSaveNewVariation,
  handleCancel,
  setVariationActive,
}: {
  initialData: ProductVariationSchema;
  handleSaveNewVariation: (data: ProductVariationSchema) => void;
  handleCancel: (id: string) => void;
  setVariationActive: Dispatch<SetStateAction<boolean>>;
}) {
  const [color, setColor] = useState(initialData.color);
  const [size, setSize] = useState(initialData.size);
  const [quantity, setQuantity] = useState<number>(initialData.quantity);
  const [variationStatus, setVariationStatus] = useState(
    initialData.variationStatus
  );

  const [saved, setSaved] = useState(false);

  function colorDropDownCB(value: string) {
    setColor(value);
  }
  function sizeDropDownCB(value: string) {
    setSize(value);
  }
  function dropDownCB(value: boolean) {
    setVariationStatus(value);
  }

  function uploadCB(imageURL: string) {
    console.log(imageURL);
  }

  function handleSave() {
    const payload = {
      id: initialData.id,
      color,
      size,
      quantity,
      variationStatus,
    };
    setSaved(true);
    handleSaveNewVariation(payload);
  }

  function handleEdit() {
    setSaved(false);
    setVariationActive(true);
  }

  const colorDropData: string[] = ["Red", "Violet", "Pink", "Black", "White"];
  const sizeDropData: string[] = ["M", "L", "XL", "XXL", "XXXL"];
  const dropData: BoolDropdownSchema[] = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];

  return (
    <div className="w-full bg-background-white p-[16px] rounded-[6px]">
      {!saved ? (
        <div className="w-full max-w-[500px] flex flex-col gap-[24px]">
          <div className="w-full grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted px-[14px]">
                    Select colour*
                  </p>
                </label>

                <StringDropDown
                  cb={colorDropDownCB}
                  dropData={colorDropData}
                  initialState={color}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted px-[14px]">
                    Select size*
                  </p>
                </label>

                <StringDropDown
                  cb={sizeDropDownCB}
                  dropData={sizeDropData}
                  initialState={size}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[358px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted">Enter quantity*</p>
              </label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.valueAsNumber)}
                type="number"
                placeholder="Enter product price"
                className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
              <label htmlFor="">
                <p className="small text-text-muted px-[14px]">Status*</p>
              </label>

              <BoolDropDown
                cb={dropDownCB}
                dropData={dropData}
                initialState={
                  variationStatus
                    ? { label: "Active", value: true }
                    : { label: "Inactive", value: false }
                }
              />
            </div>
          </div>

          <div className="w-full">
            <FileUpload cb={uploadCB} />
          </div>

          <div className="w-full flex gap-[10px] justify-start">
            <button
              type="button"
              onClick={() => handleCancel(initialData.id)}
              className="shadow bg-background-white px-[20px] py-[5px] text-text-muted rounded-[6px] hover:bg-secondary_red-100 hover:text-text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              type="button"
              className=" bg-[#050210] px-[20px] py-[5px] text-text-white rounded-[6px]"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex gap-[16px] items-center">
            <Image
              alt="Variation Image"
              src={bs1}
              width={40}
              height={40}
              className="rounded-full"
            />

            <p className="small leading-[20px] text-text-loud font-normal text-left px-[16px]">
              {color}
            </p>

            <p className="small leading-[20px] text-[#667085] font-normal text-left px-[16px]">
              {size}
            </p>

            <p className="small leading-[20px] text-[#667085] font-normal text-left px-[16px]">
              {quantity}
            </p>

            <div className="w-full flex justify-center items-center px-[16px]">
              {variationStatus ? (
                <div className="w-fit green-shadow bg-[#ECFDF3] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#027A48] rounded-[4px]">
                  <Dot />
                  <p
                    className={`x-small text-[#027A48] font-medium leading-[18px]`}
                  >
                    Active
                  </p>
                </div>
              ) : (
                <div className="w-fit red-shadow bg-[#FEF3F2] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#B42318] rounded-[4px]">
                  <p
                    className={`x-small text-[#B42318] font-medium leading-[18px]`}
                  >
                    Inactive
                  </p>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleEdit}
            className="text-primary-100 font-semibold text-[14px] font-inter leading-[20px]"
          >
            Edit Variation
          </button>
        </div>
      )}
    </div>
  );
}
