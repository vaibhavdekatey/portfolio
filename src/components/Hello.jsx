import { motion } from "framer-motion";
import React from "react";

function Hello() {
  return (
    <>
      <div
        id="hello"
        className=" h-[950px]  w-screen bg-gradient-to-b from-secondary to-primary flex flex-col "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 0.5, delay: 0.1 },
          }}
          viewport={{ once: false, amount: 0.1 }}
          className=" lg:mx-[24vw] md:mx-[18vw] sm:mx-[16vw] sm:mt-36 md:mt-48 mb-52"
        >
          <div>
            <motion.h6
              initial={{ opacity: 0.5, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeIn", duration: 0.2, delay: 0.1 },
              }}
              viewport={{ once: false, amount: 0.1 }}
              className="text-txt_primary font-inconsolata mb-2 hover:text-gray-300 hover:italic transition-all ease-out "
            >
              Hello, my name is
            </motion.h6>
            <div className="  text-slate-400 lg:text-7xl md:text-6xl sm:text-4xl mb-5  font-poppins font-bold leading-tight sm:leading-tight ">
              Vaibhav Dekatey
              <p className="  text-gray-500 lg:text-7xl md:text-6xl sm:text-2xl sm:mt-3 mb-12 md:my-4 leading-tight font-bold">
                Front-End Developer & <br />
                Graphics Designer!
              </p>
            </div>

            <p className="text-slate-400 font-outfit font-light md:text-xl mb-4 lg:mt-20 lg:mr-[40vh] md:mr-0 sm:text-sm">
              I'm a Computer Science and Engineering Graduate. Primarily
              interested in Front-End Development and Graphics Design.
            </p>
            <p className="text-slate-400 font-outfit font-light md:text-xl mb-12 lg:mr-[40vh] md:mr-0 sm:text-sm">
              I enjoy learning new skills and implementing them in real life!
            </p>

            <motion.a
              initial={{ opacity: 0.5, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeIn", duration: 0.2, delay: 0.2 },
              }}
              viewport={{ once: false, amount: 0.1 }}
              className="flex items-center justify-center border-[1px] border-txt_primary font-inconsolata w-40 h-14 px-3 text- py-1 rounded-md text-txt_primary hover:bg-txt_primary/20 transition ease-in"
              href="mailto:vaibhav2001dekatey@gmail.com"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Hello;
