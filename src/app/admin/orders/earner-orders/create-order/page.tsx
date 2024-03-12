"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import BoolDropDown from "@/components/DefaultBoolDrop";
import { BoolDropdownSchema, ProductVariationSchema } from "@/lib/AdminTypes";
import CategoryDropDown from "@/components/AdminProducts/CategoryDrop";
import AddIcon from "@/icons/AddIcon";
import StringDropDown from "@/components/StringDropDown";
import FileUpload from "@/components/FileUpload";
import Image from "next/image";
import bs1 from "../../../../../../public/bs1.png";
import Dot from "@/icons/Dot";
import AdminOrdersIcon from "@/icons/AdminLayout/AdminOrdersIcon";
import { useForm } from "react-hook-form";

export default function AdminCreateEarnerOrder() {
  const [level, setLevel] = useState(true);
  const [addVariationError, setAddVariationError] = useState(false);
  const [variationData, setVariationData] = useState<ProductVariationSchema[]>(
    []
  );
  const [variationActive, setVariationActive] = useState(false);
  const [buyerType, setBuyerType] = useState("Earner");
  const [selectUser, setSelectUser] = useState("Tunde Fesojaiye");
  const [deliveryMode, setDeliveryMode] = useState("Pickup");
  const [paymentInfo, setPaymentInfo] = useState("Paid");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");

  const router = useRouter();
  const countRef = useRef(0);

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

  function buyerTypeDropDownCB(value: string) {
    setBuyerType(value);
  }

  function selectUserDropDownCB(value: string) {
    setSelectUser(value);
  }

  function deliveryModeDropDownCB(value: string) {
    setDeliveryMode(value);
  }

  function paymentInfoDropDownCB(value: string) {
    setDeliveryMode(value);
  }

  function onSubmit() {
    const payload = {
      buyerType,
    };
    console.log(payload);
    // createLevel(payload);
  }

  const buyerTypeDropData: string[] = ["Customer", "Earner"];

  const selectUserDropData: string[] = [
    "Tunde Fesojaiye",
    "Mubarak Olabisi",
    "Samuel Ogunleti",
    "Abdulhakeem Olanrewaju",
    "Gbadebo Soroye",
    "Phillip Obasi",
  ];

  const deliveryModeDropData: string[] = ["Pickup", "Delivery"];

  const paymentInfoDropData: string[] = ["Paid", "Unpaid"];

  return (
    <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[12px]">
          <div className="text-text-normal">
            <AdminOrdersIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <Link
            href={"/admin/orders/earner-orders"}
            className="small text-text-normal font-medium leading-[20px]"
          >
            Earner orders
          </Link>

          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 !font-medium">Create order</p>
        </div>
      </div>

      <div className="flex flex-col gap-[3px]">
        <h3 className="!font-semibold text-text-loud leading-[40px]">
          Create order
        </h3>
        <p className="text-text-normal leading-[24px]">
          Rorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-[32px] items-start"
      >
        <div className="shadow w-full flex flex-col gap-[16px] p-[24px] bg-background-disabled rounded-[8px]">
          <h5 className="text-text-loud">Customer information</h5>

          <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted px-[14px]">
                    Select buyer type*
                  </p>
                </label>

                <StringDropDown
                  cb={buyerTypeDropDownCB}
                  dropData={buyerTypeDropData}
                  initialState={buyerType}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted px-[14px]">
                    Select user*
                  </p>
                </label>

                <StringDropDown
                  cb={selectUserDropDownCB}
                  dropData={selectUserDropData}
                  initialState={selectUser}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="shadow w-full flex flex-col gap-[16px] p-[24px] bg-background-disabled rounded-[8px]">
          <h5 className="text-text-loud">Product information</h5>

          <button
            onClick={handleAddNewVariation}
            type="button"
            className="w-full flex flex-col justify-center items-center p-[18px] text-text-muted bg-background-white"
          >
            <div className="w-[25px] h-[25px] rounded-full bg-primary-100 text-text-white flex justify-center items-center">
              <AddIcon />
            </div>
            <p className="small text-text-muted !font-semibold">Add product</p>
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

        <div className="shadow w-full flex flex-col gap-[16px] p-[24px] bg-background-disabled rounded-[8px]">
          <h5 className="text-text-loud">Delivery information</h5>

          <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted px-[14px]">
                    Delivery mode*
                  </p>
                </label>

                <StringDropDown
                  cb={deliveryModeDropDownCB}
                  dropData={deliveryModeDropData}
                  initialState={deliveryMode}
                />
              </div>
            </div>
          </div>

          {deliveryMode.toLowerCase() === "delivery" && (
            <div className="w-full grid grid-cols-3 gap-[24px]">
              <div className="w-full flex flex-col gap-[10px] col-span-2">
                <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                  <label htmlFor="">
                    <p className="small text-text-muted">Delivery address*</p>
                  </label>
                  <input
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    type="text"
                    placeholder="Enter delivery address"
                    className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-[10px] ">
                <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                  <label htmlFor="">
                    <p className="small text-text-muted">Phone number*</p>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Enter phone number"
                    className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-[10px] ">
                <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                  <label htmlFor="">
                    <p className="small text-text-muted">Delivery fee*</p>
                  </label>
                  <input
                    value={deliveryFee}
                    onChange={(e) => setDeliveryFee(e.target.value)}
                    type="text"
                    placeholder="Enter delivery fee"
                    className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="shadow w-full flex flex-col gap-[16px] p-[24px] bg-background-disabled rounded-[8px]">
          <h5 className="text-text-loud">Payment information</h5>

          <div className="w-full max-w-[740px] grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted px-[14px]">
                    Payment status*
                  </p>
                </label>

                <StringDropDown
                  cb={paymentInfoDropDownCB}
                  dropData={paymentInfoDropData}
                  initialState={paymentInfo}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#ECEFF3]"></div>

          <div className="w-full flex justify-end">
            <div className="flex gap-[56px] justify-between items-center px-[20px] py-[12px] shadow bg-background-white rounded-[6px]">
              <h5 className="text-text-disabled">Total</h5>
              <h4 className="text-text-loud !font-semibold">₦0.00</h4>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-[10px] justify-end">
          <button
            // disabled={isPending}
            type="submit"
            className="disabled:bg-[#050210]/50 bg-[#050210] px-[20px] py-[10px] text-text-white rounded-[6px]"
          >
            {/* {isPending ? "Submitting" : "Submit"} */}
            Submit
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
            <FileUpload cb={uploadCB} actionWord="Click here to upload image" />
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

            <p className="small text-text-loud text-left px-[16px]">{color}</p>

            <p className="small text-[#667085] text-left px-[16px]">{size}</p>

            <p className="small text-[#667085] text-left px-[16px]">
              {quantity}
            </p>

            <div className="w-full flex justify-center items-center px-[16px]">
              {variationStatus ? (
                <div className="w-fit green-shadow bg-[#ECFDF3] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#027A48] rounded-[4px]">
                  <Dot />
                  <p
                    className={`x-small text-[#027A48] !font-medium !leading-[18px]`}
                  >
                    Active
                  </p>
                </div>
              ) : (
                <div className="w-fit red-shadow bg-[#FEF3F2] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#B42318] rounded-[4px]">
                  <p
                    className={`x-small text-[#B42318] !font-medium leading-[18px]`}
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
