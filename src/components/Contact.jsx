"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData(e.target);
      const host = "api.web3forms.com";
      const path = "/submit";
      const url = `https://${host}${path}`;

      const res = await fetch(url, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <ScrollReveal>
            <h2 className="contact-title" style={{ fontFamily: "var(--font-heading)" }}>
              Let&apos;s build<br />something<br />exceptional.
            </h2>
            <div className="contact-links">
              <a href="mailto:nurhadiimamuddin@gmail.com" className="contact-link" style={{ fontFamily: "var(--font-heading)" }}>Email</a>
              <a href="https://linkedin.com/in/nur-hadi-imamuddin-0b2b85377/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ fontFamily: "var(--font-heading)" }}>LinkedIn</a>
              <a href="https://github.com/NurHadiImamuddin18/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ fontFamily: "var(--font-heading)" }}>GitHub</a>
              <a href="https://www.instagram.com/hyadiv_/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ fontFamily: "var(--font-heading)" }}>Instagram</a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""} />
              
              <div className="input-group">
                <input type="text" name="name" required placeholder=" " id="nameInput" autoComplete="name" />
                <label htmlFor="nameInput">Your Name</label>
                <div className="input-line"></div>
              </div>

              <div className="input-group">
                <input type="email" name="email" required placeholder=" " id="emailInput" autoComplete="email" />
                <label htmlFor="emailInput">Your Email</label>
                <div className="input-line"></div>
              </div>

              <div className="input-group">
                <textarea name="message" rows={1} required placeholder=" " id="messageInput"></textarea>
                <label htmlFor="messageInput">Your Message</label>
                <div className="input-line"></div>
              </div>

              <button type="submit" className="btn btn-outline" disabled={status === "sending"} style={{ alignSelf: "flex-start", marginTop: "8px" }}>
                {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Error — Try Again"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
