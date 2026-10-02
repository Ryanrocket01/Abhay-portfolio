// =====================================
// MOBILE NAVBAR
// =====================================

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

});


// Close menu after clicking link

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

    });

});



// =====================================
// PROJECT FILTER
// =====================================

const filterButtons =
    document.querySelectorAll(".filter");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Current active button

        button.classList.add("active");


        const filterValue =
            button.getAttribute("data-filter");


        projectCards.forEach(card => {

            const category =
                card.getAttribute(
                    "data-category"
                );


            if (
                filterValue === "all" ||
                category.includes(filterValue)
            ) {

                card.classList.remove("hide");

            }

            else {

                card.classList.add("hide");

            }

        });

    });

});



// =====================================
// CONTACT FORM
// =====================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill all fields.";

            return;
        }


        formMessage.textContent =
            `Thanks ${name}! Your message is ready to send.`;

        contactForm.reset();

    }
);



// =====================================
// ACTIVE NAVBAR LINK ON SCROLL
// =====================================

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active-nav");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add(
                "active-nav"
            );

        }

    });

});