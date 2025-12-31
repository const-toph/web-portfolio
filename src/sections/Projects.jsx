import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButon";

const projects = [
  {
    title: 1,
    description: "desc",
    image: "/projects/project1.jpg",
    link: "#",
    github: "#",
    tags: ["React", "Node.js"],
  },
  {
    title: 2,
    description: "desc",
    image: "/projects/project2.jpg",
    link: "#",
    github: "#",
    tags: ["React", "Node.js"],
  },

  {
    title: 2,
    description: "desc",
    image: "/projects/project2.jpg",
    link: "#",
    github: "#",
    tags: ["React", "Node.js"],
  },

  {
    title: 2,
    description: "desc",
    image: "/projects/project2.jpg",
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
            Projects & Experience
            <span className="font-serif italic font-normal text-primary/70">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground/50 animate-fade-in animation-delay-200">
            Full-stack applications developed through client work, professional
            projects, and academic milestones—demonstrating end-to-end
            development capabilities. 
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-rows-1 group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full-h-full object-cover transition-transform duration-700 group-hover:scale-120"
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass-strong hover:bg-secondary text-secondary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-secondary text-secondary hover:text-primary-foreground transition-all"
                  >
                    <Github />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between ">
                  <h3 className="text-xl font-semibold text-primary/50 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-primary/50 group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 
                    transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border text-white hover:border-highlight transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}

      <div className="text-center mt-12 animate-fade-in animation-delay-500">
        <AnimatedBorderButton>
          View All Projects
          <ArrowUpRight className="w-5 h-5" />
        </AnimatedBorderButton>
      </div>
    </section>
  );
};
