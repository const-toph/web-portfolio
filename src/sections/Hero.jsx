import { Button } from "@/components/Button";
import {
  Briefcase,
  ChevronDown,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
  ScrollText,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButon";
import { useScreenSize } from "@/hooks/useScreenSize";

const skills = [
  "Git",
  "Github",
  "Zod",
  "Scalar",
  "Swagger",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Zustand",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Bun",
  "Hono",
  "Express.js",
  "React.js",
  "Shadcn UI",
  "Ant Design",
  "Tanstack Query",
  "Tailwind CSS",
];

export const Hero = () => {
  const screenType = useScreenSize();

  return (
    <section className="relative  flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        {/* <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        /> */}
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none animate-fade-in animation-delay-500">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-dark-forest)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 15
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
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

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in animation-delay-100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/75 text-sm text-background">
                <span className="w-2 h-2 bg-light-green rounded-full text-white" />
                Full-stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7x leading-tight animate-fade-in animation-delay-200">
                Building great apps, <br />
                <span className="font-heading italic font-extralight text-primary">
                  one at a time
                </span>
              </h1>
              <p className="text-xl text-black/70 max-w-lg animate-fade-in animation-delay-300  ">
                I'm a full stack developer passionate about creating powerful
                web applications and continuously improving with every project.
              </p>
            </div>

            {/* CTA Buttons - Call to Action */}

            <div className="flex flex-wrap gap-3 items-center animate-fade-in animation-delay-300">
              <Button
                size={screenType == "mobile" ? "sm" : "md"}
                className="rounded-3xl bg-[#0F2818] hover:bg-[#1A3A2A] text-white"
                onClick={() => window.location.href = '#projects'}
              >
                <Briefcase className="size-4 mr-2" />
                View my work
              </Button>

              <AnimatedBorderButton
                size={screenType == "mobile" ? "sm" : "md"}
                onClick={() => window.location.href = '#resume'}
              >
                <ScrollText className="w-5 h-5" /> View Resume
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span>Follow me: </span>
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/christopher.manubay",
                },
                { icon: Github, href: "https://github.com/const-toph" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/christopher-jay-manubay-b47943289/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full bg-background hover:bg-primary/30 hover:text-primary transition-all duration-300"
                >
                  {<social.icon />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="relative glass rounded-3xl p-2 glow-border">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-3xl animate-pulse" />
                <img
                  src="/me.png"
                  alt="Christopher Jay S. Manubay"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Skill Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className={`flex ${screenType == "mobile" ? "animate-marquee-fast" : "animate-marquee"}`}>
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div> */}
    </section>
  );
};
