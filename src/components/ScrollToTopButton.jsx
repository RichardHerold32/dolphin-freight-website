import { useState, useEffect } from "react";
import { ArrowUpIcon } from "./Icons";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-24 z-50
        w-14 h-14
        rounded-full
        bg-blue-900 text-white
        flex items-center justify-center
        shadow-lg
        hover:bg-blue-800
        active:scale-95
        transition-all duration-300 transform
        ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}
