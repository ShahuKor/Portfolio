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
    src: "/diffsense-landing.png",
    title: "DiffSense",
    description:
      "A self-hostable AI Agent that reviews pull requests using an agentic Claude AI loop with RAG-based adaptive feedback.",
    slug: "diffsense",
    githublink: "https://github.com/ShahuKor/DiffSense",
    livelink: "https://diffsense-landing.vercel.app/",
  },
  {
    src: "/cutthatpart-new.png",
    title: "CutThatPart",
    description:
      "Share parts of a YouTube videos instantly without downloading it or screen recording, with a personal share link.",
    slug: "cutthatpart",
    githublink: "https://github.com/ShahuKor/CutThatPart",
  },
  {
    src: "/prysm-homepage.png",
    title: "Prysm",
    description:
      "Interact with PDFS get insights, get cited, source-backed answers with a built-in PDF viewer and persistent chat history.",
    slug: "prysm",
    githublink: "https://github.com/ShahuKor/PdfRaG",
  },
  {
    src: "/quib-neww.png",
    title: "Quib",
    description:
      "A PDF Summarizer that converts any pdf into reels like componenet, which makes it user friendly and interactive. ",
    slug: "quib",
    githublink: "https://github.com/ShahuKor/Quib",
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
