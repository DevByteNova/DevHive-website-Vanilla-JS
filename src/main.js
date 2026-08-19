import "./css/style.css";
import "./css/navbar.css";
import "./css/hero.css";
import "./css/services.css";
import "./css/technologies.css";
import "./css/about.css";
import "./css/projects.css";
import "./css/contact.css";
import "./css/footer.css";

console.log("Dev-Hive JS cargado");


// =========================
// SCROLL ANIMATIONS
// =========================

const animatedSections = document.querySelectorAll(
    "section:not(.hero)"
);

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                sectionObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedSections.forEach((section) => {
    sectionObserver.observe(section);
});


// =========================
// SERVICE CARD MOUSEMOVE
// =========================

const cards = document.querySelectorAll(
    ".service-card"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

});


// =========================
// HERO MOUSEMOVE
// =========================

const hero = document.querySelector(".hero");

if (
    hero &&
    window.matchMedia("(pointer: fine)").matches
) {

    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX =
            (x - rect.width / 2) * 0.04;

        const moveY =
            (y - rect.height / 2) * 0.04;

        hero.style.setProperty(
            "--hero-mouse-x",
            `${moveX}px`
        );

        hero.style.setProperty(
            "--hero-mouse-y",
            `${moveY}px`
        );

    });

}


// =========================
// SCROLL TO TOP
// =========================

const scrollTopButton =
    document.querySelector(".scroll-top");

if (scrollTopButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("visible");

        } else {

            scrollTopButton.classList.remove("visible");

        }

    });


    scrollTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.querySelector(".contact-form");

const formMessage =
    document.querySelector(".form-message");

if (contactForm && formMessage) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const nameInput =
                document.querySelector("#name");

            const emailInput =
                document.querySelector("#email");

            const messageInput =
                document.querySelector("#message");


            if (
                !nameInput ||
                !emailInput ||
                !messageInput
            ) {

                console.error(
                    "No se encontraron uno o más campos del formulario."
                );

                return;
            }


            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();


            if (!name || !email || !message) {

                formMessage.textContent =
                    "Completa todos los campos.";

                formMessage.classList.remove(
                    "success"
                );

                formMessage.classList.add(
                    "error"
                );

                return;
            }


            formMessage.textContent =
                `¡Gracias, ${name}! Hemos recibido tu mensaje.`;

            formMessage.classList.remove(
                "error"
            );

            formMessage.classList.add(
                "success"
            );

            contactForm.reset();

        }
    );

}
// ==========================
// SMOOTH NAVIGATION
// ==========================

const navLinks = document.querySelectorAll(
    '.navbar a[href^="#"]'
);

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId =
            link.getAttribute("href");
        const target =
            document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});