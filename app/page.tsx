import { Container } from "@/components/Container";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <Hero />
      </Container>
    </>
  );
}
