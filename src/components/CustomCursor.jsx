"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    let mouse = { x: 0, y: 0 };
    let delayedMouse = { x: 0, y: 0 };

    const manageMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const manageMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setIsHovered(true);
        if (target.dataset.cursor === "view") {
          setCursorText("View");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const animate = () => {
      // Lerp
      delayedMouse.x += (mouse.x - delayedMouse.x) * 0.15;
      delayedMouse.y += (mouse.y - delayedMouse.y) * 0.15;

      gsap.set(cursorRef.current, {
        x: delayedMouse.x,
        y: delayedMouse.y,
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver);
    let raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor-dot ${isHovered ? (cursorText === "View" ? "cursor-view" : "cursor-hover") : ""}`}
    >
      <span ref={cursorTextRef} className="cursor-text">
        {cursorText}
      </span>
    </div>
  );
}
