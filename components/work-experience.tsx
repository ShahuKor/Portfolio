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

interface ExprienceDescription {
  descriptionpoint: string;
}

interface WorkedCompanies {
  logo: string;
  name: string;
  role: string;
  description: ExprienceDescription[];
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
    description: [
      {
        descriptionpoint:
          "• Built the API testing framework for the Members Portal of Matching Engine Software from scratch with zero prior infrastructure, independently solving a blocking Azure AD B2C auth challenge using a Selenium-based token acquisition workaround.",
      },
      {
        descriptionpoint:
          "• Reduced test suite auth overhead by ∼90% by refactoring from per-class authentication to a single shared session, cutting auth time from 10s per class to 10s for the entire suite.",
      },
      {
        descriptionpoint:
          "• Diagnosed and resolved client-reported bugs by diving across TypeScript, C#, Cosmos DB, and SQL, tracing root causes through multiple interconnected system components and dependecies.",
      },
    ],
    workedfrom: "May '26",
    workedto: "Present",
    location: "Dublin",
  },
  {
    logo: "/Technetzlogo600.png",
    name: "TechNetz Solutions",
    role: "Software Developer Intern",
    description: [
      {
        descriptionpoint:
          "• Built RESTful APIs in Node.js and PostgreSQL for an enterprise resource management platform serving a high-transaction agricultural business, covering sales, purchases, transport, and user workflows.",
      },
      {
        descriptionpoint:
          "• Implemented Role-Based Authorisation across the platform, enforcing permission-based access for multiple user roles and securing sensitive business operations.",
      },
      {
        descriptionpoint:
          "• Collaborated within a 5-person team to deliver modular, production-ready backend services, translating client requirements into maintainable service architecture.",
      },
    ],
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
