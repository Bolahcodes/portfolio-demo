// Add this script at the end of your body tag
document.addEventListener("DOMContentLoaded", function () {
  // Header scroll effect
  const header = document.querySelector(".header");
  const menuToggle = document.getElementById("menu-toggle");
  const navContainer = document.querySelector(".header__nav-container");
  const navLinks = document.querySelectorAll(".header__nav-link");

  // Create menu overlay
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  // Scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Menu toggle functionality
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navContainer.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = navContainer.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      navContainer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";

      // Add active class to current link
      navLinks.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Close menu when clicking on overlay
  overlay.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    navContainer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Set active menu item based on scroll position
  const sections = document.querySelectorAll("section[id]");

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.header__nav-link[href="#${sectionId}"]`)
          ?.classList.add("active");
      } else {
        document
          .querySelector(`.header__nav-link[href="#${sectionId}"]`)
          ?.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);

  // Set initial active state
  setTimeout(highlightNavigation, 100);
});
