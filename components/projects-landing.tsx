import Link from "next/link";
import Card from "./ui/card";

interface Project {
  src: string;

  title: string;
  description: string;
  projectlink: string;
  githublink: string;
  livelink?: string | null;
}

const projects: Project[] = [
  {
    src: "/quib-image.jpg",
    title: "Quib",
    description:
      "A PDF Summarizer that converts any pdf into reels like componenet, which makes it user friendly and interactive. ",
    projectlink: "/projects/ecommerce",
    githublink: "https://github.com/ShahuKor/Quib",
  },
  {
    src: "/cliply-image.jpg",
    title: "Cliply",
    description:
      "AI-powered platform to crop images for social formats, compress videos with minimal quality loss.",
    projectlink: "/projects/task-app",
    githublink: "https://github.com/ShahuKor/About-Cliply",
    livelink: "https://cliply-kohl.vercel.app/",
  },
  {
    src: "/foodflux-image.jpg",
    title: "FoodFlux",
    description:
      "A completely distributed microservices system demonstrating food delivery services and inter-service communication.",
    projectlink: "/projects/task-app",
    githublink:
      "https://github.com/ShahuKor/FoodFlux-Distributed-Food-Ordering",
  },
  {
    src: "/webchat-ai-image.jpg",
    title: "WebChat AI",
    description:
      "A RAG chatbot that makes chatgpt get context of any url or website, built with Streamlit and LangChain.",
    projectlink: "/projects/task-app",
    githublink: "https://github.com/ShahuKor/WebChat-Ai",
  },
];

export const Projects = () => {
  return (
    <div className="py-6">
      <p className="py-4 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
        Some of My Projects
      </p>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
              projectlink={project.projectlink}
              githublink={project.githublink}
              livelink={project?.livelink}
            />
          ))}
        </div>
        <Link href="/projects">
          <button className="mt-4 rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:border-neutral-300/30 dark:bg-neutral-50/5 dark:shadow-[inset_2px_4px_4px_rgba(255,255,255,0.06)] dark:hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]">
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};
