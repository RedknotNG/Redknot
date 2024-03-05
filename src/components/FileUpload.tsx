"use client";

import { useState, type ChangeEvent, type DragEvent, useRef } from "react";
import UploadIcon from "@/icons/UploadIcon";
import clsx from "clsx";

export default function FileUpload({
  cb,
  actionWord,
}: {
  cb: (imageUrl: string) => void;
  actionWord: string;
}) {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const uploadImageRef = useRef<HTMLInputElement | null>(null);

  function addImage() {
    uploadImageRef.current?.click();
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
    if (e.target.files) {
      console.log(e.target.files[0]);
    }
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
  return (
    <div>
      <div className="w-full max-w-[740px] flex flex-col gap-[10px]">
        <div
          className={clsx(
            "relative w-full flex flex-col gap-[15px] py-[24px] justify-center items-center rounded-[6px]  border-[1px] border-dashed border-dashed-[#D0D5DD]",
            { "bg-background-hover": dragActive },
            { "bg-background-white": !dragActive }
          )}
        >
          <div
            className="absolute inset-0 cursor-pointer z-10"
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
              <button type="button" onClick={addImage} className="z-20">
                <p className="small text-primary-100 font-semibold leading-[20px]">
                  {actionWord}
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

          <input
            ref={uploadImageRef}
            onChange={handleChange}
            accept="image/jpeg, image/jpg, image/png"
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}
