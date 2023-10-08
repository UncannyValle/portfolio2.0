import { AboutMe } from "./components/about-me";
import { Hero } from "./components/hero";
import prisma from "@/utils/prisma";

import { User, Skill } from "@prisma/client";

export default async function Home() {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  const skills: Skill[] = await prisma.skill.findMany();

  return (
    <main className="">
      <Hero user={user!} />
      <AboutMe user={user} skills={skills} />
    </main>
  );
}
