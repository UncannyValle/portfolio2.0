import prisma from "@/utils/prisma";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const revalidate = 3;

const getProject = async (slug: string) => {
  return await prisma.project.findUnique({
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
  const project = await getProject(params.slug);

  return (
    <main className="container mx-auto mt-[120px] min-h-screen">
      <h1 className="text-8xl text-center">{project?.title}</h1>
      <Image
        src={`/images/projects/${project?.slug}/main.png`}
        alt="project picture"
        className="mx-auto my-8 drop-shadow-lg"
        height={1000}
        width={1200}
      />
      <div className="mx-auto my-8 w-3/4">
        {project?.gtihub ? (
          <a
            href={project.gtihub}
            className="text-4xl text-purple-600 underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check Out The Repo
            <FontAwesomeIcon icon={faGithub} />
          </a>
        ) : (
          <p className="text-4xl text-purple-600">
            Private Repo
            <FontAwesomeIcon className="px-4" icon={faGithub} />
          </p>
        )}
        <div className="my-8 ">
          <h2 className="py-8 text-4xl uppercase">Summary:</h2>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
          <p className="text-2xl">{project?.summary}</p>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
        </div>

        <div className="my-8">
          <h2 className="py-8 text-4xl uppercase">Project Goals:</h2>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
          <p className="text-2xl">{project?.goal}</p>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
        </div>

        <div className="my-8">
          <h2 className="py-8 text-4xl uppercase">Project Outcome:</h2>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
          <p className="text-2xl">{project?.outcome}</p>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
        </div>

        <div>
          <Image
            src={`/images/projects/${project?.slug}/1.png`}
            alt="project picture"
            className="mx-auto my-8 drop-shadow-lg"
            height={1000}
            width={1000}
          />
          <Image
            src={`/images/projects/${project?.slug}/2.png`}
            alt="project picture"
            className="mx-auto my-8 drop-shadow-lg"
            height={1000}
            width={1000}
          />
          <Image
            src={`/images/projects/${project?.slug}/3.png`}
            alt="project picture"
            className="mx-auto my-8 drop-shadow-lg"
            height={1000}
            width={1000}
          />
          <Image
            src={`/images/projects/${project?.slug}/4.png`}
            alt="project picture"
            className="mx-auto my-8 drop-shadow-lg"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </main>
  );
}
