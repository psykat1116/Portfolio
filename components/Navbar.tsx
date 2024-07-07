"use client";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import Topbar from "@/components/Topbar";
import Text from "@/components/Text";

const Navbar = () => {
  const NavRef = useRef(null);
  const [open, setOpen] = useState(false);

  useOnClickOutside(NavRef, () => {
    setOpen(false);
  });

  return (
    <>
      <nav
        className={`absolute w-full flex flex-col items-start overflow-hidden`}
        ref={NavRef}
      >
        <div
          className={`w-full bg-lightprimary h-screen text-[#010101] ${
            open ? "translate-y-0" : "-translate-y-[100vh]"
          } transition-all duration-700 flex flex-col items-center justify-start ease-in-out z-[5] gap-5 pb-5`}
        >
          <Topbar open={open} setOpen={setOpen} isNavOpen />
          <div className="flex items-center text-7xl flex-col justify-between gap-4 w-full">
            <Text text="Experience" href="#experience" />
            <Text text="Project" href="#project" />
            <Text text="Profile" href="#profile" />
            <Text text="Achievement" href="#achievement" />
            <Text text="Tech Skill" href="#techskill" />
            <Text text="Contact Me" href="#contact" />
          </div>
        </div>
      </nav>
      <Topbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
