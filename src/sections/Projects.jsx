import {
  ArrowUpRight,
  Building2,
  Calendar,
  Github,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButon";

const projects = [
  {
    title: "VYSMO - Visitor Monitoring System",
    description: "desc",
    image: "/projects/project1.jpg",
    link: "#",
    github: "#",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "XAMPP"],
    start_date: "2023-05",
    end_date: "2023-11",
    project_type: "Capstone Project",
    organization: "Nueva Ecija University of Science and Technology",
  },
  {
    title: "ICTU Repair and Inventory Management System",
    description: "desc",
    image: "/projects/project2.jpg",
    link: "#",
    github: "#",
    tags: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "AJAX",
      "MySQL",
      "XAMPP",
    ],
    start_date: "2024-01",
    end_date: "2024-05",
    project_type: "Internship",
    organization: "DepEd SDO - ICTU Department",
  },
  {
    title: "Blingdream.co Website",
    description: "desc",
    image: "/projects/project3.jpg",
    link: "#",
    github: "#",
    tags: ["React", "Node.js"],
    project_type: "Client Project",
    organization: "Small Business Name",
  },
  {
    title: "Personal Portfolio Website",
    description: "desc",
    image: "/projects/project4.jpg",
    link: "#",
    github: "#",
    tags: ["React", "Tailwind CSS"],
    project_type: "Company Project",
    organization: "Avinya Inc.",
  },
];

const formatDate = (dateString) => {
  const [year, month] = dateString.split("-");
  const date = new Date(year, month - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export const Projects = () => {
  return (
    <section id="projects" className="py-22 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/5 left-0 w-64 h-64 bg-highlight/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary text-sm font-bold tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl italic font-normal mt-4 mb-6 animate-fade-in animation-delay-100 text-primary/80">
            Projects & Experience
          </h2>
          <p className="text-muted-foreground/50 animate-fade-in animation-delay-200">
            Full-stack applications developed through client work, professional
            projects, and academic milestones—demonstrating end-to-end
            development capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass-strong hover:bg-secondary text-secondary hover:text-primary-foreground transition-all transform hover:scale-110"
                    aria-label="View project"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass-strong hover:bg-secondary text-secondary hover:text-primary-foreground transition-all transform hover:scale-110"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm text-xs font-medium text-primary-foreground">
                    {project.project_type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title and Arrow */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-primary/70 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-primary/50 group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 
                    transition-all flex-shrink-0"
                  />
                </div>

                {/* Organization and Date */}
                <div className="flex flex-col gap-2 text-xs text-muted-foreground/70">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{project.organization}</span>
                  </div>
                  {project.start_date && project.end_date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {formatDate(project.start_date)} -{" "}
                        {formatDate(project.end_date)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 rounded-full bg-surface/50 text-xs font-medium border border-border/50 text-muted-foreground hover:border-highlight/50 hover:text-primary transition-all"
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
      <div className="text-center mt-16 animate-fade-in animation-delay-500">
        <AnimatedBorderButton>
          View All Projects
          <ArrowUpRight className="w-5 h-5" />
        </AnimatedBorderButton>
      </div>
    </section>
  );
};
