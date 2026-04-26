/* ================= DARK / LIGHT MODE ================= */
const themeToggle = document.getElementById("themeToggle");
let darkMode = true;

themeToggle.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.remove("light");
        themeToggle.textContent = "🌙";
    } else {
        document.body.classList.add("light");
        themeToggle.textContent = "☀️";
    }
});

/* ================= COUNTER ANIMATION ================= */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 80;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

/* ================= SCROLL REVEAL ================= */
const revealElements = document.querySelectorAll(".section, .glass, .timeline-item, .project-card, .skill");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================= SMOOTH NAVIGATION ================= */
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
