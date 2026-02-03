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
      "A full-stack e-commerce solution with payment integration and inventory management.",
    projectlink: "/projects/ecommerce",
    githublink: "https://github.com/ShahuKor/Quib",
  },
  {
    src: "/cliply-image.jpg",
    title: "Cliply",
    description:
      "Collaborative task management tool with real-time updates and team features.",
    projectlink: "/projects/task-app",
    githublink: "https://github.com/ShahuKor/About-Cliply",
    livelink: "https://cliply-kohl.vercel.app/",
  },
  {
    src: "/foodflux-image.jpg",
    title: "FoodFlux",
    description:
      "Collaborative task management tool with real-time updates and team features.",
    projectlink: "/projects/task-app",
    githublink:
      "https://github.com/ShahuKor/FoodFlux-Distributed-Food-Ordering",
  },
  {
    src: "/webchat-ai-image.jpg",
    title: "WebChat AI",
    description:
      "Collaborative task management tool with real-time updates and team features.",
    projectlink: "/projects/task-app",
    githublink: "https://github.com/ShahuKor/WebChat-Ai",
  },
];

export const Projects = () => {
  return (
    <div className="py-6">
      <p className="py-4 text-2xl font-semibold tracking-tight text-neutral-600 dark:text-neutral-100">
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
      </div>
    </div>
  );
};
