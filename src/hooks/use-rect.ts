import { useEffect, useState } from "react";

export function useRect<T extends HTMLElement>(ref: React.RefObject<T>) {
  // Initialize state with undefined width/height so server and client renders match
  const [rect, setRect] = useState<DOMRect>();

  useEffect(() => {
    if (!ref.current) return;

    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setRect(ref.current?.getBoundingClientRect());
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return rect;
}
