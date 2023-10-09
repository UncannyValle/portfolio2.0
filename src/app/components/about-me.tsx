"use client";

import { Skill, User } from "@prisma/client";
import Lottie from "lottie-react";
import coder2 from "../../../public/images/lotties/coder2.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, config } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

library.add(fab, faGem);

export const AboutMe = ({
  user,
  skills,
}: {
  user: User | null;
  skills: Skill[];
}) => {
  const points = user?.description!.split(". ");

  return (
    <div className="flex flex-wrap items-center p-8" id="about-me">
      <div className="mx-auto hidden lg:block lg:w-1/2 ">
        <Lottie animationData={coder2} loop />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-4xl lg:text-6xl">A bit about me</h2>
        <ul className="my-4 text-xl">
          {!points ? (
            <li>Nothing</li>
          ) : (
            points.map((point, index) => (
              <li key={`point-${index}`} className="py-2">
                🚀 {point}
              </li>
            ))
          )}
        </ul>
        <div className="my-4 flex flex-wrap justify-between">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="flex flex-col items-center p-3 transition hover:text-purple-600"
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
      <div className="visible mx-auto lg:hidden lg:w-1/2 ">
        <Lottie animationData={coder2} loop />
      </div>
    </div>
  );
};
