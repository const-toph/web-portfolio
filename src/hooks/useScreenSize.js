import { useEffect, useState } from "react";

export function useScreenSize() {
  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
    const getScreenType = () => {
      const width = window.innerWidth;
      
      // Tailwind breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px
      if (width < 768) {
        return "mobile";
      } else if (width >= 768 && width < 1024) {
        return "tablet";
      } else {
        return "desktop";
      }
    };

    // Set initial screen type
    setScreenType(getScreenType());

    // Update on resize
    const handleResize = () => {
      setScreenType(getScreenType());
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
}