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
    <div className="pt-30 md:pt-20">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pb-7 md:pb-10">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-800 md:text-xl dark:text-neutral-100">
            About Me
          </h2>
          <p className="w-full py-4 text-sm font-medium tracking-wide text-neutral-600 md:text-base dark:text-neutral-400">
            I’m a software engineer who enjoys building things end-to-end and
            understanding how systems work under the hood. I work mainly with
            TypeScript and JavaScript, building full-stack web applications
            using React, Next.js, Node.js, and modern backend architectures.
            <br></br> <br></br> I have hands-on experience with AWS and
            cloud-native development working with services like EC2, S3, Lambda
            (serverless), SQS, ECS, and ECR, along with Docker and Kubernetes
            for containerized deployments. I like taking ideas from zero to a
            working MVP, focusing on clean code, scalability, and real-world
            constraints. <br></br> <br></br> What really drives me is
            engineering problem-solving at scale. I actively study distributed
            systems, system design, and software architecture, and I try to
            apply what I learn by building and experimenting almost every day. I
            enjoy breaking systems apart, understanding trade-offs, and putting
            things back together in better ways.<br></br> <br></br> Outside of
            coding, I love writing technical blogs, documenting what I learn,
            and constantly exploring new technologies. I see myself as a
            lifelong learner who’s curious about how large-scale systems are
            designed, built, and evolved over time.
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
