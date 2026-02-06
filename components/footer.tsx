import Link from "next/link";

export default function Footer() {
  const footerlinks = [
    { title: "About Me", href: "/about-me" },
    { title: "Projects", href: "/projects" },
    { title: "Learnings", href: "/learnings" },
    { title: "Blog", href: "/blog" },
  ];
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center gap-5 font-light text-neutral-700 dark:text-neutral-300">
        <p>Designed and Developed by Shahu Kor</p>

        <div className="flex gap-5">
          {footerlinks.map((footer, index) => (
            <Link
              href={footer.href}
              key={index}
              className="underline-(--color-secondary) text-base font-medium tracking-wide text-(--color-secondary) hover:underline"
            >
              {footer.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
