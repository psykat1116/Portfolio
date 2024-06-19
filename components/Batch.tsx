import React from "react";
import { IconType } from "react-icons";

interface BatchProps {
  text: string;
  icon: IconType;
}

const Batch: React.FC<BatchProps> = ({ text, icon: Icon }) => {
  return (
    <div className="py-1 px-2 flex items-center text-white bg-redcolor tracking-wider text-lg rounded-[4px]">
      <Icon className="mr-3 h-5 w-5" />
      {text}
    </div>
  );
};

export default Batch;
