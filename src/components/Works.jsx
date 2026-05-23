"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    num: "01",
    role: "Fullstack",
    name: "Evolving Framework for Integrated Infrastructure Data",
    desc: "An Application for Data Management and Installation Official Reports of New Customers at PT Telkom Akses Malang Region.",
    tech: ["PHP", "MySQL", "Bootstrap", "Python"],
    image: "/portofolio/images/efidi.png",
    link: "https://efidi.montaklo.id/",
  },
  {
    num: "02",
    role: "Fullstack",
    name: "Identification Environment for Trusted Identity Authentication",
    desc: "A Web-Based Application for Monitoring, Managing, and Controlling Rooms and Occupants with Web-Enabled Access Control.",
    tech: ["PHP", "MySQL", "C++"],
    image: "/portofolio/images/identia.png",
    link: "https://identia.montaklo.id/",
  },
  {
    num: "03",
    role: "Fullstack",
    name: "Managing enterprise network integrity and data streams",
    desc: "As the core master portal, Montaklo dynamically integrates various independent data monitoring websites",
    tech: ["React", "Next JS"],
    image: "/portofolio/images/montaklo.png",
    link: "https://montaklo.id/",
  },
];

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label">Selected Works</h2>
          </div>
        </ScrollReveal>

        <div className="works-list">
          {projects.map((project, i) => (
            <ScrollReveal key={project.num} delay={i * 0.08}>
              <div className="work-card">
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-img-wrapper"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1920}
                    height={1080}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block"
                    }}
                  />
                  <span className="work-img-overlay">
                    View
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                </a>
                <div>
                  <div className="work-meta">
                    <span
                      className="work-num"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.num}
                    </span>
                    <span className="work-role">{project.role}</span>
                  </div>
                  <h3
                    className="work-name"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.name}
                  </h3>
                  <p className="work-desc">{project.desc}</p>
                  <div className="work-tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
