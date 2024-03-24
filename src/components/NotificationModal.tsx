import { useModalContext } from "@/contexts/ModalContext";
import CancelIcon from "@/icons/CancelIcon";
import SuccessIcon from "@/icons/SuccessIcon";
import { useEffect } from "react";

export default function NotificationModal({
  type,
  msg,
  msgInfo,
}: {
  type: string;
  msg: string;
  msgInfo: string;
}) {
  const { modalActive, setModalActive } = useModalContext();

  useEffect(() => {
    if (modalActive) {
      const remove = setTimeout(() => {
        setModalActive(false);
      }, 5000);
      return () => clearTimeout(remove);
    }
  }, [modalActive, setModalActive]);

  return (
    <div className="w-screen h-screen relative">
      {type === "success" ? (
        <div className="success-notification w-[482px] absolute top-[92px] right-[50px] flex justify-between items-start p-[10px] rounded-[8px]">
          <div className="flex gap-[8px] items-start">
            <SuccessIcon />
            <div className="flex flex-col">
              <p className="small !font-medium text-[#184E44]">{msg}</p>
              <p className="small text-[#666D80]">{msgInfo}</p>
            </div>
          </div>

          <button
            onClick={() => setModalActive(false)}
            className="flex justify-center items-center text-[#666D80] hover:text-secondary_red-100"
          >
            <CancelIcon />
          </button>
        </div>
      ) : null}
    </div>
  );
}
