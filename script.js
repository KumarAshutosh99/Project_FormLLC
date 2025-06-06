// JavaScript for FormLLC Website

// Testimonial slider logic
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');
const totalSlides = testimonials.length;

/**
 * Show the testimonial slide based on index.
 * @param {number} index
 */
function showSlide(index) {
  testimonials.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Initialize first slide
showSlide(currentSlide);

// Event listeners for testimonial buttons
document.getElementById('prev-testimonial').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

document.getElementById('next-testimonial').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// FAQ accordion logic
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const isActive = question.classList.contains('active');

    // Close all FAQ items
    faqQuestions.forEach(q => q.classList.remove('active'));
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));

    // Toggle clicked FAQ item
    if (!isActive) {
      question.classList.add('active');
      question.nextElementSibling.classList.add('active');
    }
  });
});

console.log("Script loaded"); // Confirm script is running

const counters = document.querySelectorAll('.counter-number');
let counted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 200;
    const increment = Math.ceil(target / speed);

    function update() {
      const current = parseInt(counter.innerText.replace(/\D/g, ''), 10); // clean innerText
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    }

    update();
  });
}

const counterSection = document.querySelector('.counter-section');

if (counterSection && counters.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        animateCounters();
        counted = true;
        observer.disconnect(); // Run only once
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of section is visible

  observer.observe(counterSection);
}

