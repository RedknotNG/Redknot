"use client";

import Check from "@/icons/Check";
import DeliveryIcon from "@/icons/DeliveryIcon";
import PickupIcon from "@/icons/PickupIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Dot from "@/icons/Dot";
import FileUpload from "@/components/FileUpload";

const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.number({
    required_error: "Phone Number is required",
    invalid_type_error: "Phone Number must be a number",
  }),
  address: z.string().min(1, "Delivery Address is required"),
});

export type TCheckoutSchema = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [radioOption, setRadioOption] = useState("bank");

  function handleDeliveryOption(delivery: string) {
    setDeliveryOption(delivery);
  }

  function handleChangeRadio(option: string) {
    setRadioOption(option);
  }

  function uploadCB(imageURL: string) {
    console.log(imageURL);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TCheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
  });

  function onSubmit(data: TCheckoutSchema) {
    console.log(data);
  }
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-full bg-transparent flex justify-center">
        <div className="w-full max-w-[1280px] flex gap-[12px] py-[40px] px-[32px]">
          <h2 className="font-semibold text-[#101928]">Checkout</h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[1280px] px-[32px] flex gap-[32px] items-start"
      >
        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-[20px] py-[32px] border-t border-t-border-normal">
            <h6 className="text-[#36394A]">Delivery Options</h6>
            <div className="flex gap-[8px]">
              <button
                type="button"
                onClick={() => handleDeliveryOption("delivery")}
                className={`w-[200px] px-[42px] py-[12px] flex gap-[12px] justify-center items-center text-text-normal rounded-[6px] border ${
                  deliveryOption === "delivery"
                    ? "border-primary-100"
                    : "border-border-hover"
                }`}
              >
                <DeliveryIcon />
                <p className="small font-medium text-text-muted">Delivery</p>
                {deliveryOption === "delivery" && <Check />}
              </button>

              <button
                type="button"
                onClick={() => handleDeliveryOption("pickup")}
                className={`w-[200px] px-[42px] py-[12px] flex gap-[12px] justify-center items-center text-text-normal rounded-[6px] border ${
                  deliveryOption === "pickup"
                    ? "border-primary-100"
                    : "border-border-hover"
                }`}
              >
                <PickupIcon />
                <p className="small font-medium text-text-muted">Pickup</p>
                {deliveryOption === "pickup" && <Check />}
              </button>
            </div>

            <div className="w-full grid grid-cols-2 gap-[16px]">
              <div className="w-full flex flex-col gap-[10px]">
                <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                  <label htmlFor="">
                    <p className="small text-[#36394A] font-medium">Name</p>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter your name"
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
                    <p className="small text-[#36394A] font-medium">
                      Phone number
                    </p>
                  </label>
                  <input
                    {...register("phone", {
                      valueAsNumber: true,
                    })}
                    type="text"
                    placeholder="Enter your phone number"
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

            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-col gap-[2px] border-[1px] rounded-[6px] px-[14px] py-[10px] bg-background-white">
                <label htmlFor="">
                  <p className="small text-[#36394A] font-medium">
                    Delivery Address*
                  </p>
                </label>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Enter delivery address"
                  className="font-normal font-inter text-[16px] text-text-normal leading-[24px] focus:border-none focus:outline-none"
                />
              </div>

              {errors.address && (
                <p className="x-small w-full text-left text-secondary_red-100 leading-[14px]">
                  {`${errors.address.message}`}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[20px] py-[32px] border-t border-t-border-normal">
            <h6 className="text-[#36394A]">Payment</h6>

            <div className="flex gap-[24px]">
              <label className="payment-radio-container">
                <p className="small text-text-muted font-medium">
                  Bank Transfer
                </p>
                <input
                  onChange={(e) => handleChangeRadio(e.target.name)}
                  type="radio"
                  checked={radioOption === "bank" ? true : false}
                  name="bank"
                />
                <span className="checkmark"></span>
              </label>
              <label className="payment-radio-container">
                <p className="small text-text-muted font-medium">Paystack</p>
                <input
                  checked={radioOption === "paystack" ? true : false}
                  onChange={(e) => handleChangeRadio(e.target.name)}
                  type="radio"
                  name="paystack"
                />
                <span className="checkmark"></span>
              </label>
              <label className="payment-radio-container">
                <p className="small text-text-muted font-medium">Flutterwave</p>
                <input
                  checked={radioOption === "flutterwave" ? true : false}
                  onChange={(e) => handleChangeRadio(e.target.name)}
                  type="radio"
                  name="flutterwave"
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="w-full bg-background-disabled flex flex-col p-[16px] gap-[12px] rounded-[4px]">
              <p className="small text-text-disabled">
                REDKNOT ACCOUNT DETAILS
              </p>

              <div className="flex gap-[26px] text-text-disabled items-center">
                <p className="small text-text-loud font-medium">
                  Bank Name: Guaranty Trust Bank
                </p>

                <Dot />

                <p className="small text-text-loud font-medium">
                  Account Name: Redknot Wears
                </p>

                <Dot />

                <p className="small text-text-loud font-medium">
                  Account Number: 05332514892
                </p>
              </div>
            </div>

            <FileUpload
              cb={uploadCB}
              actionWord="Click here to upload transfer receipt"
            />
          </div>
        </div>

        <div className="p-[24px] bg-background-disabled flex flex-col gap-[15px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[#101928] font-semibold">In your cart</h5>
            <button>
              <p className="small font-medium text-text-muted">Edit</p>
            </button>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex justify-between gap-[206px] py-[15px] border-b border-b-border-normal">
              <p className="text-text-normal">Subtotal</p>
              <p className="text-text-muted font-medium">₦22,000</p>
            </div>

            <div className="flex justify-between py-[15px] border-b border-b-border-normal">
              <p className="text-text-normal">Commission</p>
              <p className="text-text-muted font-medium">₦700</p>
            </div>

            <div className="flex justify-between py-[15px] border-b border-b-border-normal">
              <p className="w-fit text-text-normal">Delivery fee</p>
              <p className="text-text-muted font-medium">₦4000</p>
            </div>
          </div>

          <div className="flex justify-between pb-[15px]">
            <h6 className="text-text-muted font-medium">Total</h6>
            <h6 className="text-text-muted font-medium">₦26,000</h6>
          </div>

          <button className="w-full form-button py-[12px]">
            <p className="text-text-white font-semibold">Submit order</p>
          </button>
        </div>
      </form>
    </div>
  );
}
