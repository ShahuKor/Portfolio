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
      <div className="flex flex-col items-center justify-center gap-5 text-xs font-light text-neutral-700/60 md:text-sm dark:text-neutral-300/60">
        <p>Designed and Developed by Shahu Kor</p>

        <div className="flex gap-5">
          {footerlinks.map((footer, index) => (
            <Link
              href={footer.href}
              key={index}
              className="underline-(--color-secondary) text-xs font-medium tracking-wide text-(--color-secondary)/50 hover:underline md:text-sm"
            >
              {footer.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
