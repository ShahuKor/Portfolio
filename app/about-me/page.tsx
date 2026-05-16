import { Container } from "@/components/Container";
import Footer from "@/components/footer";
import Education from "@/components/ui/education";

interface EducationInter {
  logo: string;
  institute: string;
  degree: string;
  location: string;
  gpa?: string;
  from: string;
  to: string;
}

const educationobject: EducationInter[] = [
  {
    logo: "/ucdlogo.png",
    institute: "University College Dublin",
    degree: "MSc Computer Science Negotiated Learning",
    location: "Ireland",
    from: "Sept '25",
    to: "Aug '26",
  },

  {
    logo: "/metlogo.png",
    institute: "MET Bhujbal Knowledge City",
    degree: "B.E. Computer Engineering",
    location: "India",
    gpa: "7.8",
    from: "June '20",
    to: "Aug '24",
  },
];

export default function Page() {
  return (
    <div className="">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pt-30 pb-7 md:pt-20 md:pb-10">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 underline md:text-2xl dark:text-neutral-100">
            About Me
          </h2>
          <p className="w-full py-4 text-sm font-medium tracking-wide text-neutral-600 md:text-base dark:text-neutral-400">
            I'm a software engineer who enjoys building things end-to-end and
            understanding how systems work under the hood. My focus is
            full-stack development and distributed backend systems, working
            mainly with TypeScript, Node.js, React, and Next.js, from APIs to
            event-driven architectures. <br></br> <br></br> Lately I've been
            into the AI engineering space building agentic systems, RAG
            pipelines, and MCP-based tooling. I find the intersection of LLMs
            and real software architecture genuinely interesting, I have built
            multiple projects around it and thats what really excites me.
            <br></br> <br></br> What is more interesting to me is engineering
            problem-solving at scale. I actively study distributed systems and
            system design, and I try to apply what I learn by building things
            rather than just reading about them. I'm currently finishing my MSc
            in Computer Science at University College Dublin and interning at
            Spanish Point Technologies in Dublin.<br></br> <br></br> Outside of
            all this, I play keyboard, jam to music, and watch a lot of movies
            and Youtube, a good balance to staring at terminals all day :)
          </p>
        </div>
        <div className="relative flex flex-col gap-3 pt-4 pb-8">
          <div className="pointer-events-none absolute -top-0 -right-7 -left-7 h-px border-t border-dashed border-neutral-300 sm:top-0 dark:border-neutral-200/20" />
          <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 md:text-xl dark:text-neutral-100">
            Education
          </h2>
          <div className="flex flex-col gap-8">
            {educationobject.map((education, index) => (
              <Education
                key={index}
                logo={education.logo}
                institute={education.institute}
                degree={education.degree}
                location={education.location}
                gpa={education?.gpa}
                from={education.from}
                to={education.to}
              />
            ))}
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
