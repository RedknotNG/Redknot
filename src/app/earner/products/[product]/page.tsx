"use client";

import SlashIcon from "@/icons/SlashIcon";
import Image from "next/image";
import Link from "next/link";
import bg1 from "../../../../../public/bg1.png";
import bs1 from "../../../../../public/bs1.png";
import productColor from "../../../../../public/productColor.png";
import Dot from "@/icons/Dot";
import clsx from "clsx";
import { useState } from "react";
import Check from "@/icons/Check";
import CancelIcon from "@/icons/CancelIcon";
import { useRouter } from "next/navigation";

const colors: string[] = ["Red", "Violet", "Pink", "Black", "White"];
const sizes: string[] = ["M", "L", "XL", "XXL", "XXXL"];

export default function EachProduct() {
  const [currentColor, setCurrentColor] = useState("Red");
  const [currentSize, setCurrentSize] = useState("XXL");
  const [showSave, setShowSave] = useState(false);

  const router = useRouter();

  function handleSaveToCart() {
    setShowSave(true);
  }

  function handleCancelCart() {
    setShowSave(false);
  }

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-full bg-background-disabled flex justify-center mb-[32px]">
        <div className="w-full max-w-[1280px] flex items-center gap-[12px] py-[24px] px-[32px]">
          <Link
            href={"/earner/products"}
            className="small text-text-normal font-medium"
          >
            Products
          </Link>

          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-text-loud font-medium">
            Nini - Adire Agbada dress
          </p>
        </div>
      </div>
      <div className="w-full max-w-[1280px] px-[32px] flex flex-col gap-[32px]">
        <div className="w-full flex items-stretch gap-[40px]">
          <div className="w-[50%] flex items-center">
            <Image
              src={bg1}
              alt="BG 1"
              height={544}
              className="w-full h-[544px]"
            />
          </div>
          <div className="w-[50%] flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <p className="w-fit bg-[#CA830D] rounded-[4px] text-center py-[4px] px-[8px] small leading-[20px] text-text-white font-semibold">
                ₦500 Commission
              </p>

              <h2 className="font-semibold leading-[44px] text-text-loud">
                Nini - Adire Agbada dress
              </h2>

              <h4 className="font-medium leading-[32px] text-text-muted">
                ₦13,500
              </h4>

              <div className="flex items-center gap-[8px] text-text-disabled">
                <p className="text-text-subdued">Sweatshirt</p>
                <Dot />
                <p className="italic font-medium leading-[20px] text-[#B54708]">
                  50 in stock
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <p className="small text-text-normal font-medium leading-[20px]">
                Colour
              </p>

              <div className="flex gap-[12px]">
                {colors.map((color, index) => (
                  <button
                    onClick={() => setCurrentColor(color)}
                    key={index}
                    className={clsx(
                      "w-[88px] h-[72px] bg-background-disabled flex justify-center items-center rounded-[6px]",
                      {
                        "border-[2px] border-primary-100":
                          currentColor === color,
                      }
                    )}
                  >
                    <Image
                      src={productColor}
                      alt={`Product Color - ${color}`}
                      height={70}
                      width={60}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <p className="small text-text-normal font-medium leading-[20px]">
                Size
              </p>

              <div className="flex gap-[12px]">
                {sizes.map((size, index) => (
                  <button
                    onClick={() => setCurrentSize(size)}
                    key={index}
                    className={clsx(
                      "flex justify-center items-center rounded-[6px] py-[6px] px-[24px] font-inter text-[16px] text-text-muted border leading-[24px]",
                      {
                        "bg-primary-100 text-text-white font-semibold":
                          currentSize === size,
                        "bg-transparent font-medium": currentSize !== size,
                      }
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[1.5px] w-full bg-[#ECEFF3]"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-text-normal font-medium leading-[24px]">
                Available quantity based on your options
              </p>

              <p className="text-text-loud font-medium leading-[28px] text-[18px]">
                10
              </p>
            </div>

            <button
              onClick={handleSaveToCart}
              className="w-full bg-primary-100 text-text-white text-[16px] font-semibold leading-[24px] font-inter py-[12px] rounded-[6px]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {showSave && (
        <div className="focus-bg w-screen h-screen absolute top-0 flex justify-center">
          <div className="w-full max-w-[1280px] px-[32px] flex justify-end">
            <div className="h-fit w-[482px] bg-background-white py-[16px] px-[18px] flex flex-col gap-[16px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[20px]">
                  <div className="h-[20px] w-[20px] rounded-full bg-[#40C4AA] text-text-white flex justify-center items-center">
                    <Check />
                  </div>
                  <h6 className="leading-[28px] text-text-loud font-medium">
                    Added to Cart
                  </h6>
                </div>

                <button
                  onClick={handleCancelCart}
                  className="flex justify-center items-center text-text-normal"
                >
                  <CancelIcon />
                </button>
              </div>

              <div className="flex gap-[16px]">
                <Image src={bs1} alt="BG 1" height={100} width={100} />

                <div className="flex flex-col gap-[10px]">
                  <p className="font-medium text-text-muted">
                    Nini - Adire Agbada dress
                  </p>

                  <div className="flex gap-[24px]">
                    <p className="small text-text-normal">Sweatshirt</p>
                    <p className="small text-text-normal">Size XXS</p>
                    <p className="small text-text-normal">₦500 commission</p>
                  </div>

                  <p className="small text-text-muted">₦13,500</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[12px]">
                <Link
                  href={"/earner/carts"}
                  className="shadow py-[8px] bg-background-white flex justify-center items-center rounded-[6px]"
                >
                  <p className="small text-text-muted font-medium">View Cart</p>
                </Link>

                <Link
                  href={"/earner/carts/checkout"}
                  className="shadow py-[8px] bg-primary-100 flex justify-center items-center rounded-[6px]"
                >
                  <p className="small text-text-white font-medium">Checkout</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
