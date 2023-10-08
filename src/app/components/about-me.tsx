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
import { ReactNode } from "react";
config.autoAddCss = false;

library.add(fas, far, fab);

export const AboutMe = ({
  user,
  skills,
}: {
  user: User | null;
  skills: Skill[];
}) => {
  const points = user?.description!.split(". ");

  return (
    <div className=" container mx-auto flex items-center">
      <div className="w-1/2">
        <Lottie animationData={coder2} loop />
      </div>
      <div className="w-1/2">
        <h2 className="text-6xl">A bit about me</h2>
        <ul className="list-disc text-xl my-4">
          {!points ? (
            <li>Nothing</li>
          ) : (
            points.map((point, index) => (
              <li key={`point-${index}`}>{point}</li>
            ))
          )}
        </ul>
        <div className="my-4 flex flex-wrap justify-between">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="flex flex-col items-center px-3 transition hover:text-purple-600"
              >
                <FontAwesomeIcon
                  className="text-4xl"
                  icon={`${skill.iconBrand} ${skill.iconName}` as IconProp}
                />
                <div className="pt-3">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
