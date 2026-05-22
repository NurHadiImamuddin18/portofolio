"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© 2026 Nur Hadi Imamuddin.</span>
        <button
          className="back-to-top"
          onClick={() => {
            const el = document.getElementById("home");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
