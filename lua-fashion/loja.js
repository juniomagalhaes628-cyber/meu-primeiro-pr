// ========== LUA FASHION — LOJA.JS ==========
// Filtros, grid de produtos, modal de detalhe

// Estado dos filtros
const state = {
  categoria: 'todos',
  tamanhos: [],
  ordenar: 'recente',
  pagina: 1,
  porPagina: 12
};

// ---- RENDERIZAR GRID ----
function getFilteredProducts() {
  let list = [...PRODUTOS];

  if (state.categoria !== 'todos') {
    list = list.filter(p => p.categoria === state.categoria);
  }

  if (state.tamanhos.length > 0) {
    list = list.filter(p => state.tamanhos.some(t => p.tamanhos.includes(t)));
  }

  switch (state.ordenar) {
    case 'preco-asc':  list.sort((a,b) => a.preco - b.preco); break;
    case 'preco-desc': list.sort((a,b) => b.preco - a.preco); break;
    case 'novidades':  list.sort((a,b) => (b.novo ? 1 : 0) - (a.novo ? 1 : 0)); break;
    case 'popular':    list.sort((a,b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0)); break;
  }

  return list;
}

function renderGrid() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const products = getFilteredProducts();
  const count = document.getElementById('productsCount');
  if (count) count.textContent = `${products.length} produto${products.length !== 1 ? 's' : ''}`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:80px 20px; color:var(--lf-text-muted);">
        <div style="font-size:3rem; margin-bottom:16px;">🌙</div>
        <p style="font-size:1rem;">Nenhum produto encontrado com estes filtros.</p>
        <button class="btn btn-outline btn-sm" style="margin-top:20px;" onclick="resetFilters()">Limpar filtros</button>
      </div>`;
    return;
  }

  grid.innerHTML = products.map((p, i) => buildProductCard(p, i)).join('');

  // Re-observar para animações
  grid.querySelectorAll('[data-aos]').forEach(el => {
    el.classList.remove('aos-animate');
    observer.observe(el);
  });

  // Wishlist state
  const wishlist = getWishlist();
  grid.querySelectorAll('.product-wishlist').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (wishlist.includes(id)) {
      btn.classList.add('active');
      btn.querySelector('svg').style.fill = '#C0392B';
    }
  });
}

function buildProductCard(p, index) {
  const delay = (index % 4) * 100;
  const badgesHTML = [
    p.novo        ? '<span class="badge badge-new">Novo</span>' : '',
    p.precoPrev   ? `<span class="badge badge-sale">-${Math.round((1-p.preco/p.precoPrev)*100)}%</span>` : '',
    p.bestseller  ? '<span class="badge badge-best">★ Popular</span>' : ''
  ].filter(Boolean).join('');

  const priceHTML = p.precoPrev
    ? `<span class="price-current">€${p.preco.toFixed(2)}</span><span class="price-prev">€${p.precoPrev.toFixed(2)}</span>`
    : `<span class="price-current">€${p.preco.toFixed(2)}</span>`;

  const img1 = p.imagens[0];
  const img2 = p.imagens[1] || p.imagens[0];

  return `
    <div class="product-card" data-aos="fade-up" data-aos-delay="${delay}" data-id="${p.id}" onclick="openProductModal(${p.id})">
      <div class="product-card-img-wrap">
        <img class="product-card-img product-card-img-main" src="${img1}" alt="${p.nome}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
        <img class="product-card-img product-card-img-hover" src="${img2}" alt="${p.nome} — vista 2" loading="lazy" onerror="this.src='images/placeholder.jpg'">
        ${badgesHTML ? `<div class="product-badges">${badgesHTML}</div>` : ''}
        <button class="product-wishlist" data-id="${p.id}" onclick="toggleWishlist(event,${p.id})" aria-label="Adicionar aos favoritos">
          <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <button class="product-quick-add" onclick="quickAdd(event,${p.id})" aria-label="Adicionar ao carrinho">Adicionar ao Carrinho</button>
      </div>
      <div class="product-card-info">
        <div class="product-card-category">${getCategoryLabel(p.categoria)}</div>
        <h3 class="product-card-name">${p.nome}</h3>
        <div class="product-card-price price-shimmer">${priceHTML}</div>
      </div>
    </div>`;
}

function getCategoryLabel(id) {
  const cat = CATEGORIAS.find(c => c.id === id);
  return cat ? cat.label : id;
}

// ---- FILTROS ----
function setupFilters() {
  // Categorias
  document.querySelectorAll('.filter-cat').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-cat').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.categoria = btn.dataset.cat;
      renderGrid();
    });
  });

  // Tamanhos (checkboxes)
  document.querySelectorAll('.filter-size').forEach(opt => {
    opt.addEventListener('click', () => {
      opt.classList.toggle('active');
      const size = opt.dataset.size;
      const idx = state.tamanhos.indexOf(size);
      if (idx >= 0) state.tamanhos.splice(idx, 1);
      else state.tamanhos.push(size);
      renderGrid();
    });
  });

  // Ordenar
  const sortEl = document.getElementById('lojaSort');
  if (sortEl) {
    sortEl.addEventListener('change', () => {
      state.ordenar = sortEl.value;
      renderGrid();
    });
  }
}

function resetFilters() {
  state.categoria = 'todos';
  state.tamanhos = [];
  state.ordenar = 'recente';
  document.querySelectorAll('.filter-cat').forEach(b => b.classList.toggle('active', b.dataset.cat === 'todos'));
  document.querySelectorAll('.filter-size, .filter-option').forEach(o => o.classList.remove('active'));
  const sortEl = document.getElementById('lojaSort');
  if (sortEl) sortEl.value = 'recente';
  renderGrid();
}

// ---- MODAL DE PRODUTO ----
let currentProduct = null;
let currentImgIndex = 0;

function openProductModal(id) {
  const produto = PRODUTOS.find(p => p.id === id);
  if (!produto) return;
  currentProduct = produto;
  currentImgIndex = 0;

  const modal = document.getElementById('productModal');
  if (!modal) return;

  // Imagem
  const modalImg = modal.querySelector('.modal-gallery-img');
  if (modalImg) { modalImg.src = produto.imagens[0]; modalImg.alt = produto.nome; }

  // Dots de navegação
  const dotsWrap = modal.querySelector('.modal-gallery-nav');
  if (dotsWrap && produto.imagens.length > 1) {
    dotsWrap.innerHTML = produto.imagens.map((_, i) =>
      `<button class="modal-dot${i===0?' active':''}" onclick="setModalImg(${i})" aria-label="Imagem ${i+1}"></button>`
    ).join('');
  }

  // Nome e preço
  const nameEl = modal.querySelector('.modal-product-name');
  if (nameEl) nameEl.textContent = produto.nome;

  const priceEl = modal.querySelector('.modal-price');
  if (priceEl) {
    priceEl.innerHTML = produto.precoPrev
      ? `<span class="price-current" style="font-size:1.5rem;">€${produto.preco.toFixed(2)}</span>
         <span class="price-prev">€${produto.precoPrev.toFixed(2)}</span>`
      : `<span class="price-current" style="font-size:1.5rem;">€${produto.preco.toFixed(2)}</span>`;
  }

  // Descrição
  const descEl = modal.querySelector('.modal-desc');
  if (descEl) descEl.textContent = produto.descricao;

  // Tamanhos
  const sizesEl = modal.querySelector('.size-grid');
  if (sizesEl) {
    sizesEl.innerHTML = produto.tamanhos.map(t =>
      `<button class="size-btn" onclick="selectSize(this, '${t}')">${t}</button>`
    ).join('');
  }

  // Badges
  const badgesEl = modal.querySelector('.modal-badges');
  if (badgesEl) {
    badgesEl.innerHTML = [
      produto.novo      ? '<span class="badge badge-new">Novo</span>' : '',
      produto.bestseller? '<span class="badge badge-best">★ Popular</span>' : ''
    ].filter(Boolean).join('');
  }

  LF.openModal(modal);
}

function setModalImg(index) {
  if (!currentProduct) return;
  currentImgIndex = index;
  const modal = document.getElementById('productModal');
  if (!modal) return;
  const img = modal.querySelector('.modal-gallery-img');
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = currentProduct.imagens[index] || currentProduct.imagens[0];
      img.style.opacity = '1';
    }, 150);
    img.style.transition = 'opacity 0.15s ease';
  }
  modal.querySelectorAll('.modal-dot').forEach((d,i) => d.classList.toggle('active', i===index));
}

function selectSize(btn, size) {
  btn.closest('.size-grid').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addCurrentToCart() {
  if (!currentProduct) return;
  const modal = document.getElementById('productModal');
  const activeSize = modal ? modal.querySelector('.size-btn.active') : null;

  if (!activeSize) {
    LF.showToast('Por favor selecciona um tamanho');
    // Shake nos tamanhos
    const sizeGrid = modal.querySelector('.size-grid');
    if (sizeGrid) {
      sizeGrid.style.animation = 'shake 0.3s ease';
      setTimeout(() => sizeGrid.style.animation = '', 300);
    }
    return;
  }

  LF.addToCart(currentProduct, activeSize.textContent);

  // Feedback visual no botão
  const addBtn = modal ? modal.querySelector('.btn-add-to-cart') : null;
  if (addBtn) {
    const originalText = addBtn.innerHTML;
    addBtn.innerHTML = '✓ Adicionado!';
    addBtn.style.background = 'var(--lf-gold-light)';
    setTimeout(() => {
      addBtn.innerHTML = originalText;
      addBtn.style.background = '';
    }, 1800);
  }
}

// ---- QUICK ADD (sem selecionar tamanho — abre modal) ----
function quickAdd(event, id) {
  event.stopPropagation();
  openProductModal(id);
}

// ---- WISHLIST ----
const WISHLIST_KEY = 'lf_wishlist';
function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
  catch { return []; }
}

function toggleWishlist(event, id) {
  event.stopPropagation();
  const wishlist = getWishlist();
  const idx = wishlist.indexOf(id);
  const btn = event.currentTarget;

  if (idx >= 0) {
    wishlist.splice(idx, 1);
    btn.classList.remove('active');
    btn.querySelector('svg').style.fill = 'none';
    LF.showToast('Removido dos favoritos');
  } else {
    wishlist.push(id);
    btn.classList.add('active');
    btn.querySelector('svg').style.fill = '#C0392B';
    LF.showToast('Adicionado aos favoritos ♡');
  }

  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

// ---- SHAKE KEYFRAME (inline) ----
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20%      { transform: translateX(-5px); }
    40%      { transform: translateX(5px); }
    60%      { transform: translateX(-4px); }
    80%      { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  setupFilters();

  // Fechar modal ao clicar fora
  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.addEventListener('click', e => {
      if (e.target === productModal) LF.closeModal(productModal);
    });
    productModal.querySelector('.modal-close')?.addEventListener('click', () => LF.closeModal(productModal));
  }

  // Botão adicionar ao carrinho no modal
  const addBtn = document.querySelector('.btn-add-to-cart');
  if (addBtn) addBtn.addEventListener('click', addCurrentToCart);
});

// Expor globalmente
window.openProductModal = openProductModal;
window.setModalImg = setModalImg;
window.selectSize = selectSize;
window.addCurrentToCart = addCurrentToCart;
window.quickAdd = quickAdd;
window.toggleWishlist = toggleWishlist;
window.resetFilters = resetFilters;
