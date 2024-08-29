import React, { useEffect, useState } from "react";
import vLogo from "../assets/logo.png";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down and has scrolled more than 50px, hide the navbar
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
        // User is scrolling up, show the navbar
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <nav
        className={`bg-secondary/50  drop-shadow-xl h-24 flex items-center fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="  flex flex-row justify-between align-middle w-screen mx-10">
          <div className="flex justify-center items-center">
            <a href="#" className=" ">
              <img src={vLogo} className="w-14 shadow-2xl" />
            </a>
          </div>
          <div className="font-inconsolata text-sm flex flex-row justify-center items-center text-slate-100">
            <a className="m-4 text-txt_primary flex flex-row" href="#hero">
              01.
              <p className="text-slate-300 hover:text-txt_primary hover:-translate-y-[1px] transition ease-in ml-2">
                About
              </p>
            </a>
            <a className="m-4 text-txt_primary flex flex-row" href="#Exp">
              02.
              <p className="text-slate-300 hover:text-txt_primary transition ease-in ml-2 hover:-translate-y-[1px]">
                Experience
              </p>
            </a>
            <a className="m-4 text-txt_primary flex flex-row" href="#Projects">
              03.
              <p className="text-slate-300 hover:text-txt_primary transition ease-in ml-2 hover:-translate-y-[1px]">
                Projects
              </p>
            </a>
            <a
              className="m-4 text-txt_primary flex flex-row"
              href="#GetInTouch"
            >
              04.
              <p className="text-slate-300 hover:text-txt_primary transition ease-in ml-2 hover:-translate-y-[1px]">
                Contact
              </p>
            </a>

            <a
              href={resume}
              target="_blank"
              className="ml-2 border-[1px] border-txt_primary font-inconsolata w-fit px-4 py-[9px] text-sm rounded-[5px] text-txt_primary hover:bg-txt_primary/20 transition ease-in"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
