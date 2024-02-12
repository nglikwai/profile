import { useEffect, useRef, useState } from "react";

export const useFadeIn = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return {
    isVisible,
    props: {
      ref,
      className: `transition-opacity`,
      style: { transition: "all 2s", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(40px)"},
    },
  };
};
