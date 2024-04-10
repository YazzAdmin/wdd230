let currentSlide = 0;
const slides = document.querySelectorAll('.Slide-in');

function showSlide(n) {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

function slide(n) {
    showSlide(currentSlide + n);
}