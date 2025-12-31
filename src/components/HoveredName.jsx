import { useState } from "react";

export default function HoveredName() {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <a
        href="#"
        className="relative text-xl font-bold tracking-tight inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className="inline-block transition-all duration-500 ease-in-out whitespace-nowrap"
          style={{
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "translateY(-100%)" : "translateY(0)",
          }}
        >
          CJSM<span className="text-green-600">.</span>
        </span>

        <span
          className="absolute top-0 left-0 inline-block transition-all duration-500 ease-in-out whitespace-nowrap pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
          }}
        >
          Christopher Jay S. Manubay
        </span>
      </a>
  );
}
