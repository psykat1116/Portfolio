import React from "react";
import { PiHexagonBold } from "react-icons/pi";

interface SeperatorProps {
  className?: string;
}

const Seperator: React.FC<SeperatorProps> = ({ className }) => {
  return (
    <div className="flex items-center h-auto mx-5 text-lightprimary">
      <PiHexagonBold className="h-6 w-6 rotate-[30deg] -mr-0.5" />
      <div className={`w-full h-[3px] bg-lightprimary ${className}`} />
      <PiHexagonBold className="h-6 w-6 rotate-[30deg] -ml-0.5" />
    </div>
  );
};

export default Seperator;
