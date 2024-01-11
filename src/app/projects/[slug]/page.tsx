import { Hero } from "@/src/app/projects/[slug]/components/hero";
import prisma from "../../../utils/prisma";
import { Project } from "@prisma/client";
import { Content } from "./components/content";
import { ProjectImages } from "./components/projectImages";

const getProject = (slug: string) => {
  return prisma.project.findUnique({
    where: {
      slug: slug,
    },
  });
};

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project: Project | null = await getProject(params.slug);

  return (
    <main className="container mx-auto mt-[120px] min-h-screen p-8">
      <Hero project={project} />

      <div className="mx-auto my-8 lg:w-3/4">
        <Content
          title="Summary"
          projectContent={project?.summary}
          direction="left"
        />
        <Content
          title="Project Goals"
          projectContent={project?.goal}
          direction="right"
        />
        <Content
          title="Project Outcome"
          projectContent={project?.outcome}
          direction="left"
        />

        <ProjectImages quantity={4} slug={project?.slug} />
      </div>
    </main>
  );
}
