import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Words } from "@/utils/Words";
import ShuffleButton from "@/components/ShuffleButton";

interface TopbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isNavOpen?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ open, setOpen, isNavOpen }) => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleStart = () => {
    setIsLoaded(true);
  };

  const handleEnd = () => {
    setIsLoaded(false);
  };

  return (
    <nav className="relative px-4 pt-4 w-full flex items-center justify-between transiton-all gap-5">
      <Link href={"/"} className="h-10 w-10 flex items-center justify-center">
        <Image
          src={!open ? "/LogoLight.svg" : "/LogoDark.svg"}
          alt="logo"
          height={isMedium ? 15 : 25}
          width={isMedium ? 15 : 25}
          className="object-cover cursor-pointer"
        />
      </Link>
      {!isNavOpen && (
        <div
          className="text-xl sm:text-2xl md:text-3xl tracking-wider font-normal text-lightprimary uppercase h-7 sm:h-8 md:h-9 flex items-center lg:items-start gap-1 overflow-hidden group transition-all duration-500 ease-in-out"
          onMouseEnter={handleStart}
          onMouseLeave={handleEnd}
        >
          <ol
            className={`transition-all group-hover:text-redcolor hidden sm:block select-none duration-1000 ease-in-out ${
              isLoaded &&
              "-translate-y-[73.5rem] sm:-translate-y-[84rem] md:-translate-y-[94.5rem]"
            }`}
          >
            {Words.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ol>
          <p className="text-redcolor select-none hidden sm:block">Samanta</p>
          <Link
            className="my-1.5 ml-3 px-2 bg-redcolor rounded-sm text-base flex items-center justify-center cursor-pointer"
            href="https://maroon-ilysa-10.tiiny.site"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      )}
      <ShuffleButton open={open} setOpen={setOpen} isNavOpen={isNavOpen} />
    </nav>
  );
};

export default Topbar;
