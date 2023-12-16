"use client";
import { User } from "@prisma/client";
import { DotLottiePlayer } from "@dotlottie/react-player";

export const AboutMe = ({ user }: { user: User | null }) => {
  const points = user?.description!.split(". ");
  return (
    <div className="flex flex-wrap items-center p-8" id="about-me">
      <div className="mx-auto hidden lg:block lg:w-1/3 ">
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
      </div>
      <div className="visible mx-auto lg:hidden lg:w-1/2 ">
        <DotLottiePlayer src="/images/lotties/coder2.lottie" loop autoplay />
      </div>
    </div>
  );
};
