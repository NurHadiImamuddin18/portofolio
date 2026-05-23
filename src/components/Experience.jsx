"use client";

import { useState } from "react";

import ScrollReveal from "./ScrollReveal";

const career = [
  {
    year: "2023 — 2026",
    title: "Associate Degree in Computer Engineering, Department of Information Technology",
    org: "State Polytechnic of Jember",
  },
  {
    year: "2025",
    title: "An Undergraduate Internship Program as part of the University Academic Curriculum",
    org: "PT Telkom Akses Malang Region",
  },
];

const certifications = [
  {
    year: "2025",
    title: "Junior Cyber Security",
    org: "Indonesian Professional Certification Authority (BNSP), valid from July 2025 until July 2028 with Credential ID TIK 1565 31199 2025",
    pdf: "/portofolio/pdf/01.pdf"
  },
  {
    year: "2025",
    title: "JNS Vocational School Graduate Academy",
    org: "Ministry of Communication and Digital (KOMDIGI) in July 2025 with Credential ID 193105941160-28/VSGA/BLSDM.Komdigi/2025",
    pdf: "/portofolio/pdf/02.pdf"
  },
  {
    year: "2025",
    title: "Micro Skill Digital Talent Scholarsip 2025",
    org: "Ministry of Communication and Digital (KOMDIGI) for a 2-hour training session in July 2025 with Credential ID 2299815850-4633/MS/BLSDM.Komdigi/2025",
    pdf: "/portofolio/pdf/03.pdf"
  },
];

function ExpColumn({ title, items, delay = 0, onOpenModal }) {
  return (
    <ScrollReveal delay={delay}>
      <h3
        className="exp-col-title"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <div>
        {items.map((item, i) => (
          <div className="exp-row" key={i}>
            <span className="exp-year">{item.year}</span>
            <div>
              <h4 className="exp-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {item.title}
                {item.pdf && (
                  <span
                    style={{ cursor: "pointer", display: "inline-flex", color: "var(--text-muted)", transition: "color 0.3s ease" }}
                    onClick={() => onOpenModal(item.pdf)}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--text)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
                    title="View PDF"
                  >
                    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                )}
              </h4>
              <span className="exp-org">{item.org}</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

export default function Experience() {
  const [modalPdf, setModalPdf] = useState(null);
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label">Experience</h2>
          </div>
        </ScrollReveal>

        <div className="exp-grid">
          <ExpColumn title="Education & Career" items={career} delay={0} onOpenModal={setModalPdf} />
          <ExpColumn title="Certifications" items={certifications} delay={0.12} onOpenModal={setModalPdf} />
        </div>

        {modalPdf && (
          <div className="pdf-modal-overlay" onClick={() => setModalPdf(null)}>
            <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="pdf-modal-close" onClick={() => setModalPdf(null)}>✕</button>
              <iframe src={modalPdf} className="pdf-iframe" title="Certificate PDF" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
