import ArrowDownIcon from "@/icons/ArrowDownIcon";
import { BoolDropdownSchema } from "@/lib/AdminTypes";
import { useState } from "react";

export default function BoolDropDown({
  cb,
  dropData,
  initialState,
}: {
  cb: (value: boolean) => void;
  dropData: BoolDropdownSchema[];
  initialState: BoolDropdownSchema;
}) {
  const [current, setCurrent] = useState(initialState?.label);
  const [showDrop, setShowDrop] = useState(false);

  function handleSelect(data: { label: string; value: boolean }) {
    setShowDrop(false);
    setCurrent(data.label);
    cb(data.value);
  }
  return (
    <div className="flex flex-col relative items-center">
      <button
        type="button"
        onClick={() => setShowDrop(!showDrop)}
        className="w-full flex justify-between items-center gap-[10px] px-[14px]"
      >
        <p className="small leading-[20px] text-[#334155]">{current}</p>
        <div className="text-text-normal">
          <ArrowDownIcon />
        </div>
      </button>

      {showDrop && (
        <div className="shadow w-full py-[10px] absolute top-[35px] flex flex-col gap-[5px] bg-background-white z-20">
          {dropData.map((data, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleSelect(data)}
              className="py-[5px] px-[15px] flex justify-start items-center gap-[10px] hover:bg-background-hover"
            >
              <p className="small leading-[20px] text-[#334155]">
                {data.label}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
