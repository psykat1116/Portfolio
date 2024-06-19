import React from "react";
import { PiHexagonBold } from "react-icons/pi";

interface ShuffleButtonProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isNavOpen?: boolean;
}

const ShuffleButton: React.FC<ShuffleButtonProps> = ({ open, setOpen }) => {
  return (
    <div
      className={`flex items-center gap-0.5 cursor-pointer scale-50 sm:scale-75 md:scale-100 text-center`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-col items-center">
        <PiHexagonBold
          className={`h-4 w-4 font-semibold transition duration-300 ease-in-out ${
            open
              ? "text-[#010101] rotate-[30deg] -mt-0.5 mr-0.5"
              : "text-[#e2e2e7] -mt-0 mr-0"
          }`}
        />
        <div
          className={`w-0.5 transition-all duration-500 delay-[500] -mt-0.5 ${
            open ? "bg-[#010101] h-0" : "bg-[#e2e2e7] h-[40px]"
          }`}
        ></div>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`w-0.5 transition-all duration-500 delay-[500] ${
            open
              ? "bg-[#010101] rotate-90 h-[12px]"
              : "bg-[#e2e2e7] -rotate-0 h-[25px]"
          }`}
        ></div>
      </div>
      <div className="flex flex-col items-center mt-1">
        <div
          className={`w-0.5 transition-all duration-500 delay-[500] -mb-0.5 ${
            open ? "bg-[#010101] h-0" : "bg-[#e2e2e7] h-[40px]"
          }`}
        ></div>
        <PiHexagonBold
          className={`h-4 w-4 font-semibold transition duration-300 ease-in-out ${
            open
              ? "text-[#010101] rotate-[30deg] -mt-0.5 ml-0.5"
              : "text-[#e2e2e7] -mt-0 ml-0"
          }`}
        />
      </div>
    </div>
  );
};

export default ShuffleButton;
