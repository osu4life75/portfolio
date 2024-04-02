// script.js
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
});

//lazy loading in Certification section

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll(".certification");

    const lazyLoad = function() {
        lazyImages.forEach(function(img) {
            if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0 && getComputedStyle(img).display !== "none") {
                img.src = img.dataset.src;
                img.onload = function() {
                    img.removeAttribute("data-src");
                };
            }
        });
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});

// Get the current year in footer
const currentYear = new Date().getFullYear();

// Update the text content of the currentYear span element
document.getElementById("currentYear").textContent = currentYear;


