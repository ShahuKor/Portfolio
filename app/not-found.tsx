import { Container } from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Container className="relative flex min-h-screen items-center justify-center px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-px border border-dashed border-neutral-200 dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-px border border-dashed border-neutral-200 dark:border-neutral-200/20" />
        <div className="flex flex-col items-center text-base font-medium tracking-wide text-(--color-secondary)">
          <p className="text-xl">404 Not Found :( </p>
          <p className="mt-3">I think You have lost your way</p>
          <button className="mt-4 rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-neutral-100 transition-colors ease-in-out hover:bg-neutral-700 dark:bg-neutral-300 dark:text-neutral-800 dark:transition-colors dark:ease-in-out dark:hover:bg-neutral-400">
            <Link href={"/"}>Go Home</Link>
          </button>
        </div>
      </Container>
    </div>
  );
}
