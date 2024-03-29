import Check from "@/icons/Check";
import Dot from "@/icons/Dot";
import moment from "moment";
import Image, { StaticImageData } from "next/image";
import bs1 from "../../public/bs1.png";
import clsx from "clsx";
import { ReactElement } from "react";

export function TableHeader({
  title,
  icon,
}: {
  title: string;
  icon?: ReactElement;
}) {
  return (
    <>
      {icon ? (
        <div className="flex gap-[5px] text-[#667085] items-center justify-center">
          <p className="x-small leading-[18px]  !font-medium py-[20px]">
            {title}
          </p>
          {icon}
        </div>
      ) : (
        <p className="x-small leading-[18px] text-[#667085] !font-medium py-[20px]">
          {title}
        </p>
      )}
    </>
  );
}

export function TableRow({
  title,
  darkColor = false,
  bold = false,
}: {
  title: string;
  darkColor?: boolean;
  bold?: boolean;
}) {
  return (
    <p
      className={`small text-center py-[30px] ${
        !darkColor ? "text-[#667085]" : "text-text-loud"
      } ${!bold ? "!font-normal" : "!font-medium"}`}
    >
      {title}
    </p>
  );
}

export function StatusRow({ title }: { title: string }) {
  return (
    <div className="w-full flex justify-center items-center py-[30px]">
      {title.toLowerCase() === "delivered" ||
      title.toLowerCase() === "paid" ||
      title.toLowerCase() === "picked up" ? (
        <div className="w-fit green-shadow bg-[#ECFDF3] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#027A48] rounded-[4px]">
          <Check />
          <p className={`x-small text-[#027A48] !font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title.toLowerCase() === "packed" ||
        title.toLowerCase() === "pending" ? (
        <div className="w-fit icon-shadow bg-[#F9FAFB] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#344054] rounded-[4px]">
          <Dot />
          <p className={`x-small text-[#344054] !font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title.toLowerCase() === "completed" ? (
        <div className="w-fit purple-shadow bg-[#F9F5FF] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-primary-700 rounded-[4px]">
          <Check />
          <p className={`x-small text-primary-700 !font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title.toLowerCase() === "not paid" ? (
        <div className="w-fit red-shadow bg-[#FEF3F2] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#B42318] rounded-[4px]">
          <Dot />
          <p className={`x-small text-[#B42318] !font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function DateRow({
  date,
  darkColor = false,
}: {
  date: string;
  darkColor?: boolean;
}) {
  return (
    <p
      className={`small text-center py-[30px] ${
        !darkColor ? "text-[#667085]" : "text-text-loud"
      }`}
    >
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
        <p className="small text-[#101828] !font-medium text-center py-[30px]">
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
          <p className={`x-small text-[#027A48] !font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title === "Inactive" ? (
        <div className="w-fit red-shadow bg-[#FEF3F2] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#B42318] rounded-[4px]">
          <p className={`x-small text-[#B42318] !font-medium leading-[18px]`}>
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
          <p className="small text-[#101828] !font-medium text-center">
            {color.color}
          </p>
          <p className="small text-[#667085] text-center">{color.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export function AdminOrderStatusRow({ title }: { title: string }) {
  return (
    <div className="w-full flex justify-center items-center py-[30px]">
      {title.toLowerCase() === "delivered" || title.toLowerCase() === "paid" ? (
        <div className="w-fit green-shadow bg-[#ECFDF3] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#027A48] rounded-[4px]">
          <Check />
          <p className={`x-small text-[#027A48] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title.toLowerCase() === "pending" ? (
        <div className="w-fit icon-shadow bg-[#F9FAFB] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#344054] rounded-[4px]">
          <Dot />
          <p className={`x-small text-[#344054] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title.toLowerCase() === "packed" ? (
        <div className="w-fit bg-[#FFF6ED] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#C4320A] rounded-[4px]">
          <p className={`x-small text-[#C4320A] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title.toLowerCase() === "unpacked" ? (
        <div className="w-fit bg-[#FDF2FA] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#C11574] rounded-[4px]">
          <p className={`x-small text-[#C11574] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title.toLowerCase() === "shipped" ? (
        <div className="w-fit purple-shadow bg-[#EFF8FF] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#EFF8FF] rounded-[4px]">
          <p className={`x-small text-[#175CD3] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : title.toLowerCase() === "unpaid" ? (
        <div className="w-fit red-shadow bg-[#FEF3F2] flex gap-[6px] items-center justify-center px-[8px] py-[3px] text-[#B42318] rounded-[4px]">
          <p className={`x-small text-[#B42318] font-medium leading-[18px]`}>
            {title}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function AdminOrderTableRow({ title }: { title: string }) {
  return (
    <p className="small text-text-loud !font-medium text-center py-[30px]">
      {title}
    </p>
  );
}

export function AdminUserNameEmailRow({
  info,
}: {
  info: { name: string; email: string };
}) {
  return (
    <div className="flex flex-col">
      <p className="small text-[#0D0D12] text-center ">{info.name}</p>
      <p className="small text-[#667085] text-center ">{info.email}</p>
    </div>
  );
}

export function AdminUserLevelRow({
  earner_level,
}: {
  earner_level: { level: string; badge: StaticImageData };
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex justify-center items-center gap-[10px]">
        <Image
          alt="Level Badge"
          src={earner_level.badge ? earner_level.badge : bs1}
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="small text-[#101828] !font-medium text-center py-[30px]">
          {earner_level.level}
        </p>
      </div>
    </div>
  );
}
