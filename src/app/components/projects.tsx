import Image from "next/image";
import { Project, Skill } from "@prisma/client";

interface ProjectWithSkills extends Project {
  skills: Skill[];
}

export const Projects = ({ projects }: { projects: ProjectWithSkills[] }) => {
  return (
    <div className="flex h-screen items-center" id="projects">
      <div>
        <h1 className="my-4 text-center text-6xl">Projects Section</h1>
        <div className="my-8 flex justify-center">
          {projects.map((project) => {
            return (
              <a
                key={project.slug}
                className="w-1/3  p-8 text-center transition hover:scale-110"
                href={`/projects/${project.slug}`}
              >
                <Image
                  src={`/images/projects/${project.slug}/main.png`}
                  alt={project.slug}
                  width={600}
                  height={600}
                  className="mb-2 h-[300px] rounded-2xl  object-cover drop-shadow-md"
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
