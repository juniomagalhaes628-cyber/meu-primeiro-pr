// ========== LUA FASHION — CARRINHO.JS ==========

const PORTES_GRATIS = 50;
const PORTES_VALOR  = 4.99;

function formatPrice(v) {
  return `€${v.toFixed(2)}`;
}

function renderCart() {
  const cart = LF.getCart();
  const listEl  = document.getElementById('cartList');
  const emptyEl = document.getElementById('cartEmpty');
  const summaryEl = document.getElementById('cartSummary');

  if (!listEl) return;

  if (cart.length === 0) {
    if (emptyEl)   emptyEl.style.display = 'block';
    if (summaryEl) summaryEl.style.display = 'none';
    listEl.innerHTML = '';
    return;
  }

  if (emptyEl)   emptyEl.style.display = 'none';
  if (summaryEl) summaryEl.style.display = 'block';

  listEl.innerHTML = cart.map(item => buildCartItem(item)).join('');

  // Eventos de quantidade e remoção
  listEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const { id, tamanho, delta } = btn.dataset;
      LF.updateCartQty(parseInt(id), tamanho, parseInt(delta));
      renderCart();
    });
  });

  listEl.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      LF.removeFromCart(parseInt(btn.dataset.id), btn.dataset.tamanho);
      renderCart();
    });
  });

  updateSummary(cart);
}

function buildCartItem(item) {
  return `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.imagem}" alt="${item.nome}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.nome}</div>
        <div class="cart-item-meta">Tamanho: <strong>${item.tamanho}</strong></div>
        <div class="qty-control">
          <button class="qty-btn" data-id="${item.id}" data-tamanho="${item.tamanho}" data-delta="-1" aria-label="Diminuir">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-tamanho="${item.tamanho}" data-delta="1" aria-label="Aumentar">+</button>
        </div>
      </div>
      <div class="cart-item-price">
        <div class="price-current">${formatPrice(item.preco * item.qty)}</div>
        <button class="cart-item-remove" data-id="${item.id}" data-tamanho="${item.tamanho}">Remover</button>
      </div>
    </div>`;
}

function updateSummary(cart) {
  const subtotal = cart.reduce((s, i) => s + i.preco * i.qty, 0);
  const portes   = subtotal >= PORTES_GRATIS ? 0 : PORTES_VALOR;
  const total    = subtotal + portes;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl('summarySubtotal', formatPrice(subtotal));
  setEl('summaryPortes',   portes === 0 ? 'Grátis' : formatPrice(portes));
  setEl('summaryTotal',    formatPrice(total));

  // Barra de progresso para envio grátis
  const progressEl = document.getElementById('shippingProgress');
  if (progressEl) {
    const pct = Math.min(100, (subtotal / PORTES_GRATIS) * 100);
    progressEl.style.width = `${pct}%`;
  }

  const shippingNoteEl = document.getElementById('shippingNote');
  if (shippingNoteEl) {
    if (portes === 0) {
      shippingNoteEl.textContent = '✓ Tens envio gratuito!';
      shippingNoteEl.style.color = 'var(--lf-gold)';
    } else {
      const diff = PORTES_GRATIS - subtotal;
      shippingNoteEl.textContent = `Faltam ${formatPrice(diff)} para envio gratuito`;
      shippingNoteEl.style.color = 'var(--lf-text-muted)';
    }
  }

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.textContent = `Finalizar Compra — ${formatPrice(total)}`;
  }
}

document.addEventListener('DOMContentLoaded', renderCart);
