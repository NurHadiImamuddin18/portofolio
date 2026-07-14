"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setStatusMsg("Pesan berhasil dikirim via WhatsApp! ✅");
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
      } else {
        setStatus("error");
        setStatusMsg(data.error || "Gagal mengirim pesan.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMsg("Terjadi kesalahan jaringan.");
    }
  };

  return (
    <section className="contact-section" id="contact" style={{ backgroundColor: "#1C1D20", color: "#fff", paddingTop: "10em", paddingBottom: "2em" }}>
      <div className="container">
        
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <Image src="/images/adi.png" alt="Nur Hadi Imamuddin" fill style={{ objectFit: "cover" }} />
              </div>
              <h2 style={{ fontSize: "clamp(50px, 8vw, 120px)", fontWeight: 400, margin: 0, letterSpacing: "-0.03em", lineHeight: 1 }}>
                Let's work
              </h2>
            </div>
            <h2 style={{ fontSize: "clamp(50px, 8vw, 120px)", fontWeight: 400, margin: 0, letterSpacing: "-0.03em", lineHeight: 1 }}>
              together
            </h2>
          </ScrollReveal>
        </div>

        <div style={{ marginTop: "100px", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "40px", position: "relative" }}>
          
          <div className="contact-layout" style={{ marginTop: 0, borderTop: "none", paddingTop: 0 }}>
            <ScrollReveal delay={0.1}>
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <span className="input-num">01</span>
                    <label style={{ display: "none" }} htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="What's your name?" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="input-group">
                    <span className="input-num">02</span>
                    <label style={{ display: "none" }} htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="What's your email?" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="input-group">
                    <span className="input-num">03</span>
                    <label style={{ display: "none" }} htmlFor="whatsapp">WhatsApp</label>
                    <input type="tel" id="whatsapp" name="whatsapp" required placeholder="Your WhatsApp number (e.g. 6281234567890)" value={formData.whatsapp} onChange={handleChange} />
                  </div>
                  <div className="input-group">
                    <span className="input-num">04</span>
                    <label style={{ display: "none" }} htmlFor="message">Message</label>
                    <textarea id="message" name="message" required placeholder="Write your message" rows="2" value={formData.message} onChange={handleChange} />
                  </div>
                  
                  {/* Send Message Button */}
                  <div style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "20px" }}>
                    <Magnetic>
                      <button type="submit" disabled={status === "loading"} style={{
                        padding: "18px 40px",
                        borderRadius: "50px",
                        border: "none",
                        backgroundColor: status === "loading" ? "rgba(255,255,255,0.6)" : "#fff",
                        color: "#1C1D20",
                        fontSize: "16px",
                        fontWeight: 500,
                        cursor: status === "loading" ? "not-allowed" : "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: "background-color 0.3s ease"
                      }}>
                        {status === "loading" ? (
                          <>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: "spin 1s linear infinite" }}>
                              <circle cx="12" cy="12" r="10" stroke="#1C1D20" strokeWidth="2" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="#1C1D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </>
                        )}
                      </button>
                    </Magnetic>

                    {/* Status Message */}
                    {statusMsg && (
                      <span style={{ 
                        fontSize: "14px", 
                        color: status === "success" ? "#4CAF50" : "#ff5252",
                        animation: "fadeIn 0.3s ease"
                      }}>
                        {statusMsg}
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", margin: 0, textTransform: "uppercase" }}>Contact Details</p>
                  <a href="mailto:nurhadiimamuddin@gmail.com" className="nav-link-inline" style={{ fontSize: "clamp(16px, 1.5vw, 24px)", textDecoration: "none" }}>
                    nurhadiimamuddin@gmail.com
                  </a>
                  <a href="tel:+6281234567890" className="nav-link-inline" style={{ fontSize: "clamp(16px, 1.5vw, 24px)", textDecoration: "none" }}>
                    +62 812 3456 7890
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Magnetic Blue Button Absolute to Line */}
          <div style={{ position: "absolute", top: "-90px", right: "4vw" }}>
            <Magnetic>
              <div style={{ cursor: "pointer" }} onClick={() => window.location.href = "mailto:nurhadiimamuddin@gmail.com"}>
                <div style={{ 
                  width: "clamp(140px, 14vw, 180px)", 
                  height: "clamp(140px, 14vw, 180px)", 
                  backgroundColor: "#455CE9", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "16px"
                }}>
                  Get in touch
                </div>
              </div>
            </Magnetic>
          </div>

        </div>

        <div className="footer-row" style={{ marginTop: "120px" }}>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            <p>VERSION</p>
            <p style={{ color: "#fff", marginTop: "10px" }}>2025 © Edition</p>
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            <p>LOCAL TIME</p>
            <p style={{ color: "#fff", marginTop: "10px" }}>Indonesia (GMT+7)</p>
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            <p>SOCIALS</p>
            <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
              <a href="#" className="nav-link-inline" style={{ color: "#fff" }}>LinkedIn</a>
              <a href="#" className="nav-link-inline" style={{ color: "#fff" }}>GitHub</a>
              <a href="#" className="nav-link-inline" style={{ color: "#fff" }}>Instagram</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
