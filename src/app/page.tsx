import { AboutMe } from "./components/about-me";
import { ContactForm } from "./components/contact-form";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import prisma from "@/utils/prisma";
import { cache } from "react";

export const revalidate = 3;

const getUsers = cache(async () => {
  const res = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return res;
});

const getSkills = async () => {
  const res = await prisma.skill.findMany();

  return res;
};

const getProjects = async () => {
  const res = await prisma.project.findMany({
    include: {
      skills: true,
    },
  });
  return res;
};

export default async function Home() {
  const loading = new Promise<Boolean>((resolve) => setTimeout(resolve, 2000));

  const [user, skills, projects] = await Promise.all([
    getUsers(),
    getSkills(),
    getProjects(),
  ]);

  return (
    <main className="container mx-auto">
      <Hero user={user} loading={loading} />
      <AboutMe user={user} skills={skills} loading={loading} />
      <Projects projects={projects} />
      <ContactForm />
    </main>
  );
}
