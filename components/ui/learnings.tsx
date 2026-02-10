import Image from "next/image";
import Link from "next/link";

interface LearningsProps {
  src: string;
  title: string;
  description: string;
  implementationlink: string;
  bloglink?: string | null;
}

export default function Learnings({
  src,
  title,
  description,
  implementationlink,
  bloglink,
}: LearningsProps) {
  return (
    <div className="relative flex w-full flex-col gap-6 py-6 md:flex-row">
      <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
      <div className="relative h-38 w-full overflow-hidden rounded-md bg-neutral-50 md:h-45 md:max-w-70 lg:h-50 dark:bg-neutral-800/40">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain md:object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex-1">
        <div className="flex h-full flex-col gap-4 md:gap-2">
          <h3 className="text-base font-bold tracking-tight text-(--color-primary) md:text-lg">
            {title}
          </h3>
          <p className="flex-wrap text-xs font-medium text-(--color-secondary) md:text-sm lg:text-base">
            {description}
          </p>
          <Link
            href={implementationlink}
            className="text-xs text-neutral-800 underline-offset-4 hover:underline md:text-xs lg:text-sm dark:text-neutral-200"
          >
            View Implementation →
          </Link>
        </div>
      </div>
    </div>
  );
}
