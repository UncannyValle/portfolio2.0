import { AboutMe } from "./components/about-me";
import { ContactForm } from "./components/contact-form";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import prisma from "@/utils/prisma";

const getUsers = async () => {
  const res = prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return res;
};



const getProjects = async () => {
  const res = prisma.project.findMany({
    include: {
      skills: true,
    },
  });
  return res;
};

export default async function Home() {
  const [user, projects] = await Promise.all([
    getUsers(),
    // getSkills(),
    getProjects(),
  ]);

  return (
    <main className="container mx-auto">
      <Hero user={user} />
      <AboutMe user={user} />
      <Projects projects={projects} />
      <ContactForm />
    </main>
  );
}
