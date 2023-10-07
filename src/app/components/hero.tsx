"use client";
import Lottie from "lottie-react";
import happyHacker from "@/images/lotties/coder.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { User } from "@prisma/client";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Hero = ({ user }: { user: User | null }) => {
  return (
    <div className="container mx-auto flex h-screen items-center">
      <div className="w-1/2">
        <h1 className="inline text-7xl">
          Hi, Everyone! I&apos;m
          <div className="inline-block animate-bounce"> Julian</div>
        </h1>
        <p className="w-2/3 py-8 text-2xl">
          Experienced Full Stack Software Engineer specializing in using React,
          Vue, Laravel, and Next.js.
        </p>
        <div>
          <a
            href={user?.github}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-4"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl hover:text-purple-500 "
            />
          </a>
          <a
            href={user?.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-4 "
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl hover:text-purple-500 "
            />
          </a>
          <a
            href={`mailto: ${user?.email}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-4"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-4xl hover:text-purple-500 "
            />
          </a>
        </div>
      </div>
      <div className="w-1/2 p-12">
        <Lottie animationData={happyHacker} loop />
      </div>
    </div>
  );
};
