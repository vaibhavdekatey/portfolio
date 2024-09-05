import React from "react";
import me from "../assets/me.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      id="hero"
      className="min-h-[800px] w-screen bg-primary flex flex-col items-center  "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { ease: "easeOut", duration: 0.5, delay: 0.1 },
        }}
        viewport={{ once: false, amount: 0.1 }}
        className="lg:mx-[24vw] md:mx-[18vw] sm:mx-[16vw] md:mt-44 mb-64"
      >
        <div className="flex lg:flex-row-reverse sm:flex-col-reverse">
          <div className="flex flex-col lg:mr-28 md:mr-0 ">
            <div className="  text-txt_primary flex flex-row items-end align-text-bottom text-2xl font-robotoMono mb-1 border-slate-700 mr-7 self">
              <p className="mb-[2px]">01.</p>
              <p className="text-slate-300 text-4xl px-3 font-poppins font-bold mt-[1px] flex">
                About Me
              </p>
              <div className="border-b-2 border-slate-600 ml-2 self-center w-[16vw] mt-1" />
            </div>
            <div className="flex lg:flex-row-reverse sm:flex-col ">
              <div className="flex items-end">
                <img
                  src={me}
                  className="object-cover w-[30vw] rounded-2xl sm:my-6 hero"
                />
              </div>
              <div className="mr-28 mt-5 md:mt-0 font-outfit font-light">
                <p className="text-gray-300  text-xl md:mt-4">
                  Hello! I'm Vaibhav Dekatey, from Nagpur also known as the
                  Orange City of India.
                </p>
                <p className="text-gray-300 text-xl mt-4">
                  Experience in blending the art of design with skill of
                  programming with strong organizational skills, and meticulous
                  attention to detail.
                </p>

                <p className="text-gray-300 text-xl mt-4 ">
                  Pursued my Bachelors from
                  <a
                    className="mx-3 text-txt_primary hover:text-txt_secondary transition ease-in-out"
                    href="http://www.dypiu.ac.in"
                    target="_blank"
                  >
                    DYPIU, Pune
                  </a>
                  in Computer Science and Engineering.
                </p>

                <p className=" text-gray-200 mt-4 text-xl">
                  Here are a few of the other activities that I love to do!
                </p>
                <div className="w-64 mt-5">
                  <ul className="text-txt_primary text-sm font-robotoMono list-disc list-inside mt-2 grid grid-cols-2 ">
                    <li>Coding</li>
                    <li>Illustration</li>
                    <li>Gaming</li>
                    <li>Painting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
