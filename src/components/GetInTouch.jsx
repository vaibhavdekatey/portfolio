import { motion } from "framer-motion";
import React from "react";

function GetInTouch() {
  return (
    <div
      id="GetInTouch"
      className="sm:min-h-[550px] md:min-h-[600px] w-screen bg-tertiary flex flex-col items-center "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { ease: "easeOut", duration: 0.5, delay: 0.1 },
        }}
        viewport={{ once: false, amount: 0.1 }}
        className="md:mx-[24vw] md:mt-44 md:mb-64 sm:w-[70vw] md:w-[55vw] flex justify-center"
      >
        <div className="flex flex-col">
          <div className="  text-txt_primary flex flex-col items-center align-text-bottom text-2xl font-robotoMono mb-8 border-slate-700  ">
            <p className="mb-[28px] text-base">04. What's Next?</p>
            <p className="text-slate-300 sm:text-4xl md:text-5xl px-3 font-poppins font-bold mb-[24px] flex text-center">
              Get In Touch
            </p>
            <p className="text-slate-50 text-center font-poppins font-extralight text-base md:w-[620px] mb-[36px]">
              My inbox is always open. Whether you have a question or just want
              to say hello, I'll try my best to get back to you! Feel free to
              mail me.
            </p>
            <a
              className="flex items-center text-base justify-center border-[1px] border-txt_primary font-inconsolata w-40 h-14 px-3 text- py-1 rounded-md text-txt_primary hover:bg-txt_primary/20 transition ease-in"
              href="mailto:vaibhav2001dekatey@gmail.com"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GetInTouch;
