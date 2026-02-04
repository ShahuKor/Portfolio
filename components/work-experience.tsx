"use client";
import { IconType } from "react-icons";
import Companies from "./ui/companies";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
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
  technologiesWorked: Technology[];
}

const companydetails: WorkedCompanies[] = [
  {
    logo: "/Technetzlogo600.png",
    name: "TechNetz Solutions",
    role: "Software Developer Intern",
    description:
      "Contributed to the development of a management web application by building core back-end modules and data services for user, sales, purchase, and transport management. Collaborated closely with a team to adapt to client requirements, delivering scalable, maintainable, and user-focused solutions.",
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
    ],
  },
];

export default function WorkExp() {
  return (
    <div className="relative pt-3 pb-10">
      <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
      <p className="py-4 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
        Work Experience
      </p>
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
  );
}
