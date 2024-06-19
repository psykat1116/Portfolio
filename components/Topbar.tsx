import React from "react";
import ShuffleButton from "./ShuffleButton";
import Link from "next/link";
import Image from "next/image";
import Text from "./Text";
import { useMediaQuery } from "usehooks-ts";

interface TopbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isNavOpen?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ open, setOpen, isNavOpen }) => {
  const isMedium = useMediaQuery("(max-width: 768px)");
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
        <div className="text-xl sm:text-2xl md:text-3xl tracking-wider font-normal text-lightprimary delay-300 uppercase">
          <Text size={10} text="Saikat Samanta" />
        </div>
      )}
      <ShuffleButton open={open} setOpen={setOpen} isNavOpen={isNavOpen} />
    </nav>
  );
};

export default Topbar;
