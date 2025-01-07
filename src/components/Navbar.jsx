import React, { useEffect, useState } from "react";
import vLogo from "../assets/logo.png";
import resume from "../assets/vaibhav_dekatey_2025.pdf";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: "01", text: "About", href: "#hero" },
    { id: "02", text: "Experience", href: "#Exp" },
    { id: "03", text: "Projects", href: "#Projects" },
    { id: "04", text: "Contact", href: "#GetInTouch" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // on scrolling down and has scrolled more than 50px, hide the navbar
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
        // on scrolling up, show the navbar
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
        className={`z-50 bg-secondary/50  drop-shadow-xl sm:h-20 md:h-24 flex items-center fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="  flex flex-row justify-between align-middle w-screen lg:mx-[240px] sm:px-4">
          <div className="flex justify-center items-center">
            <a href="#" className=" sm:ml-2 md:ml-0">
              <img
                src={vLogo}
                className="md:min-w-14 md:max-w-14 sm:min-w-10 sm:max-w-10"
              />
            </a>
          </div>
          <div className="font-inconsolata text-sm flex md:flex-row  justify-center items-center text-slate-100">
            <div className="sm:hidden md:flex">
              {navItems.map((items) => (
                <a
                  key={items.id}
                  className="m-4 text-txt_primary flex flex-row"
                  href={items.href}
                >
                  {items.id}.
                  <p className="text-slate-300 hover:text-txt_primary hover:-translate-y-[1px] transition ease-in ml-1">
                    {items.text}
                  </p>
                </a>
              ))}
            </div>

            <div className="sm:flex sm:flex-row">
              <div className="sm:flex flex-row ">
                <a
                  href={resume}
                  target="_blank"
                  className="border-[1px] border-txt_primary font-inconsolata w-fit px-4 h-10 self-center flex items-center text-sm rounded-[5px] text-txt_primary hover:bg-txt_primary/20 transition ease-in"
                >
                  Resume
                </a>
                <div className="flex md:hidden sm:flex-col justify-end items-center flex-wrap transition-transform duration-300 ease-in-out">
                  <button onClick={handleNav}>
                    {nav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-10 ml-3 transform rotate-90 transition-transform duration-300 ease-in-out"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-10 ml-3 transition-transform duration-300 ease-in-out"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </button>
                  {/* Mobile Menu */}
                  {nav && (
                    <div
                      className={`absolute top-16 right-0 bg-secondary w-[240px] p-4 rounded-md shadow-lg md:hidden transition-transform duration-500 transform ease-out ${
                        nav
                          ? "translate-y-8 opacity-100"
                          : "-translate-y-full opacity-0"
                      } `}
                    >
                      {navItems.map((items) => (
                        <a
                          key={items.id}
                          className="flex m-4 text-txt_primary"
                          href={items.href}
                        >
                          {items.id}.
                          <p className="text-slate-300 hover:text-txt_primary hover:-translate-y-[1px] transition ease-in ml-1">
                            {items.text}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
