"use client";

import { Skill, User } from "@prisma/client";
import Lottie from "lottie-react";
import coder2 from "../../../public/images/lotties/coder2.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, config } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

library.add(fas, far, fab);

export const AboutMe = ({
  user,
  skills,
}: {
  user: User | null;
  skills: Skill[];
}) => {
  return (
    <div className=" mx-auto flex items-center">
      <div className="w-1/2">
        <Lottie animationData={coder2} loop />
      </div>
      <div className="w-1/2">
        <h2 className="text-6xl">A bit about me</h2>
        <p className="text-2xl text-gray-500">
          Experienced Full Stack Software Engineer specializing in using React,
          Vue, Laravel, and Next.js.
        </p>
        <div className="flex my-4">
          {skills.map((skill) => {
            return (
              <div key={skill.id} className="w-16 text-center mr-4">
                <FontAwesomeIcon
                  className="text-6xl"
                  icon={`${skill.iconBrand} ${skill.iconName}` as IconProp}
                />
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
