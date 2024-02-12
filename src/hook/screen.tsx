import { useEffect, useState } from "react";

export const useScreen = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const isMobile = screenWidth < 500;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // Check if window is available
    };

    // Check if window is available before adding event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { screenWidth, isMobile };
};
