import "./css/style.css";
import "./css/navbar.css";
import "./css/hero.css";
import "./css/services.css";
import "./css/technologies.css";
import "./css/about.css";
import "./css/projects.css";
import "./css/contact.css";
import "./css/footer.css";


// =========================
// SCROLL ANIMATIONS
// =========================

const sections = document.querySelectorAll(
    "section:not(.hero)"
);

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
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
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

            scrollTopButton.classList.add(
                "visible"
            );

        } else {

            scrollTopButton.classList.remove(
                "visible"
            );

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

            const name =
                document
                    .querySelector("#name")
                    .value
                    .trim();

            const email =
                document
                    .querySelector("#email")
                    .value
                    .trim();

            const message =
                document
                    .querySelector("#message")
                    .value
                    .trim();


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