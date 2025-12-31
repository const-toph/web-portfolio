import { Button } from "@/components/Button";
import { Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import HoveredName from "@/components/HoveredName";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
  // { href: "#skilltree", label: "SKILL TREE" },
  { href: "#resume", label: "RESUME" },
];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-20 `}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* <a href="#" className="text-xl font-bold tracking-tight hover:text-">
          CJSM<span className="text-primary">.</span>
        </a> */}
        <HoveredName isScrolled={isScrolled} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass-strong rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-primary-foreground hover:text-(--color-light-green) rounded full hover:bg-forest"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">
            <Mail className="h-5 w-5" /> Get in touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=" md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col items-center gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-primary-foreground hover:text-(--color-light-green) rounded-full hover:bg-forest py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button size="md" className="glass-strong">
              <Mail className="h-5 w-5" /> Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
