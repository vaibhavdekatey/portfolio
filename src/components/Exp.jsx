import React, { useState } from "react";
import experience from "./Experience";
import { motion } from "framer-motion";

function Exp() {
  const [active, setActive] = useState(0);
  // const activeExp = experience.find((work) => work.id === active);

  return (
    <>
      <div
        id="Exp"
        className="min-h-[700px] w-screen bg-primary flex flex-col items-center "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 0.5, delay: 0.1 },
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="mx-[24vw] md:mx-[18vw] mt-16 mb-56 w-[55vw] flex justify-center"
        >
          <div className="flex flex-col md:mr-0 lg:mr-28">
            <div className="  text-txt_primary flex flex-row items-end align-text-bottom text-2xl font-robotoMono mb-8 border-slate-700 mr-7 ">
              <p className="mb-[2px]">02.</p>
              <p className="text-slate-300 lg:text-4xl md:px-3 font-poppins font-bold mt-[1px] md:text-2xl flex">
                Where I've Worked
              </p>
              <div className="border-b-2 border-slate-600 ml-2 self-center w-[16vw] mt-1" />
            </div>
            <div className="flex lg:flex-row sm:flex-col">
              <div className="flex sm:flex-row md:flex-col sm:mb-8">
                {experience.map((work, index) => (
                  <p
                    key={work.id}
                    onClick={() => setActive(index)}
                    className={`${
                      active === index
                        ? `text-txt_primary border-txt_primary md:border-l-2 md:border-b-0 sm:border-b-2 transition ease-in`
                        : `text-slate-400 border-slate-500 md:border-l-2 md:border-b-0 sm:border-b-2`
                    } md:mr-8 sm:mr-1 font-robotoMono text-sm hover:text-txt_primary md:hover:border-l-2 md:hover:border-b-0 sm:w-[140px] md:w-[180px] hover:border-txt_primary hover:bg-txt_primary/10 h-[44px] items-center justify-center flex transition ease-in`}
                  >
                    {work.where}
                  </p>
                ))}
              </div>
              <div className="flex-col flex text-xl text-slate-400 transition-opacity opacity-100 duration-700 ease-in">
                <p className="text-xl text-slate-400 font-poppins sm:flex-col font-medium flex lg:flex-row">
                  {experience[active].title}
                  <p className="lg:mx-2 md:mx-0 text-txt_primary ">
                    @{experience[active].where}
                  </p>
                </p>

                <p className="text-sm font-robotoMono mt-2 mb-6">
                  {experience[active].yr}
                </p>
                <ul>
                  {experience[active].resp.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-sm font-inconsolata list-disc list-outside ml-5 mb-4"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Exp;
