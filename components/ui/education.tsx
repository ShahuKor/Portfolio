"use client";
import Image from "next/image";
import { useState } from "react";

interface EducationProps {
  logo: string;
  institute: string;
  degree: string;
  location: string;
  gpa?: string;
  from: string;
  to: string;
}

export default function Education({
  logo,
  institute,
  degree,
  location,
  gpa,
  from,
  to,
}: EducationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="w-full">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            className="size-10 rounded-md border border-neutral-300 bg-white md:size-12 dark:border-none"
            alt="Company Logo"
            height={60}
            width={60}
            draggable={false}
            loading="lazy"
          />
          <div className="flex w-full flex-col">
            <div className="flex w-full justify-between">
              <div className="flex w-full items-center justify-between gap-3 sm:justify-normal">
                <h3 className="text-sm font-semibold tracking-tight text-neutral-800 md:text-base dark:text-neutral-300">
                  {institute}
                </h3>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="transition-transform duration-300 ease-in-out hover:opacity-70 sm:hidden"
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  aria-label={
                    isExpanded ? "Collapse details" : "Expand details"
                  }
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
              <div className="hidden max-w-lg gap-2 text-xs font-medium tracking-wide whitespace-nowrap text-(--color-secondary) sm:flex md:text-sm">
                <p>{from}</p>
                <p>-</p>
                <p>{to}</p>
              </div>
            </div>

            <div className="flex w-full justify-between">
              <h2 className="max-w-lg text-xs font-medium tracking-wide text-(--color-secondary) md:text-sm">
                {degree}
              </h2>
              <p className="hidden max-w-lg text-xs font-medium tracking-wide text-(--color-secondary) sm:block md:text-sm">
                {location}
              </p>
            </div>
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
        <div className="w-full pt-2 sm:mt-3 sm:pt-2">
          <div className="flex max-w-full items-center justify-between gap-2 text-xs font-medium tracking-wide text-(--color-secondary) sm:hidden md:text-sm">
            <div className="flex items-center gap-2">
              <p>{from}</p>
              <p>-</p>
              <p>{to}</p>
            </div>
            <p className="max-w-lg text-xs font-medium tracking-wide text-(--color-secondary) md:text-sm">
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
