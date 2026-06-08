// ========== MOBILE NAVIGATION ==========
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-trigger)');
const dropdownTriggers = navMenu.querySelectorAll('.dropdown-trigger');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Mobile dropdown menu
dropdownTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = trigger.parentElement;
      parent.classList.toggle('active');
    }
  });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;

  if (lastScrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== PARALLAX EFFECT ==========
const heroParallax = document.getElementById('heroParallax');

if (heroParallax) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxOffset = scrolled * 0.5;
    heroParallax.style.backgroundPosition = `center ${parallaxOffset}px`;
  });
}

// ========== SMOOTH SCROLL ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.hasAttribute('data-aos')) {
        entry.target.classList.add('aos-animate');
      }

      if (entry.target.classList.contains('reveal')) {
        entry.target.classList.add('visible');
      }

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with data-aos or reveal class
document.querySelectorAll('[data-aos], .reveal').forEach(el => {
  observer.observe(el);
});

// ========== COUNTER ANIMATION ==========
const counters = document.querySelectorAll('.stat-number');

function animateCounters() {
  counters.forEach(counter => {
    const target = parseInt(counter.textContent.match(/\d+/)[0]);
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = counter.textContent.replace(/\d+/, target);
        clearInterval(timer);
      } else {
        counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
      }
    }, 20);
  });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statsObserver.observe(statsSection);
}

// ========== YEAR IN FOOTER ==========
document.getElementById('year').textContent = new Date().getFullYear();

// ========== PREVENT LAYOUT SHIFT ==========
if ('scrollbarWidth' in document.documentElement.style) {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  if (scrollbarWidth > 0) {
    document.documentElement.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
  }
}

// ========== RIPPLE EFFECT ON BUTTONS ==========
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// ========== LAZY LOADING IMAGES ==========
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========== FORM VALIDATION ==========
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    let isValid = true;
    const requiredFields = this.querySelectorAll('[required]');

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
        field.addEventListener('input', function() {
          this.classList.remove('error');
        });
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
});

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
  // Close mobile menu on Escape
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }

  // Tab navigation for accessibility
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-active');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-active');
});

// ========== PRELOAD CRITICAL IMAGES ==========
function preloadImages(urls) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

preloadImages([
  'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><pattern id=%22grid%22 width=%2260%22 height=%2260%22 patternUnits=%22userSpaceOnUse%22><path d=%22M60,0 L0,0 L0,60%22 fill=%22none%22 stroke=%22rgba(255,255,255,.03)%22 stroke-width=%221%22/></pattern></defs><rect width=%221200%22 height=%22600%22 fill=%22url(%23grid)%22/></svg>'
]);

// ========== PAGE VISIBILITY ==========
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // Resume animations
    document.querySelectorAll('[data-aos]').forEach(el => {
      if (!el.classList.contains('aos-animate')) {
        observer.observe(el);
      }
    });
  }
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.title = 'Voltar ao Topo';
document.body.appendChild(scrollToTopBtn);

const style = document.createElement('style');
style.textContent = `
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8B2E2E, #5C1F1F);
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease;
    z-index: 500;
    box-shadow: 0 4px 12px rgba(139, 46, 46, 0.3);
  }

  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
  }

  .scroll-to-top:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(139, 46, 46, 0.4);
  }

  @media (max-width: 768px) {
    .scroll-to-top {
      width: 45px;
      height: 45px;
      bottom: 20px;
      right: 20px;
      font-size: 20px;
    }
  }
`;
document.head.appendChild(style);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ========== INITIALIZATION ==========
console.log('🎉 Melos Noivas website loaded successfully!');
