import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      src: "/macbook-scroll.png",
      href: "#",
    },
    {
      title: "Project 2",
      src: "/macbook-scroll.png",
      href: "#",
    },
    {
      title: "Project 3",
      src: "/macbook-scroll.png",
      href: "#",
    },
    {
      title: "Project 4",
      src: "/macbook-scroll.png",
      href: "#",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-10 py-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.title}>
            <Image
              src={project.src}
              alt={project.title}
              height={500}
              width={500}
              className="aspect-square rounded-3xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
