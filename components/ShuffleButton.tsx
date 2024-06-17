import React from "react";

interface ShuffleButtonProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isNavOpen?: boolean;
}

const ShuffleButton: React.FC<ShuffleButtonProps> = ({
  open,
  setOpen,
}) => {
  return (
    <div
      className={`flex items-center gap-1.5 cursor-pointer scale-50 sm:scale-75 md:scale-100 text-center`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-col items-center">
        <div
          className={`h-2.5 w-2.5 rotate-45 border-2 ${
            open ? "border-[#010101]" : "border-[#e2e2e7]"
          }`}
        ></div>
        <div
          className={`w-0.5 transition-all duration-500 delay-[500] ${
            open ? "bg-[#010101] h-0" : "bg-[#e2e2e7] h-[40px]"
          }`}
        ></div>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`w-0.5 transition-all duration-500 delay-[500] ${
            open
              ? "bg-[#010101] rotate-90 h-[16px]"
              : "bg-[#e2e2e7] -rotate-0 h-[25px]"
          }`}
        ></div>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`w-0.5 transition-all duration-500 delay-[500] ${
            open ? "bg-[#010101] h-0" : "bg-[#e2e2e7] h-[40px]"
          }`}
        ></div>
        <div
          className={`h-2.5 w-2.5 rotate-45 border-2 ${
            open ? "border-[#010101]" : "border-[#e2e2e7]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ShuffleButton;
