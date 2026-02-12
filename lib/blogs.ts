import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "app/data/blogs");

export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage: string;
};

export type Blog = BlogMeta & {
  content: string;
};

// Get all blogs (for the listing page)
export function getAllBlogs(): BlogMeta[] {
  const fileNames = fs.readdirSync(blogsDirectory);

  const blogs = fileNames
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, ""); // "how-to-work-with-ai"
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents); // reads the frontmatter

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags ?? [],
        coverImage: data.coverImage ?? "/blogs/default.jpg",
      };
    });

  // Sort by date, newest first
  return blogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get a single blog by slug (for the detail page)
export function getBlogBySlug(slug: string): Blog | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags ?? [],
      content, // this is the raw MDX content (below the frontmatter)
      coverImage: data.coverImage ?? "",
    };
  } catch {
    return null; // file doesn't exist
  }
}
