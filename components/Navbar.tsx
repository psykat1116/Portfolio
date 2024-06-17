"use client";
import React, { useState, useRef } from "react";
import ExternalLink from "./ExternalLink";
import { useOnClickOutside } from "usehooks-ts";
import Topbar from "./Topbar";

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
          className={`w-full bg-[#e2e2e7] h-[80vh] text-[#010101] ${
            open ? "translate-y-0" : "-translate-y-[80vh]"
          } transition-all duration-700 flex flex-col items-center justify-start pl-0 pr-6 ease-in-out z-[5] gap-5`}
        >
          <Topbar open={open} setOpen={setOpen} isNavOpen />
          <div className="flex items-center text-7xl flex-col justify-between gap-6 w-full">
            <div className="uppercase cursor-pointer">About</div>
            <div className="uppercase cursor-pointer">Projects</div>
            <div className="uppercase cursor-pointer">Experience</div>
            <div className="uppercase cursor-pointer">Contact</div>
          </div>
          <ExternalLink />
        </div>
      </nav>
      <Topbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
