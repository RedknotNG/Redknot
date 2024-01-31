"use client";

import {
  forwardRef,
  useReducer,
  useState,
  type ChangeEvent,
  type DragEvent,
  useRef,
} from "react";

import AdminEarnerLevelsIcon from "@/icons/AdminLayout/AdminEarnerLevelsIcon";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LevelDropDown from "@/components/DefaultLevelDrop";
import UploadIcon from "@/icons/UploadIcon";
import clsx from "clsx";

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
  target: z.number({
    required_error: "Monthly Sales Target is required",
    invalid_type_error: "Monthly Sales Target must be a number",
  }),
});

export type TEarnerLevelSchema = z.infer<typeof earnerLevelSchema>;

export default function AdminCreateLevel() {
  const [level, setLevel] = useState("Yes");
  const router = useRouter();
  const [dragActive, setDragActive] = useState<boolean>(false);

  const uploadImageRef = useRef(null);

  function addImage() {
    console.log("clicked");
    uploadImageRef.current;
  }

  function dropDownCB(value: string) {
    setLevel(value);
  }

  // handle drag events
  const handleDrag = (e: DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is selected with click
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // try {
    //   if (e.target.files && e.target.files[0]) {
    //     // at least one file has been selected

    //     // validate file type
    //     const valid = validateFileType(e.target.files[0]);
    //     if (!valid) {
    //       toast({
    //         title: "Invalid file type",
    //         description: "Please upload a valid file type.",
    //       });
    //       return;
    //     }

    //     const { getUrl, error } = await s3Upload(e.target.files[0]);
    //     if (!getUrl || error) throw new Error("Error uploading file");

    //     const { name, size } = e.target.files[0];

    //     addFilesToState([{ name, getUrl, size }]);
    //   }
    // } catch (error) {
    //   // already handled
    // }
  };

  // triggers when file is dropped
  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(e.dataTransfer.files[0]);

    // validate file type
    // if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    //   const files = Array.from(e.dataTransfer.files);
    //   const validFiles = files.filter((file) => validateFileType(file));

    //   if (files.length !== validFiles.length) {
    //     toast({
    //       title: "Invalid file type",
    //       description: "Only image files are allowed.",
    //     });
    //   }

    //   try {
    //     const filesWithUrl = await Promise.all(
    //       validFiles.map(async (file) => {
    //         const { name, size } = file;
    //         const { getUrl, error } = await s3Upload(file);

    //         if (!getUrl || error) return { name, size, getUrl: "", error };
    //         return { name, size, getUrl };
    //       })
    //     );

    setDragActive(false);

    //     // at least one file has been selected
    //     addFilesToState(filesWithUrl);

    //     e.dataTransfer.clearData();
    //   } catch (error) {
    //     // already handled
    //   }
    // }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEarnerLevelSchema>({
    resolver: zodResolver(earnerLevelSchema),
  });

  function onSubmit(data: TEarnerLevelSchema) {
    console.log(data);
    // router.push("/admin/dashboard");
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
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">Default level*</p>
                </label>

                <LevelDropDown cb={dropDownCB} />
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
                  {...register("target", {
                    valueAsNumber: true,
                  })}
                  type="text"
                  placeholder="Enter no of products per month"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.target && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.target.message}`}
                </p>
              )}
            </div>
          </div>

          <div className="w-full max-w-[740px] flex flex-col gap-[10px]">
            <p className="small leading-[20px] text-text-loud">
              Upload visual cue or badge to represent level
            </p>

            <div
              className={clsx(
                "relative w-full flex flex-col gap-[15px] py-[24px] justify-center items-center rounded-[6px]  border-[1px] border-dashed border-dashed-[#D0D5DD]",
                { "bg-background-hover": dragActive },
                { "bg-background-white": !dragActive }
              )}
            >
              <div
                className="absolute inset-0 cursor-pointer z-30"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              />

              <div className="h-[50px] w-[50px] rounded-full bg-[#F9FAFB] flex justify-center items-center text-text-normal">
                <UploadIcon />
              </div>

              <div className="flex flex-col gap-[5px]">
                <div className="flex gap-[5px]">
                  <button type="button" onClick={addImage} className="z-30">
                    <p className="small text-primary-100 font-semibold leading-[20px]">
                      Click here to upload image
                    </p>
                  </button>
                  <p className="small text-text-normal leading-[20px]">
                    or drag and drop
                  </p>
                </div>

                <p className="small text-text-normal leading-[20px]">
                  SVG, PNG, JPG or GIF (max.{" "}
                  <span className="line-through">800x400px</span>)
                </p>
              </div>
            </div>
          </div>
          <input
            ref={uploadImageRef}
            onChange={handleChange}
            accept="image/jpeg, image/jpg, image/png"
            id="dropzone-file"
            type="file"
            className="hidden"
          />

          <div className="h-[0.5px] w-full bg-background-pressed"></div>

          <div className="w-full flex gap-[10px] justify-start">
            <button
              type="submit"
              className="bg-[#050210] px-[56px] py-[10px] text-text-white rounded-[6px]"
            >
              Submit
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
