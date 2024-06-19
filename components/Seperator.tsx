import React from "react";

interface SeperatorProps {
  className?: string;
}

const Seperator: React.FC<SeperatorProps> = ({ className }) => {
  return (
    <div className="flex items-center h-auto mx-5">
      <div className="h-3 w-3 border-2 border-lightprimary rotate-45" />
      <div className={`w-full h-0.5 bg-lightprimary ${className}`} />
      <div className="h-3 w-3 border-2 border-lightprimary rotate-45" />
    </div>
  );
};

export default Seperator;
