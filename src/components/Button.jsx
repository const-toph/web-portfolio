import { cn } from "@/lib/cn";

export const Button = ({
  className,
  size = "default",
  children,
  onClick,
}) => {
  const baseClasses =
    "cursor-pointer relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/85 shadow-lg shadow-primary/25 inline-block";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    md: "px-7 py-3 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const classes = cn(baseClasses, sizeClasses[size], className);
  const content = (
    <span className="relative flex items-center justify-center gap-2">
      {children}
    </span>
  );

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};
