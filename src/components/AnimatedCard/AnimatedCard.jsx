import { useEffect, useRef, useState } from "react";

export default function AnimatedCard({ children, delay = 0, direction = "left" }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.85) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map direction to initial class
  const directionClassMap = {
    left: "-translate-x-20",
    right: "translate-x-20",
    top: "-translate-y-20",
    bottom: "translate-y-20",
  };

  const initialClass = directionClassMap[direction] || "-translate-x-20"; // fallback

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform 
        ${visible ? "translate-x-0 translate-y-0 opacity-100" : `${initialClass} opacity-0`}`}
    >
      {children}
    </div>
  );
}
