let currentSlide = 0;
let testimonialIndex = 0;

// Function to show the current slide in the slider
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Loop to the last slide
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`; // Move the slider
}

// Function to move to the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Function to show the current testimonial in the carousel
function showTestimonial(index) {
    const testimonials = document.querySelector('.testimonials-carousel');
    const totalTestimonials = document.querySelectorAll('.testimonial').length;
    if (index >= totalTestimonials) {
        testimonialIndex = 0; // Loop back to the first testimonial
    } else if (index < 0) {
        testimonialIndex = totalTestimonials - 1; // Loop to the last testimonial
    } else {
        testimonialIndex = index;
    }
    testimonials.style.transform = `translateX(${-testimonialIndex * 100}%)`; // Move the carousel
}

// Function to move to the next testimonial
function nextTestimonial() {
    showTestimonial(testimonialIndex + 1);
}

// Auto-slide for the slider (change slide every 5 seconds)
setInterval(nextSlide, 5000);

// Auto-slide for the testimonials carousel (change testimonial every 5 seconds)
setInterval(nextTestimonial, 5000);

// Optional: If you want to keep the manual navigation for testimonials
function prevTestimonial() {
    showTestimonial(testimonialIndex - 1);
}

function nextTestimonialManual() {
    nextTestimonial();
}