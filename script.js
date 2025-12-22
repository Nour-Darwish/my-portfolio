// ========== EmailJS SETUP ==========
// 1) Create an account at https://www.emailjs.com/
// 2) Create a service and template
// 3) Replace the placeholders below:

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;


document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  } catch (e) {
    console.warn("EmailJS not initialized yet. Make sure the script is loaded and keys are correct.");
  }

  // ========== Mobile Nav Toggle ==========
  const hamburger = document.getElementById("hamburger");
  const navbar = document.querySelector(".navbar");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });

    // Close nav when clicking a link (on mobile)
    navbar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("open");
      });
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

  // ========== Project Details Toggle ==========
  window.showProjectDetails = function (projectId) {
    const detailsSection = document.getElementById("project-details");
    if (!detailsSection) return;

    const detailCards = detailsSection.querySelectorAll(".project-detail-card");
    detailCards.forEach((card) => {
      if (card.id === projectId) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Scroll to details
    detailsSection.scrollIntoView({ behavior: "smooth" });
  };

  // ========== Contact Form Submission (EmailJS) ==========
  const contactForm = document.getElementById("contact-form");
  const statusEl = document.getElementById("contact-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!statusEl) return;

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        statusEl.textContent = "Please fill in all fields.";
        statusEl.style.color = "#f97373";
        return;
      }

      statusEl.textContent = "Sending...";
      statusEl.style.color = "#e5e7eb";

      const templateParams = {
        from_name: name,
        reply_to: email,
        message: message,
      };

      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(
          () => {
            statusEl.textContent = "Thank you! Your message has been sent.";
            statusEl.style.color = "#4ade80";
            contactForm.reset();
          },
          (error) => {
            console.error("EmailJS error:", error);
            statusEl.textContent = "Something went wrong. Please try again later.";
            statusEl.style.color = "#f97373";
          }
        );
    });
  }

  // ========== Footer Year ==========
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
