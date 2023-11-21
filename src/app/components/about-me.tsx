"use client";
import { User } from "@prisma/client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { FaJs, FaReact, FaVuejs } from "react-icons/fa";

export const AboutMe = ({ user }: { user: User | null }) => {
  const points = user?.description!.split(". ");
  return (
    <div className="flex flex-wrap items-center p-8" id="about-me">
      <div className="mx-auto hidden lg:block lg:w-1/2 ">
        <DotLottiePlayer src="/images/lotties/coder2.lottie" loop autoplay />
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
        <ul className="my-4 flex flex-wrap justify-between">
          <li className="p-3 text-center transition hover:animate-ping">
            <FaReact className="mx-auto text-4xl" />
            <span className="pt-3">React</span>
          </li>
          <li className="p-3 text-center hover:animate-bounce">
            <FaVuejs className="mx-auto text-4xl" />
            <span className="pt-3">Vue</span>
          </li>
          <li className="p-3 text-center">
            <FaJs className="mx-auto text-4xl transition hover:animate-bounce" />
            <span className="pt-3">JavaScript</span>
          </li>
        </ul>
      </div>
      <div className="visible mx-auto lg:hidden lg:w-1/2 ">
        <DotLottiePlayer src="/images/lotties/coder2.lottie" loop autoplay />
      </div>
    </div>
  );
};
