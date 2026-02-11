import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface CardProps {
  src: string;
  title: string;
  description: string;
  slug: string;
  githublink: string;
  livelink?: string | null;
}

export default function Card({
  src,
  title,
  description,
  slug,
  githublink,
  livelink,
}: CardProps) {
  return (
    <div className="flex h-90 w-78 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md md:h-99 md:w-86 lg:h-110 lg:w-95 dark:border-neutral-300/20 dark:bg-[#121212] dark:shadow-none">
      <div className="relative h-58 w-full overflow-hidden bg-neutral-100 md:h-64 lg:h-72">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col p-4">
        <h3 className="text-base font-medium tracking-tight text-(--color-primary) md:text-lg">
          {title}
        </h3>

        <p className="py-2 text-sm font-medium text-(--color-secondary) md:text-base">
          {description}
        </p>

        <div>
          <p className="py-2 text-sm font-medium text-(--color-secondary) md:text-sm">
            Links
          </p>
          <div className="flex gap-2 py-2">
            <Link href={githublink}>
              <FaGithub className="size-4 md:size-6" />
            </Link>
            {livelink && (
              <Link href={livelink}>
                <CiGlobe className="size-4 md:size-6" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-7">
        <Link
          href={`/projects/${slug}`}
          className="text-xs text-neutral-800 underline-offset-4 hover:underline md:text-sm dark:text-neutral-200"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
