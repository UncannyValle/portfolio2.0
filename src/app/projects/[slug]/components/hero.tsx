"use client";
import { motion } from "framer-motion";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const Hero = ({ project }: { project: Project | null }) => {
  return (
    <motion.div
      className="min-h-full"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        type: "spring",
      }}
    >
      <h1 className="text-center text-2xl font-semibold md:text-8xl">
        {project?.title}
      </h1>
      <Image
        src={`/images/projects/${project?.slug}/main.png`}
        alt="project picture"
        className="drop-shadow-l mx-auto my-8 h-auto w-auto"
        height={1000}
        width={1200}
        priority
      />
      <div className="mx-auto my-8 w-full lg:w-3/4">
        <div className="flex flex-wrap justify-evenly">
          {project?.github ? (
            <Link
              href={project.github}
              className="text-lg text-purple-600 underline dark:text-purple-300 md:text-xl"
              target="_blank"
              rel="noreferrer noopener"
            >
              Check the Repo
              <FaGithub className="px-2" />
            </Link>
          ) : (
            <p className="text-lg text-purple-600 dark:text-purple-300 md:text-xl">
              Private Repo
              <FaGithub className="px-2" />
            </p>
          )}
          {project?.link ? (
            <Link
              href={project?.link}
              className="text-lg text-purple-600 underline dark:text-purple-300 md:text-xl"
              target="_blank"
              rel="noreferrer noopener"
            >
              Project Link <FaExternalLinkAlt className="px-2" />
            </Link>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};
