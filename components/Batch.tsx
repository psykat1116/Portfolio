import React from "react";

interface BatchProps {
  text?: string;
}

const Batch: React.FC<BatchProps> = ({ text }) => {
  return (
    <div className="p-1 flex items-center justify-center bg-redcolor tracking-wider text-xl rounded-[4px]">
      {text}
    </div>
  );
};

export default Batch;
