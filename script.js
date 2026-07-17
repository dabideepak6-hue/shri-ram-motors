/* ==========================================
   SHRI RAM MOTORS
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Mobile Menu
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

                if (nav) {
                    nav.classList.remove("active");
                }

            }

        });

    });

    /* ==========================
       Scroll To Top
    ========================== */

    const topBtn = document.querySelector(".top-btn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                topBtn.style.display = "flex";

            } else {

                topBtn.style.display = "none";

            }

        });

        topBtn.addEventListener("click", e => {

            e.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================
       Counter Animation
    ========================== */

    const counters = document.querySelectorAll(".counter-box h2");

    counters.forEach(counter => {

        const target = parseInt(counter.innerText.replace(/\D/g, "")) || 0;

        let count = 0;

        const speed = Math.max(10, target / 150);

        function updateCounter() {

            if (count < target) {

                count += speed;

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        }

        updateCounter();

    });

    /* ==========================
       Scroll Reveal
    ========================== */

    const revealItems = document.querySelectorAll(
        ".about,.bike-card,.offer-card,.service-card,.review-card,.why-card,.contact"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up", "show");

            }

        });

    }, {
        threshold: 0.15
    });

    revealItems.forEach(item => observer.observe(item));

    /* ==========================
       Contact Form
    ========================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your message has been submitted.");

            form.reset();

        });

    }

    /* ==========================
       Dark Mode
    ========================== */

    const darkBtn = document.querySelector(".dark-mode");

    if (darkBtn) {

        darkBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

        });

    }

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       Loading Screen
    ========================== */

    const loader = document.querySelector(".loader");

    if (loader) {

        window.addEventListener("load", () => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        });

    }

    /* ==========================
       Current Year
    ========================== */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});
