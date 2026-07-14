"use client";

export default function Marquee({ children, speed = 20 }) {
  return (
    <div className="marquee-wrapper">
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
