"use client";
import Lottie from "lottie-react";
import coder from "../../../public/images/lotties/coder.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { User } from "@prisma/client";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Hero = ({ user }: { user: User | null }) => {
  return (
    <div className="flex h-screen items-center">
      <div className="w-2/3">
        <h1 className="inline text-7xl">
          Hi, Everyone! I&apos;m Julian
          <div className="inline-block animate-bounce">👋🏼</div>
        </h1>
        <p className="w-3/4 py-8 text-2xl">{user?.headline!}</p>
        <div>
          <a
            href={user?.github!}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-7"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500"
            />
          </a>
          <a
            href={user?.linkedin!}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-7 "
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500"
            />
          </a>
          <a
            href={`mailto: ${user?.email!}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-7"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500"
            />
          </a>
        </div>
        <div className="my-8">
          <button
            type="button"
            data-modal-target="contact"
            data-modal-toggle="contact"
            className="mr-8 rounded-full bg-purple-500 px-8 py-4 uppercase text-white transition hover:scale-110 hover:bg-purple-800"
          >
            Contact Me
          </button>
          <Link
            href="https://docs.google.com/document/d/1YjUjr4fdC3wGaPPiZiWfG9pZkLwAHqXrooT2vvO-W44/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            type="button"
            className="rounded-full bg-purple-500 px-8 py-4 uppercase text-white transition hover:scale-110 hover:bg-purple-800"
          >
            View my Resume
          </Link>
        </div>
      </div>
      <div className="w-1/3">
        <Lottie animationData={coder} loop />
      </div>
    </div>
  );
};
