import { AboutMe } from "./components/about-me";
import { ContactForm } from "./components/contact-form";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import prisma from "@/utils/prisma";
import { cache } from "react";

export const revalidate = 3600;

const getUsers = cache(async () => {
  const res = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return res;
});

const getSkills = cache(async () => {
  const res = await prisma.skill.findMany();

  return res;
});

const getProjects = cache(async () => {
  const res = await prisma.project.findMany({
    include: {
      skills: true,
    },
  });
  return res;
});

export default async function Home() {
  const [user, skills, projects] = await Promise.all([
    getUsers(),
    getSkills(),
    getProjects(),
  ]);
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <main className="container mx-auto">
      <Hero user={user} />
      <AboutMe user={user} skills={skills} />
      <Projects projects={projects} />
      <ContactForm />
    </main>
  );
}
