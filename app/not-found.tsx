import Link from "next/link";

import CanvasText from "@/components/Canvas/CanvasText";

const NotFound = () => {
  return (
    <div className="w-full h-[96.5vh] rounded-xl bg-gradient-to-br from-[#171A37] to-[#010057] gap-3 flex justify-center items-center flex-col">
      <CanvasText />
      <h1 className="tracking-wider text-5xl text-lightprimary">
        The Page You Are Looking For Doesn&apos;t Exist
      </h1>
      <Link
        href="/"
        className="bg-redcolor flex items-center justify-center text-lightprimary p-2 text-2xl rounded-md tracking-wide"
      >
        Go Back To Homepage
      </Link>
    </div>
  );
};

export default NotFound;
