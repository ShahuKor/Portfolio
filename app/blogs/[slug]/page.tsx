import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/Container";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <Container>
      <div className="relative">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="relative pb-5">
          <main className="mx-auto max-w-3xl px-8 py-10 pt-25 sm:px-6 md:px-7 md:pt-25 lg:px-0">
            <div className="pb-5">
              <Link href={"/blogs"}>
                <button className="flex items-center gap-1.5 rounded-md py-1.5 text-xs font-medium text-neutral-800 underline transition-colors ease-in-out hover:cursor-pointer md:text-sm dark:text-neutral-200 dark:transition-colors dark:ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                  Go Back
                </button>
              </Link>
            </div>
            <p className="text-sm text-gray-400">{blog.date}</p>
            <div className="mt-2">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={900}
                height={200}
                className="h-40 w-full rounded-lg object-cover sm:h-60 lg:h-80"
              />
            </div>

            <h1 className="mt-4 mb-6 text-3xl font-bold">{blog.title}</h1>

            <article className="prose prose-neutral dark:prose-invert max-w-none">
              <MDXRemote source={blog.content} />
            </article>
            <h3 className="pt-10 text-xs font-medium tracking-wide text-(--color-secondary) italic md:text-sm">
              - Written by Shahu Kor
            </h3>
          </main>

          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
        </div>

        <Footer />
      </div>
    </Container>
  );
}
