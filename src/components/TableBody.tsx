import Check from "@/icons/Check";
import Dot from "@/icons/Dot";
import moment from "moment";
import Image, { StaticImageData } from "next/image";
import bs1 from "../../public/bs1.png";
import clsx from "clsx";

export function TableHeader({ title }: { title: string }) {
  return (
    <p className="x-small leading-[18px] text-[#667085] font-medium py-[20px]">
      {title}
    </p>
  );
}

export function TableRow({ title }: { title: string }) {
  return (
    <p className="small leading-[20px] text-[#667085] font-normal text-center py-[30px]">
      {title}
    </p>
  );
}

export function StatusRow({ title }: { title: string }) {
  return (
    <div className="w-full flex justify-center items-center py-[30px]">
      {title === "Delivered" || title === "Paid" ? (
        <div className="w-fit green-shadow bg-[#ECFDF3] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#027A48] rounded-[4px]">
          <Check />
          <p className={`x-small text-[#027A48] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title === "Packed" ? (
        <div className="w-fit icon-shadow bg-[#F9FAFB] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#344054] rounded-[4px]">
          <Dot />
          <p className={`x-small text-[#344054] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title === "Not paid" ? (
        <div className="w-fit red-shadow bg-[#FEF3F2] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#B42318] rounded-[4px]">
          <Dot />
          <p className={`x-small text-[#B42318] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function DateRow({ date }: { date: string }) {
  return (
    <p className="small leading-[20px] text-[#667085] font-normal text-center py-[30px]">
      {moment(date).format("MMM Do, YYYY")}
    </p>
  );
}

export function ProductTitleRow({
  name,
}: {
  name: { title: string; image: StaticImageData };
}) {
  return (
    <div className="w-full flex justify-center items-center pl-[20px]">
      <div className="w-full flex justify-start items-center gap-[10px]">
        <Image
          alt="Level Badge"
          src={name.image ? name.image : bs1}
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="small leading-[20px] text-[#101828] font-medium text-center py-[30px]">
          {name.title}
        </p>
      </div>
    </div>
  );
}

export function ProductStatusRow({ title }: { title: string }) {
  return (
    <div className="w-full flex justify-center items-center py-[30px]">
      {title === "Active" ? (
        <div className="w-fit green-shadow bg-[#ECFDF3] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#027A48] rounded-[4px]">
          <Dot />
          <p className={`x-small text-[#027A48] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title === "Inactive" ? (
        <div className="w-fit red-shadow bg-[#FEF3F2] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#B42318] rounded-[4px]">
          <p className={`x-small text-[#B42318] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function EachProductTitleRow({
  color,
}: {
  color: { color: string; quantity: number; code: string };
}) {
  return (
    <div className="w-full flex justify-center items-center pl-[20px]">
      <div className="w-full flex justify-start items-center gap-[10px]">
        <div
          className={clsx(`h-[40px] w-[40px] rounded-full bg-[${color.code}]`)}
          style={{
            backgroundColor: color.code,
          }}
        ></div>
        <div className="flex flex-col items-start gap-0 py-[30px]">
          <p className="small leading-[20px] text-[#101828] font-medium text-center">
            {color.color}
          </p>
          <p className="small leading-[20px] text-[#667085] font-normal text-center">
            {color.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
