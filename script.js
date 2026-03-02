/* ============================================
   Portfolio - JavaScript
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  // --- Code Particles ---
  const particlesEl = document.getElementById("particles");
  const codeSymbols = ["{ }", "./", "</>", "( )", "==", '""'];
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    particle.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = 20 + Math.random() * 25 + "s";
    particle.style.animationDelay = -(Math.random() * 40) + "s";
    particle.style.fontSize = 12 + Math.random() * 12 + "px";
    particlesEl.appendChild(particle);
  }

  // --- Typewriter ---
  const texts = [
    
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Internet of Things",
    "Microsoft Office",
  ];
  let textIndex = 0,
    charIndex = 0,
    isDeleting = false;
  const typewriterEl = document.getElementById("typewriter");

  function typewrite() {
    const current = texts[textIndex];
    if (isDeleting) {
      typewriterEl.textContent = current.substring(0, charIndex--);
    } else {
      typewriterEl.textContent = current.substring(0, charIndex++);
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length + 1) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 400;
    }

    setTimeout(typewrite, speed);
  }

  typewrite();

  // --- Navbar scroll ---
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }

    // Active nav link
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Back to top
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // --- Stat counter animation ---
  const statNumbers = document.querySelectorAll(".stat-number");
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    const statsSection = document.querySelector(".hero-stats");
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      statsAnimated = true;
      statNumbers.forEach((num) => {
        const target = parseInt(num.getAttribute("data-target"));
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          num.textContent = Math.floor(current);
        }, 30);
      });
    }
  }

  window.addEventListener("scroll", animateStats);
  animateStats();

  // --- Skill bar animation ---
  function animateSkillBars() {
    const fills = document.querySelectorAll(".skill-fill");
    fills.forEach((fill) => {
      const rect = fill.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        const width = fill.getAttribute("data-width");
        fill.style.width = width + "%";
      }
    });
  }

  window.addEventListener("scroll", animateSkillBars);
  setTimeout(animateSkillBars, 500);

  // --- Project filter ---
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
          card.style.animation = "fadeInUp 0.5s ease-out forwards";
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // --- Scroll reveal ---
  const revealElements = document.querySelectorAll(
    ".section-header, .about-content, .about-services, .skill-card, .project-card, .cert-item, .timeline-item, .contact-info, .contact-form-wrapper",
  );

  revealElements.forEach((el) => el.classList.add("scroll-reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
  );

  revealElements.forEach((el) => observer.observe(el));

  // --- Contact form ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.background = "linear-gradient(135deg, #10B981, #059669)";

      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = "";
        contactForm.reset();
      }, 3000);
    });
  }

  // --- Smooth scroll for all anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
