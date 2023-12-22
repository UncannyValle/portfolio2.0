import prisma from "../utils/prisma";
import { AboutMe } from "../components/about-me";
import { ContactForm } from "../components/contact-form";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";
import { Careers } from "../components/careers";

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

const getCareers = () => {
  const res = prisma.career.findMany({
    include: {
      associatedProjects: true,
      associatedSkills: true,
    },
  });

  return res;
};

export default async function Home() {
  const [user, skills, projects, careers] = await Promise.all([
    getUsers(),
    getSkills(),
    getProjects(),
    getCareers(),
  ]);


  return (
    <main className="container mx-auto">
      <Hero user={user} />
      <AboutMe user={user} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Careers careers={careers} />
      <ContactForm />
    </main>
  );
}
