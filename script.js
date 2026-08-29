// =========================
// Mobile Menu
// =========================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});

// =========================
// Sticky Header
// =========================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
});

// =========================
// Scroll Reveal
// =========================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
    }
);

revealElements.forEach((element) => observer.observe(element));
