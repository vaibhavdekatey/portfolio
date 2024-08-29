import React from "react";

function Mailto() {
  return (
    <div className="flex-row items-end flex fixed text-2xl font-robotoMono text-txt_primary  hover:text-txt_secondary  z-10 bg-transparent rotate-90 lg:translate-x-[83vw] md:translate-x-[64vw] -translate-y-[20vh] transition ease-in bottom-0">
      <a
        className="hover:-translate-x-2 transition ease-out"
        href="mailto:vaibhav2001dekatey@gmail.com"
      >
        vaibhav2001dekatey@gmail.com
      </a>
      <div className="border-slate-600 w-[10vh] border-b-2 ml-7 self-center mt-1" />
    </div>
  );
}

export default Mailto;
