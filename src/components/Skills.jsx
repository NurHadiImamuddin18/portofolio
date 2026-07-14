"use client";

import ScrollReveal from "./ScrollReveal";

const columns = [
  {
    title: "Development",
    desc: "Building robust and scalable software solutions. Ensuring high performance and maintainability across both client and server sides.",
    items: [
      "Front-End Engineering",
      "Back-End Architecture",
      "Database Design",
      "RESTful API Development",
      "IoT Integrations",
    ],
  },
  {
    title: "Technologies",
    desc: "Leveraging a modern tech stack to build secure, scalable, and interactive digital experiences from scratch.",
    items: [
      "HTML5, CSS3, JavaScript",
      "PHP, Python, C++",
      "Laravel, Native, React",
      "MySQL, Firebase",
      "Git, Node.js",
    ],
  },
  {
    title: "Soft Skills",
    desc: "Combining technical expertise with strong interpersonal skills to collaborate effectively and lead projects to success.",
    items: [
      "Problem Solving",
      "Critical Thinking",
      "Team Collaboration",
      "Time Management",
      "Leadership",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label" style={{ borderBottom: "none", paddingBottom: 0 }}>Skills & Expertise</h2>
          </div>
        </ScrollReveal>

        <div>
          {columns.map((col, i) => (
            <ScrollReveal delay={i * 0.15} key={col.title}>
              <div className="services-row">
                <h3 className="services-title">{col.title}</h3>
                <div className="services-content">
                  <p>{col.desc}</p>
                  <ul className="services-list">
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
