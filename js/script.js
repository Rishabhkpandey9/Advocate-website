// Highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });
});

// Scroll to top smoothly on "Get Legal Advice" button
const ctaBtn = document.querySelector(".cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", (e) => {
    // Optional: remove this if it links to a separate page
    // e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
  
    // Highlight active nav link
    document.addEventListener("DOMContentLoaded", () => {
      const navLinks = document.querySelectorAll("nav a");
      const currentPage = window.location.pathname.split("/").pop();

      navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active-link");
        }
      });

      // Smooth scroll for "Get Legal Advice" button (if exists)
      const ctaBtn = document.querySelector(".cta-btn");
      if (ctaBtn) {
        ctaBtn.addEventListener("click", (e) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }

      // Contact form submission logic
      const form = document.getElementById("contactForm");
      const thankYouMsg = document.getElementById("thankYouMsg");

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        fetch("https://formsubmit.co/prishabhkumar5@gmail.com", {
          method: "POST",
          body: formData
        })
        .then(response => {
          if (response.ok) {
            form.style.display = "none";
            thankYouMsg.style.display = "block";
          } else {
            alert("Something went wrong. Please try again.");
          }
        })
        .catch(error => {
          alert("Error: " + error);
        });
      });
    });
