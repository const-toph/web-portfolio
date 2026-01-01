import {
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  XCircle,
  Facebook,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/Button";

import { useForm, ValidationError } from "@formspree/react";
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
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/5 left-0 w-64 h-64 bg-highlight/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center  max-w-3xl mb-16 mx-auto">
          <span className="text-secondary text-sm font-bold tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl italic font-normal mt-4 mb-6 animate-fade-in animation-delay-100 text-primary/80">
            Let's Connect
            {/* <span className="font-serif italic font-normal text-primary/70">
              {" "}
              make an impact.
            </span> */}
          </h2>
          <p className="text-muted-foreground/50 animate-fade-in animation-delay-200">
            Have a project in mind or just want to chat? I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  disabled={state.submitting}
                  className="w-full px-4 py-3 bg-transparent rounded-xl border border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  disabled={state.submitting}
                  className="w-full px-4 py-3 bg-transparent rounded-xl border border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Message Textarea */}
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
                  disabled={state.submitting}
                  className="w-full px-4 py-3 bg-transparent rounded-xl border border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <Button
                size="lg"
                className="w-full"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? (
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

              {/* Success Message */}
              {state.succeeded && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Thanks! I'll get back to you soon.</span>
                </div>
              )}

              {/* Error Message */}
              {state.errors &&
                state.errors.length > 0 &&
                !state.errors.some((e) => e.field) && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3 animate-fade-in">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span>Oops! Something went wrong. Please try again.</span>
                  </div>
                )}
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="glass py-6 px-3 rounded-2xl border border-border hover:border-primary transition-all group flex items-start gap-4"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="p-3 -mr-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground/70 mb-1">
                      {info.label}
                    </p>
                    <p className="text-primary font-medium group-hover:text-secondary transition-colors line-clamp-4 text-sm sm:text-base md:text-lg">
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
