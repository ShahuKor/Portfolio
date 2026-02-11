import NotFound from "@/app/not-found";
import { Container } from "@/components/Container";
import Footer from "@/components/footer";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="relative py-5">
          <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
          <div className="pt-20 md:pt-10">
            <div>
              <Link href={"/projects"}>
                <button className="flex items-center gap-1.5 rounded-md py-1.5 text-xs font-medium text-neutral-800 underline transition-colors ease-in-out hover:cursor-pointer md:text-sm dark:text-neutral-200 dark:transition-colors dark:ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                  Go Back
                </button>
              </Link>
            </div>
            <div className="relative mt-3 h-44 w-full md:h-60 lg:h-76">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="mt-1 flex h-10 items-center justify-start gap-2">
            <div
              className={`rounded-lg px-2 py-1 text-xs font-semibold md:text-sm ${
                project.status === "Completed"
                  ? "border border-green-800/40 bg-transparent text-green-600/60 dark:border-green-800 dark:text-green-700"
                  : project.status === "Developing"
                    ? "border border-amber-300 bg-transparent text-amber-400 dark:border-amber-300/60 dark:text-amber-300"
                    : "border border-gray-400 bg-gray-200 text-black"
              }`}
            >
              {project.status}
            </div>
            <div className="rounded-lg bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-100 md:text-sm dark:bg-neutral-200 dark:text-neutral-800">
              {project.type}
            </div>
          </div>
          <div className="flex flex-col gap-3 py-5 md:py-10">
            <h2 className="text-3xl font-bold text-(--color-primary) md:text-4xl">
              {project.title}
            </h2>
            <p className="text-sm font-medium tracking-wide text-(--color-secondary) md:text-base">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-800 md:text-2xl dark:text-neutral-100">
              Overview
            </h2>
            <p className="text-justify text-sm font-medium tracking-wide text-(--color-secondary) md:text-base">
              {project.overview}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2 md:mt-10">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-800 md:text-2xl dark:text-neutral-100">
              What Does it Do?
            </h2>
            <div>
              {project.tasks.map((task, index) => (
                <ul
                  className="ml-4 list-disc text-justify text-sm font-medium tracking-wide text-(--color-secondary) md:ml-8 md:text-base"
                  key={index}
                >
                  <li>{task}</li>
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 md:mt-10">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-800 md:text-2xl dark:text-neutral-100">
              Why I Built this
            </h2>
            <div>
              {project.reasons.map((reason, index) => (
                <ul
                  className="ml-4 list-disc text-justify text-sm font-medium tracking-wide text-(--color-secondary) md:ml-8 md:text-base"
                  key={index}
                >
                  <li>{reason}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2 md:mt-10">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-800 md:text-2xl dark:text-neutral-100">
              Tech Stack
            </h2>
            <div>
              {project.techstack.map((tech, index) => (
                <ul
                  className="ml-4 list-disc text-justify text-sm font-medium tracking-wide text-(--color-secondary) md:ml-8 md:text-base"
                  key={index}
                >
                  <li>{tech}</li>
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-10 mb-5 flex w-full justify-center">
            <Link href={project.githublink}>
              <button className="mt-4 rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] md:text-sm dark:border-neutral-300/30 dark:bg-neutral-50/5 dark:shadow-[inset_2px_4px_4px_rgba(255,255,255,0.06)] dark:hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]">
                Checkout Github
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
