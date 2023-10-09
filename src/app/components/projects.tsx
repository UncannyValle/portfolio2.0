import Image from "next/image";
import { Project, Skill } from "@prisma/client";

interface ProjectWithSkills extends Project {
  skills: Skill[];
}

export const Projects = ({ projects }: { projects: ProjectWithSkills[] }) => {
  return (
    <div className="flex items-center p-8" id="projects">
      <div>
        <h1 className="my-4 text-center text-4xl lg:text-6xl">Projects</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => {
            return (
              <a
                key={project.slug}
                className="border-1 rounded-2xl border-solid border-slate-400 p-8 text-center shadow-md  transition hover:shadow-2xl"
                href={`/projects/${project.slug}`}
              >
                <Image
                  src={`/images/projects/${project.slug}/main.png`}
                  alt={project.slug}
                  width={600}
                  height={600}
                  className="mx-auto mb-2 h-[150px] w-[150px] object-cover md:h-[300px] md:w-[300px]"
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
    </div>
  );
};
