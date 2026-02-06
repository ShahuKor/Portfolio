import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiKubernetes,
  SiExpress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const technologies = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "F0DB4F" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
];

export const Technologies = () => {
  return (
    <div className="relative mt-15 flex h-48 flex-col justify-center pb-3 sm:mt-8 sm:h-45 lg:mt-4">
      <div className="pointer-events-none absolute -top-8 -right-7 -left-7 h-px border-t border-dashed border-neutral-300 sm:top-0 dark:border-neutral-200/20" />
      <div className="pointer-events-none absolute -right-7 -bottom-8 -left-7 h-px border-b border-dashed border-neutral-300 sm:bottom-0 dark:border-neutral-200/20" />
      <div className="text-sm font-medium text-neutral-500 italic md:text-base dark:text-neutral-300">
        What I Build With ?{" "}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="skill-inner-shadow inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white"
          >
            <div className="size-3.5 shrink-0 md:size-4">
              <tech.Icon
                className="h-full w-full"
                style={{ color: tech.color }}
              />
            </div>
            <p className="ml-1 text-xs font-medium text-neutral-700 md:text-sm dark:text-neutral-300/80">
              {tech.name}
            </p>
          </div>
        ))}
        <div className="skill-inner-shadow inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white">
          <p className="ml-1 text-xs font-medium text-neutral-700 md:text-sm dark:text-neutral-300/80">
            More...
          </p>
        </div>
      </div>
    </div>
  );
};
