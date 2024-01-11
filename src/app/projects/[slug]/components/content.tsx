"use client";

import { Project } from "@prisma/client";
import { once } from "events";
import { motion } from "framer-motion";

type ContentProps = {
  title: string;
  projectContent: string | null | undefined;
  direction: "left" | "right";
};

export const Content = ({ title, projectContent, direction }: ContentProps) => {
  const animationDirection = direction === "left" ? -100 : 100;

  return (
    <motion.div
      className="my-8 "
      initial={{ opacity: 0, x: animationDirection }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.5,
        delay: .2,
        type: "spring",
      }}
      viewport={{ once: true }}
    >
      <h2 className=" text-4xl uppercase">{title}:</h2>
      <hr className="my-8 h-1 border-0 bg-slate-800" />
      <p className="lg:text-2xl">{projectContent}</p>
      <hr className="my-8 h-1 border-0 bg-slate-800" />
    </motion.div>
  );
};
