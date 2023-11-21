import { AboutMe } from "./components/about-me";
import { ContactForm } from "./components/contact-form";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import prisma from "@/utils/prisma";
import { Skills } from "./components/skills";

const getUsers = () => {
  const res = prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return res;
};

const getProjects = () => {
  const res = prisma.project.findMany({
    include: {
      skills: true,
    },
  });
  return res;
};

const getSkills = () => {
  const res = prisma.skill.findMany();

  return res;
};

export default async function Home() {
  const [user, skills, projects] = await Promise.all([
    getUsers(),
    getSkills(),
    getProjects(),
  ]);

  return (
    <main className="container mx-auto">
      <Hero user={user} />
      <AboutMe user={user} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <ContactForm />
    </main>
  );
}
