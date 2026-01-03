import { Facebook, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/christopher.manubay",
    label: "Facebook",
  },
  { icon: Github, href: "https://github.com/const-toph", label: "Github" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/christopher-jay-manubay-b47943289/",
    label: "LinkedIn",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 border-t border-border glass-strong">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-3">
          {/* Logo/Brand */}
          <div className="text-center cursor-pointer">
            <h2 className="text-2xl font-bold bg-linear-to-r from-primary/60 to-primary bg-clip-text text-transparent">
              {"<"}CJSM
              <span className="text-light-green">.</span>
              {"/>"}
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-primary/50 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-linear-to-r from-transparent via-primary to-transparent" />

          {/* Copyright */}
          <div className="text-center text-primary text-sm">
            <p>
              © {currentYear} Christopher Jay S. Manubay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
