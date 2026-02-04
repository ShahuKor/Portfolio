import Contact from "@/components/contact-me";
import { Container } from "@/components/Container";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects-landing";
import WorkExp from "@/components/work-experience";

export default function Home() {
  return (
    <div>
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-px border border-dashed border-neutral-200 dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-px border border-dashed border-neutral-200 dark:border-neutral-200/20" />
        <Hero />
        <WorkExp />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}
