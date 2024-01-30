import ArrowDownIcon from "@/icons/ArrowDownIcon";
import { useState } from "react";

type DropSchema = { title: string; value: number };

const drop: DropSchema[] = [
  { title: "5 entries", value: 5 },
  { title: "10 entries", value: 10 },
  { title: "15 entries", value: 15 },
];

export default function DropDown({
  currentValue = "10 entries",
}: {
  currentValue?: string;
}) {
  const [current, setCurrent] = useState<string>(currentValue);
  const [showDrop, setShowDrop] = useState(false);

  function handleSelect(data: DropSchema) {
    setShowDrop(false);
    setCurrent(data.title);
  }
  return (
    <div className="flex flex-col relative items-center">
      <button
        onClick={() => setShowDrop(!showDrop)}
        className="shadow p-[10px] flex justify-center items-center gap-[10px]"
      >
        <p className="small leading-[20px] text-[#334155]">{current}</p>
        <div className="text-text-normal">
          <ArrowDownIcon />
        </div>
      </button>

      {showDrop && (
        <div className="shadow w-full min-w-[120px] p-[10px] absolute top-[45px] flex flex-col gap-[10px] bg-background-white">
          {drop.map((data, index) => (
            <button
              key={index}
              onClick={() => handleSelect(data)}
              className="shadow p-[5px] flex justify-center items-center gap-[10px]"
            >
              <p className="small leading-[20px] text-[#334155]">
                {data.title}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
