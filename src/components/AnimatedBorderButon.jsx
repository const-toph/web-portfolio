import { cn } from "@/lib/cn";

export const AnimatedBorderButton = ({
  size = "default",
  children,
  className,
  onClick,
}) => {
  const baseClasses = `relative bg-transparent border border-border text-primary
    hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2
    focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
    group
    font-semibold rounded-full overflow-visible animated-border`;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    md: "px-7 py-3 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const classes = cn(baseClasses, sizeClasses[size], className);

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  );
  return (
    <button className={classes} onClick={onClick}>
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30, 1 A 29,29 0 0 0 1, 30 L 1, 30 A 29,29 0 0 0 30, 59 L 170, 59 A 29, 29 0 0 0 199, 30 L 199, 30 A 29, 29 0 0 0 170, 1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth={2}
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="butt"
          strokeLinejoin="butt"
          className="animated-border-path"
        />
      </svg>

      {content}
    </button>
  );
};
