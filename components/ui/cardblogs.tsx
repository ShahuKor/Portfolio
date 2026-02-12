import Image from "next/image";
import Link from "next/link";

interface CardProps {
  src: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
}

export default function CardBlogs({
  src,
  title,
  description,
  slug,
  date,
  tags,
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

        <p className="py-2 text-xs font-medium text-(--color-secondary) md:text-sm">
          {description}
        </p>
        <div className="text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
          {date}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              className="dark:text-netural-800 rounded bg-[#121212] px-2 py-1 text-[11px] text-neutral-200 md:text-xs dark:bg-neutral-700/60"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-7">
        <Link
          href={`/blogs/${slug}`}
          className="text-[11px] text-neutral-800 underline-offset-4 hover:underline md:text-xs dark:text-neutral-200"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
