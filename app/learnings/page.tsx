import { Container } from "@/components/Container";
import Footer from "@/components/footer";
import Learnings from "@/components/ui/learnings";
import Quote from "@/components/ui/quote";

interface QuotesInter {
  author: string;
  content: string;
}

interface RecentLearnings {
  src: string;
  title: string;
  description: string;
  implementationlink: string;
  bloglink?: string | null;
}

const quotes: QuotesInter[] = [
  {
    author: "Albert Einstein",
    content: "Once you stop learning, you start dying",
  },
];

const learned: RecentLearnings[] = [
  {
    src: "/segment-image.jpg",
    title: "Event-Driven Video Transcoding Pipeline (AWS, FFmpeg, ECS)",
    description:
      "An event-driven video transcoding pipeline where uploads to Amazon S3 trigger automatic conversion into multiple resolutions using FFmpeg on ECS (Fargate). Designed to be decoupled, scalable, and fully cloud-native.",
    implementationlink: "https://github.com/ShahuKor/Segmenter",
  },
  {
    src: "/learnstack-image.png",
    title:
      "Scalable Backend System for Learning Platforms with Payment Integration",
    description:
      "Implemented a core backend architecture for a learning platform, orchestrating identity, course management, RBAC, enrollment flows, and payments using Node.js, MongoDB, and Stripe/Razorpay.",
    implementationlink: "https://github.com/ShahuKor/learnstack-backend",
  },
];

export default function Page() {
  return (
    <div className="pt-30 md:pt-20">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <h2 className="text-lg font-semibold tracking-tight text-neutral-800 underline md:text-2xl dark:text-neutral-100">
          Learnings
        </h2>
        <div className="mt-4 mb-2">
          {quotes.map((quote, index) => (
            <Quote key={index} author={quote.author} content={quote.content} />
          ))}
        </div>
        <h3 className="pt-7 text-sm font-medium tracking-wide text-(--color-primary) md:text-base">
          Continuous learning is core to my growth as a developer.
        </h3>
        <h3 className="mt-10 text-sm font-medium tracking-wide text-(--color-secondary) italic md:text-base">
          Here's what I have been learning recently
        </h3>
        <div className="relative">
          {learned.map((learn, index) => (
            <Learnings
              key={index}
              src={learn.src}
              title={learn.title}
              description={learn.description}
              implementationlink={learn.implementationlink}
            />
          ))}
        </div>
        <Footer />
      </Container>
    </div>
  );
}
