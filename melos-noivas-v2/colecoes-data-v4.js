// V4: Design Elegante com UX Refinada - Emil Kowalski Philosophy

document.addEventListener('DOMContentLoaded', () => {
  console.log('🎨 V4: Iniciando com design elegante...');

  if (typeof PRODUTOS_FALLBACK === 'undefined') {
    console.error('❌ PRODUTOS_FALLBACK não definido!');
    return;
  }

  // Elementos
  const noivasEl = document.getElementById('noivas');
  const noivosEl = document.getElementById('noivos');
  const acessoriosEl = document.getElementById('acessorios');

  if (!noivasEl || !noivosEl || !acessoriosEl) {
    console.error('❌ Contentores não encontrados!');
    return;
  }

  // Renderizar com fade-in elegante
  renderCategoryWithPolish('Noivas', noivasEl);
  renderCategoryWithPolish('Noivos', noivosEl);
  renderCategoryWithPolish('Acessórios', acessoriosEl);

  console.log('✅ V4: Design elegante renderizado!');

  // Adicionar interatividade elegante
  addElegantInteractions();
});

function renderCategoryWithPolish(categoryName, container) {
  const categoryData = PRODUTOS_FALLBACK[categoryName];
  if (!categoryData) {
    console.warn(`${categoryName} não encontrada`);
    return;
  }

  let allProducts = [];
  let collectionCount = 0;

  Object.entries(categoryData).forEach(([collectionName, products]) => {
    collectionCount++;
    allProducts = allProducts.concat(products || []);
  });

  console.log(`📦 ${categoryName}: ${allProducts.length} produtos elegantes`);

  // HTML com CSS inline elegante
  let html = `
    <h2 class="collection-title" style="font-family:'Playfair Display',serif; font-size:clamp(32px,5vw,48px); color:#1a1a1a; margin-bottom:16px; font-weight:700;">${categoryName}</h2>
    <p class="collection-subtitle" style="font-size:16px; color:#888; margin-bottom:40px; letter-spacing:0.5px;">${allProducts.length} produtos em ${collectionCount} coleção(ões)</p>
    <div class="products-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:32px; animation:fadeIn 0.6s ease-out;">
  `;

  // Adicionar produtos com timing staggered
  allProducts.forEach((product, index) => {
    const name = product['REFERÊNCIA/NOME'] || 'Produto';
    const price = product.PREÇO_EUR || 'Sob consulta';
    const images = product.URLs_IMAGENS ? product.URLs_IMAGENS.split('|').filter(u => u.trim()) : [];
    const img = images[0] || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop';

    html += `
      <div class="product-card" style="animation-delay:${index * 0.05}s;">
        <div class="product-image" style="width:100%; height:340px; background:linear-gradient(135deg, #fae8e8, #f5e6e6); display:flex; align-items:center; justify-content:center; overflow:hidden;">
          <img src="${img}" alt="${name}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="product-info" style="padding:28px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <h3 class="product-name" style="font-size:18px; color:#1a1a1a; margin-bottom:8px; font-family:'Playfair Display',serif; font-weight:600; line-height:1.4;">${name}</h3>
            <p class="product-description" style="font-size:13px; color:#888; margin-bottom:12px;">${images.length > 0 ? images.length + ' foto(s)' : 'Galeria'}</p>
          </div>
          <div>
            <div class="product-price" style="font-size:22px; color:#8B2E2E; font-weight:700; margin-bottom:16px; font-family:'Playfair Display',serif; letter-spacing:0.5px;">${price}</div>
            <a href="contacto.html?produto=${encodeURIComponent(name)}" class="btn btn-small" style="display:inline-block; width:100%; padding:12px 20px; font-size:12px; text-align:center; background:#8B2E2E; color:#fff; border:none; border-radius:8px; text-transform:uppercase; letter-spacing:1px; cursor:pointer; text-decoration:none; font-weight:600; box-shadow:0 4px 12px rgba(139,46,46,0.2);">Consulta</a>
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';

  // Renderizar com transição suave
  container.style.opacity = '0';
  container.innerHTML = html;
  
  // Fade-in elegante
  setTimeout(() => {
    container.style.transition = 'opacity 0.6s ease-out';
    container.style.opacity = '1';
  }, 50);

  console.log(`✅ ${categoryName} renderizada com elegância`);
}

function addElegantInteractions() {
  const cards = document.querySelectorAll('.product-card');
  
  cards.forEach(card => {
    // Subtle feedback on interaction
    card.addEventListener('mouseenter', () => {
      card.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', () => {
      card.style.zIndex = '0';
    });

    // Button ripple effect
    const button = card.querySelector('.btn-small');
    if (button) {
      button.addEventListener('click', (e) => {
        console.log(`👆 Clicado: ${card.querySelector('.product-name').textContent}`);
      });
    }
  });

  console.log(`✨ ${cards.length} interações elegantes ativadas`);
}
