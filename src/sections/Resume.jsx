import { Download, Briefcase, GraduationCap, Award, User } from "lucide-react";
import { Button } from "@/components/Button";

const resumeData = {
  summary: {
    title: "Professional Summary",
    content: `
      Backend-focused Full Stack Developer with 2+ years of production experience. 
      Proficient in TypeScript, Node.js, PostgreSQL, and REST API design. 
      Building frontend skills in React.js and modern tooling. 
      Passionate about secure systems, database architecture, and writing maintainable code`,
  },
  experience: [
    {
      title: "Backend Developer",
      company: "Avinya Inc.",
      location: "Taytay, Rizal (On-site)",
      period: "2024 - Present",
      description:
        "Developing and maintaining full-stack web applications using modern technologies.",
      responsibilities: [
        `Led the development and deployment of institutional systems including a Learning Management System, 
ID Management System with SMS integration, and RFID-based Attendance Kiosk with Parent Portal.`,
        `Designed and implemented relational database schemas, backend APIs, and secure authentication workflows. `,
        `Integrated backend APIs with frontend applications by handling HTTP requests, state management, and dynamic data 
rendering. `,
        `Deployed applications to production, ensuring system reliability and performance.`,
      ],
    },
    {
      title: "Full Stack Web Developer Internship",
      company: "DepEd SDO - ICTU Department",
      location: "Nueva Ecija, Philippines (On-site)",
      period: "Jan 2024 - May 2024",
      description:
        "Developed repair and inventory management system for IT department.",
      responsibilities: [
        `Led an internship team in developing a Repair and Inventory Management System for the ICTU Department, streamlining 
repair requests and asset tracking. `,
        `Built responsive and dynamic user interfaces integrated with backend services using PHP, jQuery, AJAX, HTML, and CSS.`,
        `Enhanced user experience by optimizing workflows, ensuring smooth functionality across repair and inventory operations.`,
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Nueva Ecija University of Science and Technology",
      location: "Nueva Ecija, Philippines",
      period: "2020 - 2024",
      description: "Academic Excellence Awardee (Consistent Dean’s Lister)",
    },
  ],
};

export const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual PDF file path
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Christopher_Manubay_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-25 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const shapes = ["cube", "bracket", "tag", "code"];
          const shape = shapes[i % shapes.length];
          const size = 40 + Math.random() * 60;

          return (
            <div
              key={i}
              className="absolute opacity-20 hover:opacity-40 transition-opacity duration-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `float-3d ${
                  15 + Math.random() * 20
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `perspective(1000px) rotateX(${
                  Math.random() * 360
                }deg) rotateY(${Math.random() * 360}deg)`,
              }}
            >
              {shape === "cube" && (
                <div
                  className="w-full h-full border-2 border-primary/40 bg-primary/10 rounded-lg backdrop-blur-sm"
                  style={{ transform: "rotateX(45deg) rotateZ(45deg)" }}
                />
              )}
              {shape === "bracket" && (
                <div
                  className="text-primary/40 font-mono font-bold flex items-center justify-center"
                  style={{
                    fontSize: `${size * 0.8}px`,
                    transform: "rotateY(30deg)",
                  }}
                >
                  {"{ }"}
                </div>
              )}
              {shape === "tag" && (
                <div
                  className="text-primary/40 font-mono font-bold flex items-center justify-center"
                  style={{
                    fontSize: `${size * 0.6}px`,
                    transform: "rotateX(20deg) rotateZ(-10deg)",
                  }}
                >
                  {"</>"}
                </div>
              )}
              {shape === "code" && (
                <div
                  className="w-full h-full border-2 border-primary/40 bg-primary/5 rounded backdrop-blur-sm p-2"
                  style={{ transform: "rotateY(-20deg) rotateX(10deg)" }}
                >
                  <div className="w-full h-1 bg-primary/30 rounded mb-1" />
                  <div className="w-3/4 h-1 bg-primary/20 rounded mb-1" />
                  <div className="w-5/6 h-1 bg-primary/25 rounded" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 max-w-5xl mx-auto">
          <div>
            <span className="text-secondary text-sm font-bold tracking-wider uppercase">
              Resume
            </span>
            <h2 className="text-4xl md:text-5xl italic font-normal mt-2 text-primary/80">
              My Experience
            </h2>
            <p className="text-muted-foreground/50 mt-2">
              Full Stack Developer with expertise in modern web technologies
            </p>
          </div>
          <Button size="default" onClick={handleDownload}>
            <Download className="w-5 h-5" />
            Download PDF
          </Button>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Professional Summary */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-primary/90">
                  {resumeData.summary.title}
                </h3>
                <p className="text-muted-foreground/70 leading-relaxed">
                  {resumeData.summary.content}
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary/90">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6 ml-14">
              {resumeData.experience.map((job, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/30 pl-6 pb-6 last:pb-0"
                >
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <h4 className="text-lg font-semibold text-primary">
                        {job.title}
                      </h4>
                      <p className="text-muted-foreground/70 text-sm">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface/50 text-xs font-medium border border-border/50 text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground/60 text-sm mb-3">
                    {job.description}
                  </p>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground/70 flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary/90">
                Education
              </h3>
            </div>

            <div className="ml-14">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-6">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <h4 className="text-lg font-semibold text-primary">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground/70 text-sm">
                        {edu.school}
                      </p>
                      <p className="text-muted-foreground/60 text-xs">
                        {edu.location}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-surface/50 text-xs font-medium border border-border/50 text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground/60 text-sm mt-2">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          {/* <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary/90">
                Certifications & Achievements
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 ml-14">
              {resumeData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-surface/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-semibold text-primary text-sm mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground/70">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Skills (Optional) */}
          {/* <div className="glass rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold mb-6 text-primary/90">
              Technical Skills
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground/70 mb-2">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-surface/50 text-xs font-medium border border-border/50 text-muted-foreground hover:border-highlight/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground/70 mb-2">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-surface/50 text-xs font-medium border border-border/50 text-muted-foreground hover:border-highlight/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground/70 mb-2">
                  Tools & Other
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-surface/50 text-xs font-medium border border-border/50 text-muted-foreground hover:border-highlight/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          {/* CTA */}
          <div className="glass rounded-2xl p-8 border border-primary/20 text-center bg-primary/5">
            <h3 className="text-2xl font-semibold mb-3 text-primary">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground/70 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" href="#contact">
                Get in Touch
              </Button>
              <Button size="lg" onClick={handleDownload}>
                <Download className="w-5 h-5" />
                View Full Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
