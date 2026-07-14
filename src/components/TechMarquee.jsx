"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const row1 = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
];

const row2 = [
  { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
];

const MarqueeRow = ({ items, reverse = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="marquee-tech-wrapper" 
      style={{ overflow: "hidden", display: "flex", width: "100%", padding: "20px 0" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`marquee-tech-track ${reverse ? "reverse" : ""}`} 
        style={{ 
          display: "flex", 
          gap: "50px", 
          paddingRight: "50px",
          animation: `scrollTech 25s linear infinite ${reverse ? "reverse" : "normal"}`,
          animationPlayState: isHovered ? "paused" : "running"
        }}
      >
        {/* Double the items to make the marquee continuous */}
        {[...items, ...items, ...items].map((tech, i) => (
          <div key={`${tech.name}-${i}`} className="tech-item" style={{ display: "flex", alignItems: "center", gap: "15px", flexShrink: 0 }}>
            <div style={{ width: "36px", height: "36px", position: "relative" }}>
               {/* We use standard img for external URLs to avoid Next.js domain config issues */}
              <img src={tech.icon} alt={tech.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: "24px", fontWeight: 500, color: "#000" }}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TechMarquee() {
  return (
    <section 
      className="section section-alt" 
      style={{ padding: "2em 0 5em 0" }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollTech {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .tech-item {
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .tech-item:hover {
          transform: scale(1.15);
        }
      `}} />
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label">Tech Stack</h2>
          </div>
        </ScrollReveal>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  );
}
