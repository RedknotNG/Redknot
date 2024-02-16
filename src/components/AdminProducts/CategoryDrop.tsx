import ArrowDownIcon from "@/icons/ArrowDownIcon";
import { useState } from "react";

const drop: string[] = [
  "Select category",
  "Category One",
  "Category Two",
  "Category Three",
];

export default function CategoryDropDown({
  cb,
}: {
  cb: (value: string) => void;
}) {
  const [current, setCurrent] = useState("Select category");
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
        className="w-full flex justify-between items-center gap-[10px] px-[14px]"
      >
        <p className="small leading-[20px] text-[#334155]">{current}</p>
        <div className="text-text-normal">
          <ArrowDownIcon />
        </div>
      </button>

      {showDrop && (
        <div className="shadow w-full py-[10px] absolute top-[35px] flex flex-col gap-[5px] bg-background-white z-30">
          {drop.map((data, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleSelect(data)}
              className="py-[5px] px-[15px] flex justify-start items-center gap-[10px] hover:bg-background-hover"
            >
              <p className="small leading-[20px] text-[#334155]">{data}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
