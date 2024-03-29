import ArrowDownIcon from "@/icons/ArrowDownIcon";
import { useState } from "react";

const drop: string[] = [
  "Commission range",
  "Commission range",
  "Percentage range",
];

export default function ProductDropDown({
  cb,
}: {
  cb: (value: string) => void;
}) {
  const [current, setCurrent] = useState("Commission range");
  const [showDrop, setShowDrop] = useState(false);

  function handleSelect(value: string) {
    setShowDrop(false);
    setCurrent(value);
    cb(value);
  }
  return (
    <div className="flex flex-col relative items-center">
      <button
        type="button"
        onClick={() => setShowDrop(!showDrop)}
        className="w-full min-w-[180px] shadow p-[12px] flex justify-center items-center gap-[10px] rounded-[6px]"
      >
        <p className="small leading-[20px] text-[#334155]">{current}</p>
        <div className="text-text-normal">
          <ArrowDownIcon />
        </div>
      </button>

      {showDrop && (
        <div className="shadow w-full min-w-[180px] p-[10px] absolute top-[45px] flex flex-col gap-[10px] bg-background-white">
          {drop.map((data, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleSelect(data)}
              className="shadow p-[5px] flex justify-center items-center gap-[10px]"
            >
              <p className="small leading-[20px] text-[#334155]">{data}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
