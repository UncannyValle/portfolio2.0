"use client";
import Lottie from "lottie-react";
import happyHacker from "@/Images/lotties/coder.json";

export const Hero = () => {
  return (
    <div className="box-border flex h-full items-center">
      <div className="w-1/2">
        <h1 className="inline text-7xl">
          Hi, Everyone! I&apos;m  
          <div className="inline-block animate-bounce"> Julian</div>
        </h1>
        <p className="w-2/3 py-8 text-2xl">
          Experienced Full Stack Software Engineer specializing in using React,
          Vue, Laravel, and Next.js.
        </p>
      </div>
      <div className=" relative w-1/2">
        <Lottie animationData={happyHacker} loop />
      </div>
    </div>
  );
};
