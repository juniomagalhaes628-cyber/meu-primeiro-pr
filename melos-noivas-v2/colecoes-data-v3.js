// Versão ULTRA-SIMPLES - sem animações, sem complexidade

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 V3: Iniciando...');

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

  // Renderizar cada categoria
  renderCategory('Noivas', noivasEl);
  renderCategory('Noivos', noivosEl);
  renderCategory('Acessórios', acessoriosEl);

  console.log('✅ V3: Renderização completa!');
});

function renderCategory(categoryName, container) {
  const categoryData = PRODUTOS_FALLBACK[categoryName];
  if (!categoryData) {
    console.warn(`${categoryName} não encontrada`);
    return;
  }

  let allProducts = [];
  let collectionCount = 0;

  // Coletar produtos de todas as coleções
  Object.entries(categoryData).forEach(([collectionName, products]) => {
    collectionCount++;
    allProducts = allProducts.concat(products || []);
  });

  console.log(`📦 ${categoryName}: ${allProducts.length} produtos, ${collectionCount} coleções`);

  // HTML
  let html = `
    <h2 class="collection-title">${categoryName}</h2>
    <p class="collection-subtitle">${allProducts.length} produtos em ${collectionCount} coleção(ões)</p>
    <div class="products-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:32px;">
  `;

  // Adicionar produtos
  allProducts.forEach(product => {
    const name = product['REFERÊNCIA/NOME'] || 'Produto';
    const price = product.PREÇO_EUR || 'Sob consulta';
    const images = product.URLs_IMAGENS ? product.URLs_IMAGENS.split('|').filter(u => u.trim()) : [];
    const img = images[0] || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop';

    html += `
      <div class="product-card" style="background:#fff; border:1px solid #e5dcd4; border-radius:12px; overflow:hidden; display:flex; flex-direction:column; height:100%; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
        <div class="product-image" style="width:100%; height:340px; background:linear-gradient(135deg, #fae8e8, #f5e6e6); display:flex; align-items:center; justify-content:center; overflow:hidden;">
          <img src="${img}" alt="${name}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="product-info" style="padding:28px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <h3 style="font-size:18px; color:#1a1a1a; margin-bottom:8px; font-family:'Playfair Display', serif; font-weight:600;">${name}</h3>
            <p style="font-size:13px; color:#888; margin-bottom:12px;">${images.length > 0 ? images.length + ' foto(s)' : 'Galeria'}</p>
          </div>
          <div>
            <div style="font-size:22px; color:#8B2E2E; font-weight:700; margin-bottom:16px; font-family:'Playfair Display', serif;">${price}</div>
            <a href="contacto.html?produto=${encodeURIComponent(name)}" style="display:inline-block; width:100%; padding:12px 20px; font-size:12px; text-align:center; background:#8B2E2E; color:#fff; border-radius:6px; text-transform:uppercase; letter-spacing:1px; transition:all 0.3s; cursor:pointer; border:none; text-decoration:none;">Consulta</a>
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';

  // Colocar no contentor
  container.innerHTML = html;
  console.log(`✅ ${categoryName} renderizada com sucesso`);
}
