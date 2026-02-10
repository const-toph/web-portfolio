import {
  CheckCircle,
  Mail,
  Phone,
  Send,
  XCircle,
  Github,
  Linkedin,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useRef, useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "christopherjay.manubay@gmail.com",
    href: "mailto:christopherjay.manubay@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 908 639 0237",
    href: "tel:+639086390237",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/const-toph",
    href: "https://github.com/const-toph",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/christopher-jay-manubay-b47943289/",
  },
];

export const Contact = () => {
  const formRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        formRef.current?.reset();
        setShowSuccess(true);
      } else {
        setError("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowSuccess(false);
    setError(null);
    formRef.current?.reset();
  };

  // Success View
  if (showSuccess) {
    return (
      <section id="contact" className="py-21 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
          <div className="absolute bottom-1/5 left-0 w-64 h-64 bg-highlight/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex p-6 rounded-full bg-primary/10 border-2 border-primary/20">
                <CheckCircle className="w-16 h-16 text-primary" />
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-4xl md:text-5xl italic font-normal mb-6 animate-fade-in animation-delay-100 text-primary/80">
              Message Sent!
            </h2>
            <p className="text-lg text-muted-foreground/70 mb-8 animate-fade-in animation-delay-200">
              Thanks for reaching out! I've received your message and will get back to you as soon as possible.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={resetForm}
                className="group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Send Another Message
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const heroSection = document.getElementById('hero') || document.body;
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Back to Home
              </Button>
            </div>

            {/* Contact Info Cards */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in animation-delay-400">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="glass py-4 px-4 rounded-2xl border border-border hover:border-primary transition-all group flex items-center gap-3"
                  >
                    <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground/70">
                        {info.label}
                      </p>
                      <p className="text-primary font-medium group-hover:text-secondary transition-colors text-sm">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Form View (default)
  return (
    <section id="contact" className="py-21 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/5 left-0 w-64 h-64 bg-highlight/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mb-16 mx-auto">
          <span className="text-secondary text-sm font-bold tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl italic font-normal mt-4 mb-6 animate-fade-in animation-delay-100 text-primary/80">
            Let's Connect
          </h2>
          <p className="text-muted-foreground/50 animate-fade-in animation-delay-200">
            Have a project in mind or just want to chat? I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary animate-fade-in animation-delay-300">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-transparent rounded-xl border border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  inputMode="email"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  title="Please enter a valid email address"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-transparent rounded-xl border border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-transparent rounded-xl border border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Submit */}
              <Button
                size="lg"
                className="w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send />
                  </>
                )}
              </Button>

              {/* Error */}
              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3 animate-fade-in">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="glass py-6 px-3 rounded-2xl border border-border hover:border-primary transition-all group flex items-start gap-4"
                >
                  <div className="p-3 -mr-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground/70 mb-1">
                      {info.label}
                    </p>
                    <p className="text-primary font-medium group-hover:text-secondary transition-colors text-sm sm:text-base md:text-lg">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};