import { BoolDropdownSchema, ProductVariationSchema } from "@/lib/AdminTypes";
import { useState } from "react";
import StringDropDown from "../StringDropDown";
import BoolDropDown from "../DefaultBoolDrop";
import FileUpload from "../FileUpload";

export default function AddVariation({
  handleSaveNewVariation,
  handleCancel,
  id,
}: {
  handleSaveNewVariation: (data: ProductVariationSchema) => void;
  handleCancel: (id: string) => void;
  id: string;
}) {
  const [color, setColor] = useState("Red");
  const [size, setSize] = useState("XXL");
  const [quantity, setQuantity] = useState<number>(0);
  const [variationStatus, setVariationStatus] = useState(true);

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
      id: "",
      color,
      size,
      quantity,
      variationStatus,
    };
    handleSaveNewVariation(payload);
  }

  const colorDropData: string[] = ["Red", "Violet", "Pink", "Black", "White"];
  const sizeDropData: string[] = ["M", "L", "XL", "XXL", "XXXL"];
  const dropData: BoolDropdownSchema[] = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];

  return (
    <div className="w-full p-[16px] rounded-[6px]">
      <div className="w-full max-w-[900px] flex flex-col gap-[24px]">
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
                <p className="small text-text-muted px-[14px]">Select size*</p>
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
            onClick={() => handleCancel(id)}
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
    </div>
  );
}
