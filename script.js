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



const img = document.querySelector(".gifPlayer img");

document.addEventListener("mousemove", function(e) {
  // Get viewport center
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Cursor position relative to center
  const offsetX = e.clientX - centerX;
  const offsetY = e.clientY - centerY;

  // Shadow moves opposite to cursor (sun effect)
  const shadowX = -offsetX / 20; // tweak divisor for intensity
  const shadowY = -offsetY / 20;

  // Apply drop-shadow dynamically
  img.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 20px rgba(37, 8, 8, 0.6))`;
});
