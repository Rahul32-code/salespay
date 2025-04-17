document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('[data-carousel]');
    const container = carousel.querySelector('[data-carousel-container]');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    const indicators = carousel.querySelectorAll('[data-carousel-indicators] button');

    let currentIndex = 0;
    const itemCount = items.length;

    // Initialize carousel
    function updateCarousel() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.setAttribute('aria-current', 'true');
                indicator.classList.add('bg-[#517ce3]/70');
                indicator.classList.remove('bg-[#517ce3]/30');
            } else {
                indicator.removeAttribute('aria-current');
                indicator.classList.remove('bg-[#517ce3]/70');
                indicator.classList.add('bg-[#517ce3]/30');
            }
        });
    }

    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    }

    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
    }

    // Auto-rotate (optional)
    let interval = setInterval(nextSlide, 5000);

    // Pause on hover
    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', () => interval = setInterval(nextSlide, 5000));

    // Button events
    nextBtn.addEventListener('click', () => {
        clearInterval(interval);
        nextSlide();
        interval = setInterval(nextSlide, 5000);
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(interval);
        prevSlide();
        interval = setInterval(nextSlide, 5000);
    });

    // Indicator events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(interval);
            currentIndex = index;
            updateCarousel();
            interval = setInterval(nextSlide, 5000);
        });
    });

    // Initialize
    updateCarousel();
});

const openBtn = document.getElementById('openSidebarBtn');
const closeBtn = document.getElementById('closeSidebarBtn');
const sidebarOverlay = document.getElementById('sidebarOverlay');

openBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.add('hidden');
});

// Optional: Close on background click
sidebarOverlay.addEventListener('click', (e) => {
    if (e.target === sidebarOverlay) {
        sidebarOverlay.classList.add('hidden');
    }
});

function toggleDropdown(id) {
const menu = document.getElementById(id);
menu.classList.toggle('hidden');
}

function toggleDropdown(id) {
const menu = document.getElementById(id);
const arrow = document.getElementById("arrow-icon");

// Toggle the visibility of the menu
menu.classList.toggle("hidden");

// Change the arrow direction based on dropdown state
if (menu.classList.contains("hidden")) {
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-right");
} else {
    arrow.classList.remove("fa-chevron-right");
    arrow.classList.add("fa-chevron-down");
}
}