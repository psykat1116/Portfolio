import React from "react";
import { IconType } from "react-icons";

interface BatchProps {
  text: string;
  icon: IconType;
  className?: string;
  iconClassName?: string;
}

const Batch: React.FC<BatchProps> = ({
  text,
  icon: Icon,
  className,
  iconClassName,
}) => {
  return (
    <div
      className={`py-1 px-2 flex items-center text-white bg-[#222650] tracking-wider text-lg rounded-[4px] ${className}`}
    >
      <Icon className={`mr-3 h-5 w-5 ${iconClassName}`} />
      {text}
    </div>
  );
};

export default Batch;
