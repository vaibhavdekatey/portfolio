import React from "react";
import ProjectCards from "./ProjectCards";
import projectList from "./ProjectList";
import OtherProjects from "./OtherProjects";
import notableProjects from "./others";
import ProjectCardsEven from "./ProjectCardsEven";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <div
        id="Projects"
        className=" w-screen bg-gradient-to-b from-primary to-tertiary flex flex-col items-center "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 0.5, delay: 0.1 },
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="mx-[24vw] mt-44 mb-64 md:w-[55vw] sm:w-[64vw] flex justify-center"
        >
          <div className="flex flex-col sm:items-center">
            <div className="  text-txt_primary flex flex-row items-end align-text-bottom text-2xl font-robotoMono mb-16 border-slate-700 md:mr-7 ">
              <p className="md:mb-[2px] ">03.</p>
              <p className="text-slate-300 md:text-4xl sm:text-xl px-3 font-poppins font-bold mt-[1px] flex">
                Some Things I've Built
              </p>
              <div className="border-b-2 border-slate-600 ml-2 self-center w-[16vw] mt-1" />
            </div>
            <div className="sm:flex-col sm:justify-center lg:mx-36">
              {projectList.map((project) =>
                project.id % 2 === 0 ? (
                  <ProjectCardsEven
                    key={project.id}
                    img_src={project.img_src}
                    title={project.projectTitle}
                    projectContext={project.projectContext}
                    github={project.gitHub}
                    link={project.link}
                  />
                ) : (
                  <ProjectCards
                    key={project.id}
                    img_src={project.img_src}
                    title={project.projectTitle}
                    projectContext={project.projectContext}
                    github={project.gitHub}
                    link={project.link}
                  />
                )
              )}
            </div>

            <div className="flex-col flex text-txt_primary justify-center items-center mt-10">
              <div>
                <p className="font-inconsolata">Other Noteworthy Projects</p>
              </div>
              <div className="flex lg:flex-row sm:flex-col">
                {notableProjects.map((others) => (
                  <OtherProjects
                    key={others.id}
                    title={others.projectTitle}
                    context={others.projectContext}
                    github={others.gitHub}
                    link={others.link}
                    stack={others.stack}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
