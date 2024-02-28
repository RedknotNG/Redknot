import Image from "next/image";
import bs1 from "../../../../public/bs1.png";
import MinusIcon from "@/icons/MinusIcon";
import AddIcon from "@/icons/AddIcon";

export default function CartsPage() {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="w-full bg-transparent flex justify-center">
        <div className="w-full max-w-[1280px] flex gap-[12px] py-[40px] px-[32px]">
          <h2 className="font-semibold text-[#101928]">Shopping cart</h2>
        </div>
      </div>

      <div className="w-full max-w-[1280px] px-[32px] flex gap-[32px] items-start">
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between items-start py-[32px] border-t border-t-border-normal">
            <div className="flex gap-[24px]">
              <Image src={bs1} alt="BG 1" width={176} height={172} />

              <div className="flex flex-col gap-[12px]">
                <p className="w-fit bg-[#CA830D] rounded-[4px] text-center py-[4px] px-[8px] small leading-[20px] text-text-white font-semibold">
                  ₦500 Commission
                </p>
                <h6 className="font-semibold text-[#101928]">
                  Nini - Adire Agbada dress
                </h6>

                <p className="font-medium text-text-muted">₦13,500</p>

                <p className="font-medium text-text-subdued">Sweatshirt</p>

                <button className="button-secondary-normal w-fit p-[8px]">
                  <p className="small font-medium text-secondary_red-100">
                    Delete
                  </p>
                </button>
              </div>
            </div>

            <div className="button-secondary-normal h-fit flex items-center gap-[16px] px-[8px] py-[4px]">
              <button className="text-[#818898]">
                <MinusIcon />
              </button>
              <p className="text-text-muted font-medium">1</p>
              <button className="text-[#818898]">
                <AddIcon />
              </button>
            </div>
          </div>

          <div className="w-full flex justify-between items-start py-[32px] border-t border-t-border-normal">
            <div className="flex gap-[24px]">
              <Image src={bs1} alt="BG 1" width={176} height={172} />

              <div className="flex flex-col gap-[12px]">
                <p className="w-fit bg-[#CA830D] rounded-[4px] text-center py-[4px] px-[8px] small leading-[20px] text-text-white font-semibold">
                  ₦500 Commission
                </p>
                <h6 className="font-semibold text-[#101928]">
                  Nini - Adire Agbada dress
                </h6>

                <p className="font-medium text-text-muted">₦13,500</p>

                <p className="font-medium text-text-subdued">Sweatshirt</p>

                <button className="button-secondary-normal w-fit p-[8px]">
                  <p className="small font-medium text-secondary_red-100">
                    Delete
                  </p>
                </button>
              </div>
            </div>

            <div className="button-secondary-normal h-fit flex items-center gap-[16px] px-[8px] py-[4px]">
              <button className="text-[#818898]">
                <MinusIcon />
              </button>
              <p className="text-text-muted font-medium">1</p>
              <button className="text-[#818898]">
                <AddIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="p-[24px] bg-background-disabled flex flex-col gap-[15px]">
          <h5 className="text-[#101928] font-semibold">Order summary</h5>
          <div className="w-full flex flex-col">
            <div className="flex justify-between gap-[206px] py-[15px] border-b border-b-border-normal">
              <p className="text-text-normal">Subtotal</p>
              <p className="text-text-muted font-medium">₦22,000</p>
            </div>

            <div className="flex justify-between gap-[206px] py-[15px] border-b border-b-border-normal">
              <p className="text-text-normal">Commission</p>
              <p className="text-text-muted font-medium">₦700</p>
            </div>
          </div>

          <div className="flex justify-between gap-[206px] pb-[15px]">
            <h6 className="text-text-muted font-medium">Total</h6>
            <h6 className="text-text-muted font-medium">₦22,000</h6>
          </div>

          <button className="w-full form-button py-[12px]">
            <p className="text-text-white font-semibold">Checkout</p>
          </button>
        </div>
      </div>
    </div>
  );
}
