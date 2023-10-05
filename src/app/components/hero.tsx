"use client";
import emoji from "react-easy-emoji";
import Lottie from "lottie-react";
import happyHacker from "@/Images/lotties/happy-hacker.json";

export const Hero = () => {
  return (
    <div className="box-border flex h-full items-center">
      <div className="w-1/2">
        <h1 className="inline text-7xl">
          Hi, Everyone! I&apos;m Julian{" "}
          {/* <div className="inline-block animate-bounce">{emoji("👋🏼")}</div> */}
        </h1>
        <p className="py-8 text-2xl w-2/3">
          Experienced Full Stack Software Engineer specializing in using
          React, Vue, Laravel, and Next.js. I offer services such as landing
          site creation, blog development, and e-commerce solutions. With me,
          you can expect websites that not only function flawlessly but also
          showcase stunning aesthetics.
        </p>
      </div>
      <div className=" relative w-1/2">
        <Lottie animationData={happyHacker} loop />
      </div>
    </div>
  );
};
