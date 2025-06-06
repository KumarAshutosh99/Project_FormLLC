
console.log("Script loaded");

// Counter logic
const counters = document.querySelectorAll('.counter-number');
let counted = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 200;
    const increment = Math.ceil(target / speed);

    function update() {
      const current = parseInt(counter.textContent.replace(/\D/g, ''), 10);
      if (current < target) {
        counter.textContent = current + increment;
        setTimeout(update, 20);
      } else {
        counter.textContent = target;
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
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counterSection);
}

// Tab switching logic
const tabButtons = document.querySelectorAll('.tab-btn');
const planDetails = document.querySelectorAll('.plan-details');

tabButtons.forEach(button => {
  button.addEventListener('click', function () {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    planDetails.forEach(plan => plan.classList.remove('active'));

    this.classList.add('active');
    const targetId = this.getAttribute('data-plan');
    const targetPlan = document.getElementById(targetId);
    if (targetPlan) {
      targetPlan.classList.add('active');
    }
  });
});


// Testtimonials
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const totalSlides = slides.children.length;
let currentIndex = 0;

function updateSlider() {
  // Slide width is 33.3333% per slide
  slides.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex - 1 < 0 ? Math.floor(totalSlides / 3) - 1 : currentIndex - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex + 1 >= Math.floor(totalSlides / 3) ? 0 : currentIndex + 1;
  updateSlider();
});

// Initialize position on load
updateSlider();
