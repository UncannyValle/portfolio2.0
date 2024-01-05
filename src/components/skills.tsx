"use client";
import { Skill } from "@prisma/client";
import { FaBolt } from "react-icons/fa6";
import { motion } from "framer-motion";
import DotLottie from "./third-party/dot-lottie-player";

export const Skills = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="container overflow-hidden p-8 pt-12" id="skills">
      <h1 className="mb-12 text-center text-4xl  lg:text-6xl">
        Skills
      </h1>
      <motion.div
        initial={{ x: 100, opacity: 0, width: "100%" }}
        whileInView={{ x: 0, opacity: 1, width: "100%" }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 2 }}
        className="flex flex-wrap justify-evenly"
      >
        <table className="w-full table-auto lg:w-1/3">
          <colgroup>
            <col className="w-1/3 " />
            <col className="" />
          </colgroup>
          <thead>
            <tr className="text-left text-xl">
              <th className="">Skill</th>
              <th className="">Years of Experience</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => {
              return (
                <tr key={skill.id}>
                  <td>{skill.name}</td>
                  <td className="text-purple-700">
                    {[...Array(skill.experience)].map((_, index) => {
                      return (
                        <FaBolt key={index} className="inline-block text-3xl" />
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <DotLottie src="/images/lotties/coder.lottie" />
      </motion.div>
    </div>
  );
};
