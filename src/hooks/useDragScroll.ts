import { useRef, useEffect } from "react";

export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleDown = (e: MouseEvent) => {
      isDown.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.style.cursor = "grabbing";
    };

    const handleLeave = () => {
      isDown.current = false;
      el.style.cursor = "grab";
    };

    const handleUp = () => {
      isDown.current = false;
      el.style.cursor = "grab";
    };

    const handleMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1;
      el.scrollLeft = scrollLeft.current - walk;
    };

    el.addEventListener("mousedown", handleDown);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("mouseup", handleUp);
    el.addEventListener("mousemove", handleMove);

    return () => {
      el.removeEventListener("mousedown", handleDown);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("mouseup", handleUp);
      el.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return ref;
}
