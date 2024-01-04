"use client";
import { User } from "@prisma/client";
import DotLottie from "../components/third-party/dot-lottie-player";
import { motion } from "framer-motion";

export const AboutMe = ({ user }: { user: User | null }) => {
  const points = user?.description!.split(". ");
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 2 }}
      className="flex w-full flex-wrap items-center p-8 pt-20 mb-8"
      id="about-me"
    >
      <div className="mx-auto hidden lg:inline-block lg:w-1/3 ">
        <DotLottie src="/images/lotties/coder2.lottie" />
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
        <DotLottie src="/images/lotties/coder2.lottie" />
      </div>
    </motion.div>
  );
};
