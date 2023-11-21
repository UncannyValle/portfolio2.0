import prisma from "@/utils/prisma";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = async () => {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return (
    <footer className="flex flex-wrap items-center justify-center p-8 text-slate-500">
      <div className="inline-block">
        Designed and coded by me using VS Code. Built with Next.js 13, Prisma,
        and Tailwind. Deployed in Vercel and PlanetScale.
      </div>

      <div className="inline-block">
        <a
          href={user?.github!}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-3 inline-block"
        >
          <FaGithub className="text-xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
        <a
          href={user?.linkedin!}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-3 inline-block"
        >
          <FaLinkedin className="text-xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
        <a
          href={`mailto: ${user?.email!}`}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-3 inline-block"
        >
          <FaEnvelope className="text-xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
      </div>
    </footer>
  );
};
