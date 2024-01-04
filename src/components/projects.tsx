"use client";
import Image from "next/image";
import { Project, Skill } from "@prisma/client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface ProjectWithSkills extends Project {
  skills: Skill[];
}

export const Projects = ({ projects }: { projects: ProjectWithSkills[] }) => {
  return (
    <div className="w-full p-8 pt-20" id="projects">
      <h1 className="mb-12 text-center text-4xl lg:text-6xl">Projects</h1>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.a
            key={project.slug}
            className="mb-16 flex w-full flex-col items-center justify-evenly rounded-2xl border-2 border-solid border-slate-400 p-4   hover:border-0 hover:shadow-2xl dark:shadow-purple-400 md:flex-row"
            href={`/projects/${project.slug}`}
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >
            <div className="relative mx-auto h-[150px] w-[250px] md:mx-0 lg:h-[400px] lg:w-[500px]">
              <Image
                src={`/images/projects/${project.slug}/main.png`}
                alt={project.slug}
                fill
                sizes="(min-width: 1024px) 500px, 150px"
                className="object-cover p-4"
              />
            </div>

            <div className="md:w-1/3">
              <h2 className="font-bold md:text-4xl">{project.title}</h2>
              <div>
                <span className="font-bold">Skills:</span>
                {project.skills.map((skill, index) => (
                  <span key={`${skill.id}`}>
                    {" "}
                    {skill.name}{" "}
                    {index === project.skills.length - 1 ? "" : "|"}
                  </span>
                ))}
              </div>
              <p className="line-clamp-3 pt-8">{project.summary}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
