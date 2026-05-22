"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  const details = [
    { label: "Name", value: "Nur Hadi Imamuddin" },
    { label: "Date of Birth", value: "January 18, 2005" },
    { label: "Location", value: "East Java, Indonesia" },
    { label: "Email", value: "nurhadiimamuddin@gmail.com" },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label">01 / About</h2>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal>
            <p className="about-lead" style={{ fontFamily: "var(--font-heading)" }}>
              I bridge the gap between complex engineering and elegant design.
            </p>
            <p className="about-body">
              My work involves building robust, user-centric systems—ranging
              from full-stack web applications to smart IoT integrations. I
              believe that true simplicity requires the highest level of
              craftsmanship.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="details-list">
              {details.map((d) => (
                <div className="detail-item" key={d.label}>
                  <span className="detail-label">{d.label}</span>
                  <span className="detail-value">{d.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
