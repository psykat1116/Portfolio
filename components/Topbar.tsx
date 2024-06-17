import React from "react";
import ShuffleButton from "./ShuffleButton";
import Link from "next/link";
import Image from "next/image";

interface TopbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isNavOpen?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ open, setOpen, isNavOpen }) => {
  return (
    <nav className="relative w-full pl-5 pr-8 pt-5 flex items-center justify-between transiton-all gap-5">
      <Link href={"/"} className="h-10 w-10 flex items-center justify-center">
        <Image
          src={!open ? "/LogoLight.svg" : "/LogoDark.svg"}
          alt="logo"
          height={25}
          width={25}
          className="object-cover cursor-pointer"
        />
      </Link>
      {!isNavOpen && (
        <div
          className={`text-3xl tracking-wider font-normal text-lightprimary delay-300 uppercase`}
        >
          Saikat Samanta
        </div>
      )}
      <ShuffleButton open={open} setOpen={setOpen} isNavOpen={isNavOpen} />
    </nav>
  );
};

export default Topbar;
