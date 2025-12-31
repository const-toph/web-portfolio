const projects = [
  {
    title: 1,
    description: "desc",
    image: "/projects/project1.png",
    link: "#",
    github: "#",
    tags: ["React", "Node.js"],
  },
  {
    title: 2,
    description: "desc",
    image: "/projects/project2.png",
    link: "#",
    github: "#",
    tags: ["React", "Node.js"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary">
            Projects that
            <span> make an impact.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
