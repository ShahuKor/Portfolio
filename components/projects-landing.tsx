import Link from "next/link";
import Card from "./ui/card";

interface Project {
  src: string;

  title: string;
  description: string;
  slug: string;
  githublink: string;
  livelink?: string | null;
}

const projects: Project[] = [
  {
    src: "/foodflux-image-new.jpg",
    title: "FoodFlux",
    description:
      "A completely distributed microservices system demonstrating food delivery services and inter-service communication.",
    slug: "foodflux",
    githublink:
      "https://github.com/ShahuKor/FoodFlux-Distributed-Food-Ordering",
  },
  {
    src: "/quib-image-new.jpg",
    title: "Quib",
    description:
      "A PDF Summarizer that converts any pdf into reels like componenet, which makes it user friendly and interactive. ",
    slug: "quib",
    githublink: "https://github.com/ShahuKor/Quib",
  },
  {
    src: "/cutthatpart-image.jpg",
    title: "CutThatPart",
    description:
      "Share parts of a YouTube videos instantly without downloading it or screen recording, with a personal share link.",
    slug: "cutthatpart",
    githublink: "https://github.com/ShahuKor/CutThatPart",
  },
  {
    src: "/cliply-image-new.jpg",
    title: "Cliply",
    description:
      "AI-powered platform to crop images for social formats, compress videos with minimal quality loss.",
    slug: "cliply",
    githublink: "https://github.com/ShahuKor/About-Cliply",
    livelink: "https://cliply-kohl.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <div className="relative pt-3 pb-10">
      <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
      <p className="py-4 text-lg font-semibold tracking-tight text-neutral-800 md:text-xl dark:text-neutral-100">
        Some of My Projects
      </p>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
              slug={project.slug}
              githublink={project.githublink}
              livelink={project?.livelink}
            />
          ))}
        </div>
        <Link href="/projects">
          <button className="mt-4 rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] md:text-sm dark:border-neutral-300/30 dark:bg-neutral-50/5 dark:shadow-[inset_2px_4px_4px_rgba(255,255,255,0.06)] dark:hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]">
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};
