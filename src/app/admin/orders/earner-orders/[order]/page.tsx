"use client";

import { StatusRow } from "@/components/TableBody";
import AdminOrdersIcon from "@/icons/AdminLayout/AdminOrdersIcon";
import Check from "@/icons/Check";
import DownloadIcon from "@/icons/DownloadIcon";
import SlashIcon from "@/icons/SlashIcon";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function EachAdminEarnerOrder() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  return (
    <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
      <div className="w-full flex flex-col gap-[20px] items-start">
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

          <p className="small text-primary-100 !font-medium">{orderId}</p>
        </div>

        <h3 className="!font-semibold text-text-loud leading-[40px]">
          {orderId}
        </h3>
      </div>

      <div className="w-full flex flex-col gap-[24px]">
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

          <div className="w-full grid grid-cols-5">
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
            <DisplayCard title="Total amount paid" value="₦39,000" />
            <div className="col-span-2 bg-white flex gap-[16px] justify-between items-center py-[20px] px-[16px] rounded-[10px] border-[1px] border-dashed border-[#D0D5DD]">
              <div className="flex gap-[12px] items-center">
                <div className="text-white w-[40px] h-[40px] rounded-full bg-[#28806F] border-[10px] border-[#E7F6EC] flex items-center justify-center">
                  <Check />
                </div>

                <div className="flex flex-col">
                  <p className="small !font-medium text-[#1D2739]">
                    Transfer Receipt
                  </p>

                  <p className="text-[11px] !leading-[16px] text-[#667185]">
                    Gtbank52652.pdf{" "}
                    <span className="text-[#98A2B3]">
                      | 313 KB . 31 Aug, 2022
                    </span>
                  </p>
                </div>
              </div>

              <button className="w-fit bg-transparent flex gap-[5px] items-center text-text-subdued active:border-none">
                <DownloadIcon />
                <p className="x-small !font-semibold leading-[18px]">
                  Download
                </p>
              </button>
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
