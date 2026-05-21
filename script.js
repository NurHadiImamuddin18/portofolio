/* ============================================
   Portfolio - JavaScript (Minimalist)
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  
  // --- Navbar Scroll ---
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- Mobile Nav Toggle ---
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // --- Scroll Reveal Animation ---
  const reveals = document.querySelectorAll(".reveal");
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  // Trigger once on load
  revealOnScroll();

  // --- Contact Form (Web3Forms) ---
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "SENDING...";
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        const data = await response.json();

        if (data.success) {
          submitBtn.textContent = "MESSAGE SENT";
          contactForm.reset();
        } else {
          submitBtn.textContent = "ERROR. TRY AGAIN.";
        }
      } catch (error) {
        submitBtn.textContent = "FAILED TO SEND.";
      }

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }

});
