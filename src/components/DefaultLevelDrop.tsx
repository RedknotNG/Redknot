import ArrowDownIcon from "@/icons/ArrowDownIcon";
import { useState } from "react";

const drop: { label: string; value: boolean }[] = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

export default function LevelDropDown({
  cb,
}: {
  cb: (value: boolean) => void;
}) {
  const [current, setCurrent] = useState("Yes");
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
        className="w-full flex justify-between items-center gap-[10px]"
      >
        <p className="small leading-[20px] text-[#334155]">{current}</p>
        <div className="text-text-normal">
          <ArrowDownIcon />
        </div>
      </button>

      {showDrop && (
        <div className="shadow w-full min-w-[180px] p-[10px] absolute top-[35px] flex flex-col gap-[10px] bg-background-white">
          {drop.map((data, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleSelect(data)}
              className="shadow p-[5px] flex justify-center items-center gap-[10px]"
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
