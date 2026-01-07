const EMAILJS_PUBLIC_KEY = window.EMAILJS_PUBLIC_KEY || "";
const EMAILJS_SERVICE_ID = window.EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = window.EMAILJS_TEMPLATE_ID || "";

document.addEventListener("DOMContentLoaded", () => {
  // ========== Mobile Menu Toggle ==========
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("mobile-nav-overlay");

  if (mobileMenuBtn && nav) {
    // Toggle menu when button is clicked
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenuBtn.classList.toggle("active");
      nav.classList.toggle("active");
      if (overlay) {
        overlay.classList.toggle("active");
      }
    });

    // Close menu when a link is clicked
    nav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        nav.classList.remove("active");
        if (overlay) {
          overlay.classList.remove("active");
        }
      });
    });

    // Close menu when overlay is clicked
    if (overlay) {
      overlay.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");
      });
    }

    // Close menu when Escape key is pressed
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("active")) {
        mobileMenuBtn.classList.remove("active");
        nav.classList.remove("active");
        if (overlay) {
          overlay.classList.remove("active");
        }
      }
    });
  }

  // ========== Contact Form ==========
  const contactForm = document.getElementById("contact-form");
  const statusEl = document.getElementById("contact-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      if (!statusEl) return;

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        statusEl.textContent = "Please fill in all fields.";
        statusEl.style.color = "#f97373";
        return;
      }

      statusEl.textContent = "Sending...";
      statusEl.style.color = "#e5e7eb";
    });
  }

  // ========== Smooth Scroll ==========
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ========== Footer Year ==========
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
