"use client";
import Link from "next/link";
import Image from "next/image";
import Text from "@/components/Text";
import { useMediaQuery } from "usehooks-ts";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <nav className="relative px-4 mt-4 w-full flex items-center justify-between transiton-all">
      <Link href={"/"} className="flex items-center justify-center">
        <Image
          src={"/LogoLight.svg"}
          alt="logo"
          height={isMedium ? 20 : 25}
          width={isMedium ? 20 : 25}
          className="object-cover cursor-pointer"
        />
      </Link>
      <div className="md:flex hidden items-center text-2xl justify-between gap-3 ml-10">
        <Text text="Experience" href="#experience" />
        <Text text="Project" href="#project" />
        <Text text="Profile" href="#profile" />
        <Text text="Achievement" href="#achievement" />
        <Text text="Tech Skill" href="#techskill" />
        <Text text="Contact Me" href="#contact" />
      </div>
      <Link
        className="text-xl scale-90 md:scale-100 px-3 py-0.5 bg-redcolor rounded-sm text-lightprimary flex items-center justify-center cursor-pointer hover:bg-redcolor/85 group"
        href="https://maroon-ilysa-10.tiiny.site"
        target="_blank"
      >
        Resume{" "}
        <FiArrowUpRight
          className="mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          size={20}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
