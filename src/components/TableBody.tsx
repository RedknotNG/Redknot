import Check from "@/icons/Check";
import Dot from "@/icons/Dot";

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
