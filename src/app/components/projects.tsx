import Image from "next/image";
import { Project, Skill } from "@prisma/client";

interface ProjectWithSkills extends Project {
  skills: Skill[];
}

export const Projects = ({ projects }: { projects: ProjectWithSkills[] }) => {
  return (
    <div className="container mx-auto h-screen" id="projects">
      <h1 className="my-4 text-center text-6xl">Projects Section</h1>
      <div className="my-8 flex justify-center">
        {projects.map((project) => {
          return (
            <a
              key={project.slug}
              className="w-1/3 p-4 text-center transition hover:scale-110"
            >
              <Image
                src={`/images/projects/${project.slug}/main.png`}
                alt={project.slug}
                width={600}
                height={600}
                className="mb-2 rounded-2xl drop-shadow-md"
              />
              <p className="text-xl font-bold">{project.title}</p>
              <div>
                {project.skills.map((skill, index) => (
                  <div key={`${skill.id}`} className="inline">
                    <span> {skill.name} </span>
                    {index === project.skills.length - 1 ? "" : "|"}
                  </div>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
