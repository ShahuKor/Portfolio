import { Container } from "@/components/Container";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-px border border-dashed border-neutral-200" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-px border border-dashed border-neutral-200" />
        <Hero />
        <Projects />
      </Container>
    </div>
  );
}
