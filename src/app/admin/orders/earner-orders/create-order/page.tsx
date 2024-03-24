"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminAddProductOrderSchema } from "@/lib/AdminTypes";
import AddIcon from "@/icons/AddIcon";
import StringDropDown from "@/components/StringDropDown";
import AdminOrdersIcon from "@/icons/AdminLayout/AdminOrdersIcon";

export default function AdminCreateEarnerOrder() {
  const [addProductError, setAddProductError] = useState(false);
  const [productData, setProductData] = useState<AdminAddProductOrderSchema[]>(
    []
  );
  const [productActive, setProductActive] = useState(false);
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
    if (productActive) {
      setAddProductError(true);
    } else {
      setProductActive(true);
      setAddProductError(false);
      setProductData((prev) => [
        {
          id: `${countRef.current++}`,
          product: "Nini - Adire Agbada dress",
          color: "Red",
          size: "XXXL",
          quantity: 0,
        },
        ...prev,
      ]);
    }
  }

  function handleSaveNewProduct(newData: AdminAddProductOrderSchema) {
    console.log(newData);
    setProductActive(false);
    setProductData((prev) =>
      prev.map((data) => {
        if (data.id === newData.id) {
          return newData;
        }
        return data;
      })
    );
  }

  function handleProductCancel(id: string) {
    setProductActive(false);
    setProductData((prev) => prev.filter((data) => data.id !== id));
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
    setPaymentInfo(value);
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
            {productData.length > 0 &&
              productData.map((data) => (
                <AddProduct
                  initialData={data}
                  key={data.id}
                  handleSaveNewProduct={handleSaveNewProduct}
                  handleCancel={handleProductCancel}
                  setProductActive={setProductActive}
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

function AddProduct({
  initialData,
  handleSaveNewProduct,
  handleCancel,
  setProductActive,
}: {
  initialData: AdminAddProductOrderSchema;
  handleSaveNewProduct: (data: AdminAddProductOrderSchema) => void;
  handleCancel: (id: string) => void;
  setProductActive: Dispatch<SetStateAction<boolean>>;
}) {
  const [color, setColor] = useState(initialData.color);
  const [size, setSize] = useState(initialData.size);
  const [quantity, setQuantity] = useState<number>(initialData.quantity);
  const [product, setProduct] = useState(initialData.product);

  const [saved, setSaved] = useState(false);

  function colorDropDownCB(value: string) {
    setColor(value);
  }
  function sizeDropDownCB(value: string) {
    setSize(value);
  }
  function productDropDownCB(value: string) {
    setProduct(value);
  }

  function handleSave() {
    const payload = {
      id: initialData.id,
      color,
      size,
      quantity,
      product,
    };
    setSaved(true);
    handleSaveNewProduct(payload);
  }

  function handleEdit() {
    setSaved(false);
    setProductActive(true);
  }

  const colorDropData: string[] = ["Red", "Violet", "Pink", "Black", "White"];
  const sizeDropData: string[] = ["M", "L", "XL", "XXL", "XXXL"];
  const productDropData: string[] = [
    "Nini - Adire Agbada dress",
    "Nini - Adire Agbada dress",
    "Nini - Adire Agbada dress",
  ];

  return (
    <div className="w-full bg-background-white p-[16px] rounded-[6px] shadow">
      {!saved ? (
        <div className="w-full max-w-[740px] flex flex-col gap-[16px]">
          <div className="w-full grid grid-cols-2 gap-[24px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted px-[14px]">
                    Select product*
                  </p>
                </label>

                <StringDropDown
                  cb={productDropDownCB}
                  dropData={productDropData}
                  initialState={product}
                />
              </div>
            </div>

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

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-text-muted">Quantity*</p>
                </label>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.valueAsNumber)}
                  type="number"
                  placeholder="Enter quantity"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>
            </div>
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
              Add
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[12px] items-start">
            <p className="small !font-medium text-text-loud text-left">
              {product}
            </p>
            <div className="flex gap-[8px] items-center">
              <p className="x-small !font-medium text-[#344054] text-center px-[8px] rounded-[16px] bg-[#F2F4F7]">
                {color}
              </p>

              <p className="x-small !font-medium text-[#344054] text-center px-[8px] rounded-[16px] bg-[#F2F4F7]">
                {size}
              </p>

              <p className="x-small !font-medium text-[#344054] text-center px-[8px] rounded-[16px] bg-[#F2F4F7]">
                {quantity}
              </p>
            </div>
          </div>

          <div className="flex gap-[16px] items-center">
            <button
              type="button"
              onClick={() => handleCancel(initialData.id)}
              className="text-secondary_red-100 font-semibold text-[14px] font-inter leading-[20px]"
            >
              Remove product
            </button>
            <button
              type="button"
              onClick={handleEdit}
              className="text-primary-100 font-semibold text-[14px] font-inter leading-[20px]"
            >
              Edit product
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
