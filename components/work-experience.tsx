"use client";
import { IconType } from "react-icons";
import Companies from "./ui/companies";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface WorkedCompanies {
  logo: string;
  name: string;
  role: string;
  description: string;
  workedfrom: string;
  workedto: string;
  location: string;
  technologiesWorked?: Technology[];
}

const companydetails: WorkedCompanies[] = [
  {
    logo: "/spanishpointlogo.png",
    name: "Spanish Point Technologies Ltd.",
    role: "Software Engineering Intern",
    description:
      "Contributing to client-facing projects across software development, AI and cloud using Microsoft Azure, TypeScript, Python, and React in an agile delivery environment.",
    workedfrom: "May '26",
    workedto: "Present",
    location: "Dublin",
  },
  {
    logo: "/Technetzlogo600.png",
    name: "TechNetz Solutions",
    role: "Software Developer Intern",
    description:
      "Worked on backend development for an enterprise resource management platform built with Node.js and PostgreSQL, developing APIs across sales, purchases, transport, and user workflows. Contributed to the platform’s RBAC system for secure role-level authorization and helped build scalable, maintainable backend services in a collaborative production environment.",
    workedfrom: "August '24",
    workedto: "January '25",
    location: "India",
    technologiesWorked: [
      {
        name: "Javascript",
        icon: SiJavascript,
        color: "F0DB4F",
      },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },

      {
        name: "Express",
        icon: SiExpress,
        color: "#000000",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        name: "PostMan",
        icon: SiPostman,
        color: "#FF6C37",
      },
    ],
  },
];

export default function WorkExp() {
  return (
    <div className="relative pt-10 pb-8 sm:pt-3">
      <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
      <p className="py-4 text-lg font-semibold tracking-tight text-neutral-800 md:text-xl dark:text-neutral-100">
        Work Experience
      </p>
      <div className="flex flex-col gap-6">
        {companydetails.map((company, index) => (
          <Companies
            key={index}
            logo={company.logo}
            name={company.name}
            role={company.role}
            description={company.description}
            workedfrom={company.workedfrom}
            workedto={company.workedto}
            location={company.location}
            technologiesWorked={company.technologiesWorked}
          />
        ))}
      </div>
    </div>
  );
}
