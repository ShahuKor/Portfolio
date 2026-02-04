import Image from "next/image";
import { IconType } from "react-icons";
import { useState } from "react";

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface CompaniesProps {
  logo: string;
  name: string;
  role: string;
  description: string;
  workedfrom: string;
  workedto: string;
  location: string;
  technologiesWorked: Technology[];
}

export default function Companies({
  logo,
  name,
  role,
  description,
  workedfrom,
  workedto,
  location,
  technologiesWorked,
}: CompaniesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="flex w-full items-center gap-4">
        <Image
          src={logo}
          className="rounded-md border border-neutral-300 bg-white dark:border-neutral-200/20"
          alt="Company Logo"
          height={60}
          width={60}
          draggable={false}
          loading="lazy"
        />

        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-300">
                {name}
              </h2>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="transition-transform duration-300 ease-in-out hover:opacity-70"
                style={{
                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-neutral-800 dark:text-neutral-300"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="text-md flex max-w-lg gap-2 font-medium tracking-wide text-(--color-secondary)">
              <p>{workedfrom}</p>
              <p>-</p>
              <p>{workedto}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-md max-w-lg font-medium tracking-wide text-(--color-secondary)">
              {role}
            </h2>
            <p className="text-md max-w-lg font-medium tracking-wide text-(--color-secondary)">
              {location}
            </p>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isExpanded ? "1000px" : "0",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="mt-3 w-full py-5">
          <p className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-300">
            Technologies
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {technologiesWorked.map((tech) => (
              <div
                key={tech.name}
                className="skill-inner-shadow inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white"
              >
                <div className="size-4 shrink-0">
                  <tech.icon
                    className="h-full w-full"
                    style={{ color: tech.color }}
                  />
                </div>
                <p className="ml-1 text-sm font-medium text-neutral-700 dark:text-neutral-300/80">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
          <p className="text-md py-4 font-medium tracking-wide text-(--color-secondary)">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
