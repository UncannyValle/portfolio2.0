"use client";
import { User } from "@prisma/client";
import Link from "next/link";
import { DotLottiePlayer, PlayerEvents } from "@dotlottie/react-player";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Hero = ({ user }: { user: User | null }) => {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  const handleOnReady = () => {
    setReady(true);
  };

  useEffect(() => {
    if (!ready) {
      setLoading(false);
    }
  }, [ready]);

  return (
    <div className="mt-20 flex min-h-screen flex-wrap items-center p-8">
      <div className="w-full lg:w-2/3">
        <h1 className="inline text-5xl lg:text-7xl">
          Hi, Everyone! I&apos;m Julian
          <div className="inline-block animate-bounce">👋🏼</div>
        </h1>
        <p className="py-8 lg:w-3/4  lg:text-2xl">{user?.headline!}</p>
        <div>
          <a
            href={user?.github!}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-7 inline-block"
          >
            <FaGithub className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500" />
          </a>
          <a
            href={user?.linkedin!}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-7 inline-block"
          >
            <FaLinkedin className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500" />
          </a>
          <a
            href={`mailto: ${user?.email!}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mr-7 inline-block"
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
      <div className="mx-auto lg:w-1/3">
        {loading ? (
          <div>boop</div>
        ) : (
          <DotLottiePlayer
            src="/images/lotties/coder.lottie"
            onEvent={(event: PlayerEvents) => {
              if (event === PlayerEvents.Ready) {
                handleOnReady();
              }
            }}
            loop
            autoplay
          />
        )}
        <button onClick={() => setLoading(!loading)}>Poke</button>
      </div>
    </div>
  );
};
