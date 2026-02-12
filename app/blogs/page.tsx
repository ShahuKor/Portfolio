import { Container } from "@/components/Container";
import Footer from "@/components/footer";
import CardBlogs from "@/components/ui/cardblogs";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-px border border-dashed border-neutral-200 md:block dark:border-neutral-200/20" />
        <h2 className="pt-30 text-lg font-semibold tracking-tight text-neutral-800 underline md:pt-20 md:text-2xl dark:text-neutral-100">
          Blogs
        </h2>
        <div className="relative pt-8 pb-10">
          <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
              {blogs.map((blog) => (
                <CardBlogs
                  key={blog.slug}
                  src={blog.coverImage}
                  title={blog.title}
                  description={blog.description}
                  slug={blog.slug}
                  date={blog.date}
                  tags={blog.tags}
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
