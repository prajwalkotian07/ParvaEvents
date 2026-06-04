// HERO IMAGE SLIDER

const hero = document.querySelector(".hero");

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let currentImage = 0;

function changeHeroImage() {

    currentImage++;

    if(currentImage >= heroImages.length){
        currentImage = 0;
    }

    hero.style.backgroundImage =
        `url('${heroImages[currentImage]}')`;

}

setInterval(changeHeroImage, 5000);


// NAVBAR SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
            "rgba(0,0,0,0.9)";

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.4)";

    }

    else{

        header.style.background =
            "rgba(0,0,0,0.3)";

        header.style.boxShadow = "none";

    }

});


// REVEAL ANIMATION

const reveals =
document.querySelectorAll(
".service-card, .gallery-grid img, .booking-card, .contact-item"
);

function revealElements(){

    reveals.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0)";

        }

    });

}

reveals.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(60px)";

    element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealElements
);

revealElements();


// SMOOTH ACTIVE MENU

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

    });

});


// HERO FADE EFFECT

hero.style.transition =
"background-image 1.2s ease-in-out";


// FLOATING BUTTON HOVER EFFECT

const floatingButtons =
document.querySelectorAll(
".floating-buttons a"
);

floatingButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "scale(1.15)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "scale(1)";

    });

});