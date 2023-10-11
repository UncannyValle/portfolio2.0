import prisma from "@/utils/prisma";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

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
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <main className="container mx-auto mt-[120px] min-h-screen p-8">
      <h1 className="text-center text-2xl font-semibold md:text-8xl">
        {project?.title}
      </h1>
      <Image
        src={`/images/projects/${project?.slug}/main.png`}
        alt="project picture"
        className="drop-shadow-l mx-auto my-8 h-auto w-auto"
        height={1000}
        width={1200}
        priority
      />
      <div className="mx-auto my-8 lg:w-3/4">
        <div className="flex flex-wrap md:justify-evenly">
          {project?.github ? (
            <Link
              href={project.github}
              className="text-lg text-purple-600 underline dark:text-purple-300 md:text-xl"
              target="_blank"
              rel="noreferrer noopener"
            >
              Check the Repo
              <FontAwesomeIcon className="px-2" icon={faGithub} />
            </Link>
          ) : (
            <p className="text-lg text-purple-600 dark:text-purple-300 md:text-xl">
              Private Repo
              <FontAwesomeIcon className="px-2" icon={faGithub} />
            </p>
          )}
          {project?.link ? (
            <Link
              href={project?.link}
              className="text-lg text-purple-600 underline dark:text-purple-300 md:text-xl"
              target="_blank"
              rel="noreferrer noopener"
            >
              Project Link{" "}
              <FontAwesomeIcon
                className="px-2"
                icon={faArrowUpRightFromSquare}
              />
            </Link>
          ) : null}
        </div>
        <div className="my-8 ">
          <h2 className=" text-4xl uppercase">Summary:</h2>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
          <p className="lg:text-2xl">{project?.summary}</p>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
        </div>

        <div className="my-8">
          <h2 className=" text-4xl uppercase">Project Goals:</h2>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
          <p className="lg:text-2xl">{project?.goal}</p>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
        </div>

        <div className="my-8">
          <h2 className="text-4xl uppercase">Project Outcome:</h2>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
          <p className="lg:text-2xl">{project?.outcome}</p>
          <hr className="my-8 h-1 border-0 bg-slate-800" />
        </div>

        <div>
          <Image
            src={`/images/projects/${project?.slug}/1.png`}
            alt="project picture"
            className="mx-auto my-8 w-full drop-shadow-lg"
            height={1000}
            width={1000}
          />
          <Image
            src={`/images/projects/${project?.slug}/2.png`}
            alt="project picture"
            className="mx-auto my-8 w-full drop-shadow-lg"
            height={1000}
            width={1000}
          />
          <Image
            src={`/images/projects/${project?.slug}/3.png`}
            alt="project picture"
            className="mx-auto my-8 w-full drop-shadow-lg"
            height={1000}
            width={1000}
          />
          <Image
            src={`/images/projects/${project?.slug}/4.png`}
            alt="project picture"
            className="mx-auto my-8 w-full drop-shadow-lg"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </main>
  );
}
