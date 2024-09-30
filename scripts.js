// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
let sliderInterval = setInterval(showNextSlide, 3000);

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Toggle slider on/off
function toggleSlider() {
    if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
    } else {
        sliderInterval = setInterval(showNextSlide, 3000);
    }
}
