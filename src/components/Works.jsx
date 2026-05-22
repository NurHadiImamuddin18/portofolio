"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    num: "01",
    role: "Fullstack",
    name: "Building Mgmt System",
    desc: "Smart building management app with IoT monitoring, attendance, and occupant management features.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "/portofolio/images/building_mgmt_ui.png",
  },
  {
    num: "02",
    role: "Backend",
    name: "RESTful API Service",
    desc: "Scalable backend API service with JWT authentication, rate limiting, and Swagger documentation.",
    tech: ["Node.js", "MongoDB", "REST"],
    image: "/portofolio/images/api_dashboard_ui.png",
  },
  {
    num: "03",
    role: "Fullstack",
    name: "Real-time Chat App",
    desc: "Real-time chat application with group features, media sharing, and push notifications.",
    tech: ["PHP", "WebSocket", "MySQL"],
    image: "/portofolio/images/chat_app_ui.png",
  },
];

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label">03 / Selected Works</h2>
          </div>
        </ScrollReveal>

        <div className="works-list">
          {projects.map((project, i) => (
            <ScrollReveal key={project.num} delay={i * 0.08}>
              <div className="work-card">
                <div className="work-img-wrapper">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={640}
                    height={360}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <div className="work-meta">
                    <span className="work-num" style={{ fontFamily: "var(--font-heading)" }}>
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
