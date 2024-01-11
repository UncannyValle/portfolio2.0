"use client";
import Image from "next/image";
import { Project, Skill, Career } from "@prisma/client";
import { useAnimate, stagger, motion } from "framer-motion";

interface CareerWithAttr extends Career {
  associatedProjects: Project[];
  associatedSkills: Skill[];
}

export const Careers = ({ careers }: { careers: CareerWithAttr[] | [] }) => {
  const careerList = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const items = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 2 },
    },
    hidden: { opacity: 0, scale: 1.5 },
  };

  return (
    <div className="container overflow-hidden p-8 pt-20" id="careers">
      <h1 className="mb-12 text-center text-4xl lg:text-6xl">Careers</h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={careerList}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {careers.map((career) => {
          return (
            <motion.div
              key={career.id}
              className="mx-8 rounded-2xl border-2 border-solid border-slate-400 p-4 text-center dark:shadow-purple-400"
              variants={items}
            >
              <div className="relative mx-auto mb-2 h-[50px] w-[50px] rounded-full lg:h-[100px] lg:w-[100px]">
                <Image
                  src={`/images/careers/${career.name.toLowerCase()}.png`}
                  alt={career.name}
                  fill
                  sizes="(min-width: 1024px) 100px, 50px"
                  className="rounded-full object-cover"
                />
              </div>

              <h2 className="text-xl font-bold">{career.name}</h2>
              <div>
                {career.associatedProjects.length ? (
                  <span className="font-bold">Projects:</span>
                ) : null}

                {career.associatedProjects.map((project, index) => {
                  return (
                    <span key={`${project.id}`}>
                      {" "}
                      <a
                        href={`/projects/${project.slug}`}
                        className="transition-all hover:underline"
                      >
                        {project.slug.toUpperCase()}
                      </a>
                      {index === career.associatedProjects.length - 1
                        ? ""
                        : "|"}
                    </span>
                  );
                })}
              </div>
              <div>
                {career.associatedSkills.length ? (
                  <span className="font-bold">Skills:</span>
                ) : null}{" "}
                {career.associatedSkills.map((skill, index) => (
                  <span key={`${skill.id}`}>
                    {skill.name}{" "}
                    {index === career.associatedSkills.length - 1 ? "" : "|"}
                  </span>
                ))}
              </div>

              <p className="pt-4 text-sm">{career.summary}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
