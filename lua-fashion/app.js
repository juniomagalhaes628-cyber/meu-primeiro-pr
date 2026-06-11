// ========== LUA FASHION — APP.JS (Core) ==========

// ---- NAVBAR ----
const navbar   = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu  = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Navbar shrink ao scroll
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ---- HIGHLIGHT LINK ATIVO ----
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(path.replace('.html',''))) {
      link.classList.add('active');
    }
  });
  if (path === 'index.html' || path === '') {
    const homeLink = document.querySelector('.nav-link[href*="index"]') ||
                     document.querySelector('.nav-link:first-child');
    if (homeLink) homeLink.classList.add('active');
  }
})();

// ---- PARALLAX NO HERO ----
const heroImg = document.getElementById('heroParallax');
if (heroImg) {
  window.addEventListener('scroll', () => {
    heroImg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
  }, { passive: true });
}

// ---- SCROLL SUAVE ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- INTERSECTION OBSERVER (animações ao scroll) ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
      if (entry.target.classList.contains('reveal')) entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('[data-aos], .reveal').forEach(el => observer.observe(el));

// ---- COUNTER ANIMATION ----
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(counter => {
    const match = counter.textContent.match(/\d+/);
    if (!match) return;
    const target = parseInt(match[0]);
    const suffix = counter.textContent.replace(/[\d]/g, '');
    let current = 0;
    const step = target / 55;
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target + suffix;
        clearInterval(id);
      } else {
        counter.textContent = Math.floor(current) + suffix;
      }
    }, 18);
  });
}

const statsSection = document.querySelector('.stats-banner, .stats-section');
if (statsSection) {
  new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounters(); e.target._statsObserver.unobserve(e.target); }
    });
  }, { threshold: 0.4 }).observe(statsSection);
  // Store reference for cleanup
  statsSection._statsObserver = new IntersectionObserver(() => {}, {});
}

// Simpler stats counter trigger
const statsEl = document.querySelector('.stats-banner');
if (statsEl) {
  let counted = false;
  window.addEventListener('scroll', () => {
    if (counted) return;
    const rect = statsEl.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      counted = true;
      animateCounters();
    }
  }, { passive: true });
}

// ---- RIPPLE EM BOTÕES ----
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const ripple = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `
    width:${size}px; height:${size}px;
    left:${e.clientX - rect.left - size/2}px;
    top:${e.clientY - rect.top - size/2}px;
  `;
  ripple.classList.add('ripple');
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ---- LAZY LOADING ----
if ('IntersectionObserver' in window) {
  const imgObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) { img.src = img.dataset.src; img.removeAttribute('data-src'); }
        imgObs.unobserve(img);
      }
    });
  });
  document.querySelectorAll('img[data-src]').forEach(img => imgObs.observe(img));
}

// ---- CARRINHO (localStorage) ----
const CART_KEY = 'lf_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(produto, tamanho) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === produto.id && i.tamanho === tamanho);
  if (idx >= 0) {
    cart[idx].qty += 1;
  } else {
    cart.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagens[0],
      tamanho,
      qty: 1
    });
  }
  saveCart(cart);
  updateCartBadge();
  showToast(`"${produto.nome}" adicionado ao carrinho`);
  animateCartIcon();
}

function removeFromCart(id, tamanho) {
  const cart = getCart().filter(i => !(i.id === id && i.tamanho === tamanho));
  saveCart(cart);
  updateCartBadge();
}

function updateCartQty(id, tamanho, delta) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id && i.tamanho === tamanho);
  if (idx >= 0) {
    cart[idx].qty = Math.max(1, cart[idx].qty + delta);
    if (cart[idx].qty === 0) cart.splice(idx, 1);
  }
  saveCart(cart);
  updateCartBadge();
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.preco * i.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  });
}

function animateCartIcon() {
  const cartBtn = document.querySelector('.cart-icon-btn');
  if (!cartBtn) return;
  cartBtn.classList.remove('cart-bounce');
  void cartBtn.offsetWidth; // reflow
  cartBtn.classList.add('cart-bounce');
  cartBtn.addEventListener('animationend', () => cartBtn.classList.remove('cart-bounce'), { once: true });
}

// Inicializar badge ao carregar
document.addEventListener('DOMContentLoaded', updateCartBadge);

// ---- TOAST ----
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.innerHTML = `<div class="toast-icon">✓</div><span class="toast-msg"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- MAGNETIC BUTTONS ----
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width  / 2) * 0.2;
    const y = (e.clientY - rect.top  - rect.height / 2) * 0.2;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ---- SCROLL TO TOP ----
const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-to-top';
scrollBtn.setAttribute('aria-label', 'Voltar ao topo');
scrollBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
document.body.appendChild(scrollBtn);

// Estilos do botão
const scrollStyle = document.createElement('style');
scrollStyle.textContent = `
  .scroll-to-top {
    position: fixed;
    bottom: 28px; right: 28px;
    width: 46px; height: 46px;
    background: linear-gradient(135deg, #C8A951, #8B6F2E);
    color: #0A0A0A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transform: translateY(12px);
    transition: all 300ms ease;
    z-index: 500;
    box-shadow: 0 4px 20px rgba(200,169,81,0.35);
    cursor: pointer;
    border: none;
  }
  .scroll-to-top.visible { opacity: 1; visibility: visible; transform: translateY(0); }
  .scroll-to-top:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(200,169,81,0.5); }
  .scroll-to-top svg { width: 18px; height: 18px; }
`;
document.head.appendChild(scrollStyle);

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 320);
}, { passive: true });

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- KEYBOARD / ESCAPE ----
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Fechar menu mobile
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
    // Fechar modal
    const modal = document.querySelector('.modal-overlay.active');
    if (modal) closeModal(modal);
  }
});

// ---- MODAL (genérico) ----
function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay);
  });

  overlay.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => closeModal(overlay));
  });
});

// Expor funções globalmente
window.LF = {
  addToCart,
  removeFromCart,
  updateCartQty,
  getCart,
  getCartTotal,
  getCartCount,
  showToast,
  openModal,
  closeModal,
  updateCartBadge
};

// ---- ANO NO FOOTER ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- FORMA VALIDAÇÃO ----
document.querySelectorAll('form.validate').forEach(form => {
  form.addEventListener('submit', function(e) {
    let valid = true;
    this.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.classList.add('error');
        field.addEventListener('input', () => field.classList.remove('error'), { once: true });
      }
    });
    if (!valid) { e.preventDefault(); showToast('Por favor preenche todos os campos obrigatórios.'); }
  });
});

console.log('🌙 Lua Fashion loaded');
