import { Container } from "@/components/Container";
import Footer from "@/components/footer";
import Card from "@/components/ui/card";
import Quote from "@/components/ui/quote";

interface QuotesInter {
  author: string;
  content: string;
}

const quotes: QuotesInter[] = [
  {
    author: "Linus Torvalds",
    content: "Talk is cheap. Show me the code.",
  },
];

interface Project {
  src: string;

  title: string;
  description: string;
  slug: string;
  githublink: string;
  livelink?: string | null;
}

const projects: Project[] = [
  {
    src: "/foodflux-image-new.jpg",
    title: "FoodFlux",
    description:
      "A completely distributed microservices system demonstrating food delivery services and inter-service communication.",
    slug: "foodflux",
    githublink:
      "https://github.com/ShahuKor/FoodFlux-Distributed-Food-Ordering",
  },
  {
    src: "/quib-image-new.jpg",
    title: "Quib",
    description:
      "A PDF Summarizer that converts any pdf into reels like componenet, which makes it user friendly and interactive. ",
    slug: "quib",
    githublink: "https://github.com/ShahuKor/Quib",
  },
  {
    src: "/cutthatpart-image.jpg",
    title: "CutThatPart",
    description:
      "Share parts of a YouTube videos instantly without downloading it or screen recording, with a personal share link.",
    slug: "cutthatpart",
    githublink: "https://github.com/ShahuKor/CutThatPart",
  },
  {
    src: "/cliply-image-new.jpg",
    title: "Cliply",
    description:
      "AI-powered platform to crop images for social formats, compress videos with minimal quality loss.",
    slug: "cliply",
    githublink: "https://github.com/ShahuKor/About-Cliply",
    livelink: "https://cliply-kohl.vercel.app/",
  },
  {
    src: "/webchat-ai-image-new.jpg",
    title: "WebChat AI",
    description:
      "A RAG chatbot that makes ChatGPT get context of any URL or website, built with Streamlit and LangChain.",
    slug: "webchat-ai",
    githublink: "https://github.com/ShahuKor/WebChat-Ai",
  },
  {
    src: "/learnstack-image.jpg",
    title: "LearnStack",
    description:
      "A modular backend system for an LMS with user management, course delivery, enrollment and payment integration.",
    slug: "learnstack",
    githublink: "https://github.com/ShahuKor/learnstack-backend",
  },
];

export default function Page() {
  return (
    <div className="">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <h2 className="pt-30 text-lg font-semibold tracking-tight text-neutral-800 underline md:pt-20 md:text-2xl dark:text-neutral-100">
          Projects
        </h2>
        <div className="mt-4 mb-2">
          {quotes.map((quote, index) => (
            <Quote key={index} author={quote.author} content={quote.content} />
          ))}
        </div>

        <div className="relative py-10">
          <div className="pointer-events-none absolute -top-0 -right-7 -left-7 h-px border-t border-dashed border-neutral-300 sm:top-0 dark:border-neutral-200/20" />
          <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  slug={project.slug}
                  githublink={project.githublink}
                  livelink={project?.livelink}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
