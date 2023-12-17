import { User } from "@prisma/client";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = ({ user }: { user: User | null }) => {

  return (
    <div className="hero relative mt-20 flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="inline text-5xl lg:text-7xl">
        Hi, Everyone! I&apos;m Julian
        <div className="inline-block animate-bounce">👋🏼</div>
      </h1>
      <p className="py-8 lg:text-2xl">{user?.headline!}</p>
      <div>
        <a
          href={user?.github!}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-7 inline-block"
        >
          <FaGithub className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
        <a
          href={user?.linkedin!}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-7 inline-block"
        >
          <FaLinkedin className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
        <a
          href={`mailto: ${user?.email!}`}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-7 inline-block"
        >
          <FaEnvelope className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
      </div>
      <div className="my-8 flex flex-col items-center md:flex-row">
        <Link
          href="/#contact"
          type="button"
          className="min-w-[210px] rounded-full bg-purple-500 px-8 py-4 text-center uppercase text-white transition hover:scale-110 hover:bg-purple-800 md:mr-8"
        >
          Contact Me
        </Link>
        <Link
          href="https://docs.google.com/document/d/1YjUjr4fdC3wGaPPiZiWfG9pZkLwAHqXrooT2vvO-W44/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          type="button"
          className="mt-8 min-w-[210px] rounded-full bg-purple-500
             px-8 py-4 text-center uppercase text-white transition hover:scale-110 hover:bg-purple-800 md:mt-0"
        >
          View my Resume
        </Link>
      </div>
    </div>
  );
};
