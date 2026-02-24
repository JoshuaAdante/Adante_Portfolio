// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Handle contact form submission
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;
  
  if (name && email && message) {
    alert('Thank you, ' + name + '! Your message has been sent. We will get back to you soon.');
    form.reset();
  } else {
    alert('Please fill in all fields.');
  }
}

// Add scroll animation for elements
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundPositionY = scrollTop * 0.5 + 'px';
  }
});

// Fade in animation on scroll
function revealOnScroll() {
  const elements = document.querySelectorAll('.service-card, .portfolio-item');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    
    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.style.opacity = '1';
      element.style.animation = 'slideDown 0.6s ease-out';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Mobile menu toggle (optional for future enhancement)
console.log('Joshua S Adante - Web Designer Portfolio Loaded');
