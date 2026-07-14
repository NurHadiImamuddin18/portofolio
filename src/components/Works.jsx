"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import gsap from "gsap";

const projects = [
  {
    num: "01",
    role: "Evolving Framework for Integrated Infrastructure Data",
    name: "Efidi",
    desc: "An Application for Data Management and Installation Official Reports of New Customers at PT Telkom Akses Malang Region.",
    tech: ["PHP", "MySQL", "Bootstrap", "Python"],
    image: "/images/efidi.png",
    link: "https://efidi.montaklo.id/",
    year: "2025",
    bg: "#E0E0E0"
  },
  {
    num: "02",
    role: "Identification Environment for Trusted Identity Authentication",
    name: "Identia",
    desc: "A Web-Based Application for Monitoring, Managing, and Controlling Rooms and Occupants with Web-Enabled Access Control.",
    tech: ["PHP", "MySQL", "C++"],
    image: "/images/identia.png",
    link: "https://identia.montaklo.id/",
    year: "2024",
    bg: "#555555"
  },
  {
    num: "03",
    role: "Managing enterprise network integrity and data streams",
    name: "Montaklo",
    desc: "As the core master portal, Montaklo dynamically integrates various independent data monitoring websites",
    tech: ["React", "Next JS"],
    image: "/images/montaklo.png",
    link: "https://montaklo.id/",
    year: "2023",
    bg: "#8C8C8C"
  },
];

export default function Works() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const previewRef = useRef(null);
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);

  // Mouse tracking logic (exactly as before)
  useEffect(() => {
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let delayedMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let raf;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      if (previewRef.current) {
        delayedMouse.x += (mouse.x - delayedMouse.x) * 0.08;
        delayedMouse.y += (mouse.y - delayedMouse.y) * 0.08;

        gsap.set(previewRef.current, {
          x: delayedMouse.x - 200, // Center the 400x400 box on mouse
          y: delayedMouse.y - 200,
        });
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Intersection Observer to trigger active project on scroll!
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
            setHoveredProject(projects[index]);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Trigger near center
        threshold: 0
      }
    );

    // Second observer for the whole list container to know when to close the modal
    const containerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            setHoveredProject(null);
          }
        });
      },
      { rootMargin: "0px", threshold: 0 }
    );

    const currentItems = itemsRef.current;
    currentItems.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    const listContainer = document.querySelector(".works-list");
    if (listContainer) containerObserver.observe(listContainer);

    return () => {
      currentItems.forEach((item) => {
        if (item) observer.unobserve(item);
      });
      if (listContainer) containerObserver.unobserve(listContainer);
    };
  }, []);

  // Show/Hide preview box
  useEffect(() => {
    if (hoveredProject) {
      gsap.to(previewRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(previewRef.current, { opacity: 0, scale: 0.8, duration: 0.4, ease: "power2.out" });
    }
  }, [hoveredProject]);

  // Slide to correct image
  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        yPercent: -activeIndex * 100,
        duration: 0.5,
        ease: "power3.inOut"
      });
    }
  }, [activeIndex]);

  return (
    <section className="section" id="works" style={{ backgroundColor: "#fff", paddingTop: "5em" }}>
      <div className="container" onMouseLeave={() => setHoveredProject(null)}>
        
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label" style={{ borderBottom: "none", paddingBottom: 0, color: "rgba(28,29,32,0.6)" }}>Recent work</h2>
          </div>
        </ScrollReveal>

        <div className={`works-list ${hoveredProject ? "is-hovering" : ""}`}>
          {projects.map((project, i) => (
            <div 
              key={project.num}
              ref={(el) => (itemsRef.current[i] = el)}
              data-index={i}
              style={{
                borderTop: "1px solid var(--color-border)",
                borderBottom: i === projects.length - 1 ? "1px solid var(--color-border)" : "none",
                position: "relative"
              }}
            >
              <ScrollReveal delay={i * 0.1}>
                <a 
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`work-item ${hoveredProject?.num === project.num ? "active" : ""}`}
                  onMouseEnter={() => {
                    setActiveIndex(i);
                    setHoveredProject(project);
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "4vw 0",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    opacity: hoveredProject ? (hoveredProject.num === project.num ? 1 : 0.3) : 1,
                    transform: hoveredProject && hoveredProject.num === project.num ? "translateX(20px)" : "translateX(0)",
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  <h3 style={{ fontSize: "clamp(40px, 6vw, 100px)", fontWeight: 400, letterSpacing: "-0.03em", margin: 0, lineHeight: 1 }}>{project.name}</h3>
                  <span style={{ fontSize: "16px", fontWeight: 400, textAlign: "right", maxWidth: "350px" }}>{project.role}</span>
                </a>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Floating Preview Modal (Layout & shape unchanged) */}
        <div 
          ref={previewRef}
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "400px", height: "400px",
            pointerEvents: "none",
            zIndex: 50,
            opacity: 0,
            transform: "scale(0.8)",
            willChange: "transform",
            overflow: "hidden", 
          }}
        >
          {/* Vertical Slider Container */}
          <div 
            ref={sliderRef}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              willChange: "transform"
            }}
          >
            {projects.map((proj) => (
              <div 
                key={proj.num}
                style={{
                  width: "100%",
                  height: "100%",
                  flexShrink: 0, 
                  backgroundColor: proj.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div style={{
                  position: "relative",
                  width: "calc(100% - 120px)",
                  aspectRatio: "16/9",
                }}>
                  <Image
                    src={proj.image}
                    alt={proj.name}
                    fill
                    style={{ objectFit: "contain" }}
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* View label */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px", height: "80px",
            backgroundColor: "var(--color-blue)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: "14px", fontWeight: 500, zIndex: 2
          }}>
            View
          </div>
        </div>
      </div>
    </section>
  );
}
