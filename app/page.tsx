import { Container } from "@/components/Container";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Container className="min-h-screen p-4 md:p-10">
        <Hero />
      </Container>
    </>
  );
}
