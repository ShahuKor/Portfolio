import Link from "next/link";
import { Technologies } from "./technologies";

export const Hero = () => {
  return (
    <div className="pt-16">
      <div className="mt-15 md:mt-0">
        <h1 className="text-3xl font-bold text-(--color-primary) md:text-4xl">
          Hello! I'm Shahu Kor.
        </h1>

        <p className="max-w-lg pt-7 text-sm font-medium tracking-wide text-(--color-secondary) md:text-base">
          I build stuff to see if it’s possible. I enjoy coding and building
          things, with most of my work focused on
          <span className="px-1.5 font-medium text-(--color-primary)">
            full-stack development.
          </span>
          But theres{" "}
          <Link
            href="/experiments"
            className="text-(--color-primary) underline decoration-neutral-500"
          >
            more to it
          </Link>
          .
        </p>
      </div>

      <div className="mt-6 flex gap-2">
        <button className="rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] md:text-sm dark:border-neutral-300/30 dark:bg-neutral-50/5 dark:shadow-[inset_2px_4px_4px_rgba(255,255,255,0.06)] dark:hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]">
          Resume / CV
        </button>
        <button className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-100 transition-colors ease-in-out hover:bg-neutral-700 md:text-sm dark:bg-neutral-300 dark:text-neutral-800 dark:transition-colors dark:ease-in-out dark:hover:bg-neutral-400">
          Get in Touch
        </button>
      </div>
      <div className="mt-8 flex gap-3 pl-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary group relative flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://x.com/ShahuKor"
        >
          <span className="size-4 sm:size-5 md:size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
          </span>
          <span className="pointer-events-none absolute bottom-full left-2/3 mb-2 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-300 dark:text-neutral-800">
            Twitter
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary group relative flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://www.linkedin.com/in/shahukor"
        >
          <span className="size-4 sm:size-5 md:size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
            </svg>
          </span>
          <span className="pointer-events-none absolute bottom-full left-2/3 mb-2 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-300 dark:text-neutral-800">
            Linked In
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary group relative flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://github.com/ShahuKor"
        >
          <span className="size-4 sm:size-5 md:size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
          </span>
          <span className="pointer-events-none absolute bottom-full left-2/3 mb-2 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-300 dark:text-neutral-800">
            Github
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary group relative flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="https://medium.com/@ShahuKor"
        >
          <span className="size-4 sm:size-5 md:size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M72,64a64,64,0,1,0,64,64A64.07,64.07,0,0,0,72,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,72,176ZM184,64c-5.68,0-16.4,2.76-24.32,21.25C154.73,96.8,152,112,152,128s2.73,31.2,7.68,42.75C167.6,189.24,178.32,192,184,192s16.4-2.76,24.32-21.25C213.27,159.2,216,144,216,128s-2.73-31.2-7.68-42.75C200.4,66.76,189.68,64,184,64Zm0,112c-5.64,0-16-18.22-16-48s10.36-48,16-48,16,18.22,16,48S189.64,176,184,176ZM248,72V184a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"></path>
            </svg>
          </span>
          <span className="pointer-events-none absolute bottom-full left-2/3 mb-2 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-300 dark:text-neutral-800">
            Medium
          </span>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary group relative flex items-center gap-2"
          data-state="closed"
          data-slot="tooltip-trigger"
          href="mailto:korshahu17@gmail.com"
        >
          <span className="size-4 sm:size-5 md:size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
            </svg>
          </span>
          <span className="pointer-events-none absolute bottom-full left-2/3 mb-2 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-300 dark:text-neutral-800">
            Gmail
          </span>
        </a>
      </div>
      <Technologies />
    </div>
  );
};
