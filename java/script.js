// Toggle Menu Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Close Navbar When Clicking a Link
navbar.addEventListener('click', () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// Sticky Navbar
window.onscroll = () => {
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove Menu Icon When Scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Dark Mode Toggle
let darkModeIcon = document.querySelector('#darkmoon-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

// ScrollReveal Animations
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

// for Gallery

const gallery = document.querySelector('#gallery');

// Function to calculate row spans for masonry layout
const resizeAll = () => {
    const rowHeight = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(gallery).getPropertyValue('grid-row-gap'));

    gallery.querySelectorAll('.gallery-item').forEach(item => {
        const content = item.querySelector('.content');
        const height = content.getBoundingClientRect().height;
        const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = `span ${rowSpan}`;
    });
};

// Adjust layout when images load
gallery.querySelectorAll('img').forEach(img => {
    if (img.complete) {
        resizeAll();
    } else {
        img.addEventListener('load', resizeAll);
    }
});

// Adjust layout on window resize
window.addEventListener('resize', resizeAll);

// Full-screen functionality
gallery.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('full');
        document.body.classList.toggle('no-scroll');
    });
});


// for testimonial

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .project-card', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const container = document.querySelector('.testimonials-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= container.children.length - 1;
}

function slideTestimonials(direction) {
  const cardWidth = container.children[0].offsetWidth; // Width of one testimonial
  const scrollAmount = cardWidth;

  if (direction === 'next' && currentIndex < container.children.length - 1) {
    currentIndex++;
  } else if (direction === 'prev' && currentIndex > 0) {
    currentIndex--;
  }

  container.style.transform = `translateX(-${currentIndex * scrollAmount}px)`;
  updateButtons();
}

nextBtn.addEventListener('click', () => slideTestimonials('next'));
prevBtn.addEventListener('click', () => slideTestimonials('prev'));

// Initialize button states
updateButtons();

// Add responsive recalculation
window.addEventListener('resize', () => {
  const cardWidth = container.children[0].offsetWidth;
  container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

