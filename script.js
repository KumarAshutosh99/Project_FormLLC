// JavaScript for FormLLC Website

 <script>
  const rocket = document.querySelector(".rocket-image");

  rocket.addEventListener("mousemove", (e) => {
    const rect = rocket.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) / 20; // Sensitivity
    const offsetY = (e.clientY - rect.top - rect.height / 2) / 20;

    rocket.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
  });

  rocket.addEventListener("mouseleave", () => {
    rocket.style.transform = `translate(-50%, -50%)`; // Reset to original
  });
</script>

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

<!-- JavaScript for tab switching -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const planDetails = document.querySelectorAll('.plan-details');

    tabButtons.forEach(button => {
      button.addEventListener('click', function () {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        planDetails.forEach(plan => plan.classList.remove('active'));

        this.classList.add('active');
        const target = this.getAttribute('data-plan');
        document.getElementById(target).classList.add('active');
      });
    });
  });
</script>

