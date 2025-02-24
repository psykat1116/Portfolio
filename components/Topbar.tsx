import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Text from "./Text";

interface TopbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isNavOpen?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ open, setOpen, isNavOpen }) => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <nav className="relative px-4 mt-4 w-full flex items-center justify-between transiton-all">
      <Link href={"/"} className="flex items-center justify-center">
        <Image
          src={!open ? "/LogoLight.svg" : "/LogoDark.svg"}
          alt="logo"
          height={isMedium ? 15 : 25}
          width={isMedium ? 15 : 25}
          className="object-cover cursor-pointer"
        />
      </Link>
      <div className="flex items-center text-7xl flex-col justify-between gap-4 w-full">
        <Text text="Experience" href="#experience" />
        <Text text="Project" href="#project" />
        <Text text="Profile" href="#profile" />
        <Text text="Achievement" href="#achievement" />
        <Text text="Tech Skill" href="#techskill" />
        <Text text="Contact Me" href="#contact" />
      </div>
      <Link
        className="bg-redcolor text-xl px-3 py-1 rounded-sm text-lightprimary flex items-center justify-center cursor-pointer"
        href="https://maroon-ilysa-10.tiiny.site"
        target="_blank"
      >
        Resume
      </Link>
    </nav>
  );
};

export default Topbar;
