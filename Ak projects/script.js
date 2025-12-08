const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.children;
dots[0].classList.add("active-dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active-dot", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(i) {
    currentSlide = i;
    showSlide(i);
}

// Auto slide
setInterval(nextSlide, 4000);
