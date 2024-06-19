"use client";
import React, { useState, useRef } from "react";
import ExternalLink from "./ExternalLink";
import { useOnClickOutside } from "usehooks-ts";
import Topbar from "./Topbar";
import Text from "./Text";

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
          className={`w-full bg-lightprimary h-[80vh] text-[#010101] ${
            open ? "translate-y-0" : "-translate-y-[80vh]"
          } transition-all duration-700 flex flex-col items-center justify-start ease-in-out z-[5] gap-5`}
        >
          <Topbar open={open} setOpen={setOpen} isNavOpen />
          <div className="flex items-center text-7xl flex-col justify-between gap-6 w-full">
            <Text text="About" />
            <Text text="Project" />
            <Text text="Experience" />
            <Text text="Contact" />
          </div>
          <ExternalLink />
        </div>
      </nav>
      <Topbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
