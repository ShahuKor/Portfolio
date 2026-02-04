import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface CardProps {
  src: string;
  title: string;
  description: string;
  projectlink: string;
  githublink: string;
  livelink?: string | null;
}

export default function Card({
  src,
  title,
  description,
  projectlink,
  githublink,
  livelink,
}: CardProps) {
  return (
    <div className="flex h-130 w-95 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-neutral-300/20 dark:bg-[#121212] dark:shadow-none">
      {/* Image Section */}
      <div className="relative h-58 w-full overflow-hidden bg-neutral-100">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Title */}
        <h3 className="text-xl font-medium tracking-tight text-(--color-primary)">
          {title}
        </h3>

        <p className="flex-1 text-base font-medium text-(--color-secondary)">
          {description}
        </p>

        <div>
          <p className="pb-3 text-base font-medium text-(--color-secondary)">
            Links
          </p>
          <div className="flex gap-2">
            <Link href={githublink}>
              <FaGithub className="size-6" />
            </Link>
            {livelink && (
              <Link href={livelink}>
                <CiGlobe className="size-6" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-7">
        <Link
          href={projectlink}
          className="text-sm font-medium text-neutral-800 underline-offset-4 hover:underline dark:text-neutral-200"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
