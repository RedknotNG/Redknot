"use client";

import { StatusRow } from "@/components/TableBody";
import Check from "@/icons/Check";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function EachOrder() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-white flex justify-center border-b-[1px]">
        <div className="w-full max-w-[1280px] flex items-center gap-[12px] py-[24px] px-[32px]">
          <Link href={"/earner/orders"}>
            <p className="small text-text-normal font-medium">Orders</p>
          </Link>

          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-text-loud font-medium">{orderId}</p>
        </div>
      </div>

      <div className="w-full bg-background-disabled flex justify-center py-[32px]">
        <div className="w-full  max-w-[1280px] px-[32px] flex flex-col gap-[24px]">
          <div className="order-card-container w-full px-[24px] py-[16px] flex flex-col gap-[24px]">
            <h4 className="text-[#26272B]">Order Summary</h4>

            <div className="w-full grid grid-cols-4">
              <DisplayCard title="Order date" value="16th-Sep-2023" />
              <DisplayCard title="Order ID" value="#841896" />
              <DisplayCard title="Total quantity" value="03" />
              <DisplayCard title="Total commission" value="₦1,000" />
            </div>
          </div>

          <div className="order-card-container w-full px-[24px] py-[16px] flex flex-col gap-[24px]">
            <h4 className="text-[#26272B]">Order Information</h4>

            <div className="flex flex-col gap-[16px]">
              <div className="w-full grid grid-cols-5 py-[16px]">
                <DisplayCard
                  title="Product name"
                  value="Nini - Adire Agbada dress"
                />
                <DisplayCard title="Product variation" value="Sweatshirt" />
                <DisplayCard title="Product price" value="₦16,500" />
                <DisplayCard title="Order quantity" value="01" />
                <DisplayCard title="Commission" value="₦500" />
              </div>

              <div className="w-full grid grid-cols-5 py-[16px] border-t-[1px]">
                <DisplayCard title="Product name" value="Sleeveless Hoodie" />
                <DisplayCard title="Product variation" value="Hoodie" />
                <DisplayCard title="Product price" value="₦16,500" />
                <DisplayCard title="Order quantity" value="02" />
                <DisplayCard title="Commission" value="₦500" />
              </div>
            </div>

            <div className="w-full bg-background-disabled px-[12px] py-[8px] flex items-center gap-[8px] border-[1px] border-border-normal rounded-[8px]">
              <p className="text-[#70707B]">Total</p>
              <h5 className="text-[#26272B] font-semibold">₦35,000</h5>
            </div>
          </div>

          <div className="order-card-container w-full px-[24px] py-[16px] flex flex-col gap-[24px]">
            <h4 className="text-[#26272B]">Customer Information</h4>

            <div className="w-full grid grid-cols-3">
              <DisplayCard title="Customer name" value="Mubarak Tunde Soroye" />
              <DisplayCard title="Phone number" value="+2348026623158" />
              <DisplayCard title="Email" value="mubaraktundeshow@gmail.com" />
            </div>
          </div>

          <div className="order-card-container w-full px-[24px] py-[16px] flex flex-col gap-[24px]">
            <h4 className="text-[#26272B]">Delivery Information</h4>

            <div className="w-full flex justify-between">
              <DisplayCard title="Delivery type" value="Delivery" />
              <DisplayCard
                title="Delivery address"
                value="29, Ganiyu Falola Street, Agidingbi, Lagos"
              />
              <DisplayCard title="Delivery fee" value="₦4,000" />
              <div className="flex flex-col gap-[8px]">
                <p className="small text-[#70707B]">Delivery status</p>
                <div className="w-fit green-shadow bg-[#ECFDF3] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#027A48] rounded-[4px]">
                  <Check />
                  <p
                    className={`x-small text-[#027A48] font-medium leading-[18px]`}
                  >
                    Picked up
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-card-container w-full px-[24px] py-[16px] flex flex-col gap-[24px]">
            <h4 className="text-[#26272B]">Payment Information</h4>

            <div className="w-full grid grid-cols-2">
              <DisplayCard title="Payment method" value="Transfer" />
              <div className="flex flex-col gap-[8px]">
                <p className="small text-[#70707B]">Payment status</p>
                <div className="w-fit green-shadow bg-[#ECFDF3] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#027A48] rounded-[4px]">
                  <Check />
                  <p
                    className={`x-small text-[#027A48] font-medium leading-[18px]`}
                  >
                    Paid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisplayCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="small text-[#70707B]">{title}</p>
      <p className="text-[#26272B] font-medium">{value}</p>
    </div>
  );
}
