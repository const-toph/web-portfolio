import { useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function HoveredName({ isScrolled }) {
  const [isHovered, setIsHovered] = useState(false);

  const screenType = useScreenSize();

  // Only show full name on hover if NOT on tablet
  const shouldShowFullName = isHovered && screenType !== "tablet";

  return (
    <a
      href="#"
      className="relative text-xl font-bold tracking-tight inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Initials */}
      <span
        className={`inline-block transition-all duration-500 ease-in-out whitespace-nowrap ${
          isScrolled && "text-white/80"
        }`}
        style={{
          opacity: shouldShowFullName ? 0 : 1,
          transform: shouldShowFullName ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        {isScrolled && "<"}CJSM
        <span
          className={`${isScrolled ? "text-light-green" : "text-green-600"}`}
        >
          .
        </span>
        {isScrolled && "/>"}
      </span>

      {/* Full name */}
      <span
        className="absolute top-0 left-0 inline-block transition-all duration-500 ease-in-out whitespace-nowrap pointer-events-none text-base md:text-[17px]"
        style={{
          opacity: shouldShowFullName ? 1 : 0,
          transform: shouldShowFullName ? "translateY(0)" : "translateY(100%)",
        }}
      >
        Christopher Jay S. Manubay
      </span>
    </a>
  );
}
