// Versão simplificada e robusta do ProductLoader

class ProductLoader {
  constructor() {
    this.products = [];
    this.categories = {};
  }

  organizeByCategory() {
    this.categories = {};
    this.products.forEach(product => {
      const category = (product.CATEGORIA || '').trim();
      const collection = (product.COLEÇÃO || '').trim();
      
      if (category && collection) {
        if (!this.categories[category]) {
          this.categories[category] = {};
        }
        if (!this.categories[category][collection]) {
          this.categories[category][collection] = [];
        }
        this.categories[category][collection].push(product);
      }
    });
  }

  getAllProductsByCategory(category) {
    const collections = this.categories[category] || {};
    const products = [];
    Object.values(collections).forEach(items => {
      products.push(...(items || []));
    });
    return products;
  }

  createProductCard(product) {
    const name = product['REFERÊNCIA/NOME'] || 'Produto';
    const price = product.PREÇO_EUR || 'Sob consulta';
    const images = product.URLs_IMAGENS
      ? product.URLs_IMAGENS.split('|').map(u => u.trim()).filter(u => u)
      : [];
    const mainImage = images[0] || '';
    const category = (product.CATEGORIA || '').toLowerCase().replace(/\s+/g, '-');

    const fallbackImages = {
      'noivas': 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop',
      'noivos': 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop',
      'acessórios': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop'
    };

    const displayImage = mainImage || fallbackImages[category] || fallbackImages['acessórios'];

    return `
      <div class="product-card" data-category="${category}">
        <div class="product-image">
          <img src="${displayImage}" alt="${name}" loading="lazy"
               onerror="this.src='${fallbackImages[category] || fallbackImages['acessórios']}'; this.style.display='block';"
               style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="product-info">
          <div>
            <h3 class="product-name">${name}</h3>
            <p class="product-description">${images.length > 0 ? images.length + ' foto(s)' : 'Galeria disponível'}</p>
          </div>
          <div>
            <div class="product-price">${price}</div>
            <a href="contacto.html?produto=${encodeURIComponent(name)}" class="btn btn-primary btn-small">Consulta</a>
          </div>
        </div>
      </div>
    `;
  }

  renderCategory(containerId, category) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Contentor #${containerId} não encontrado`);
      return;
    }

    const products = this.getAllProductsByCategory(category);
    console.log(`Renderizando ${products.length} produtos de ${category}`);

    if (products.length === 0) {
      container.innerHTML = `<p>Nenhum produto encontrado</p>`;
      return;
    }

    const collections = this.categories[category] || {};
    let html = `
      <h2 class="collection-title">${category}</h2>
      <p class="collection-subtitle">${products.length} produtos em ${Object.keys(collections).length} coleção(ões)</p>
      <div class="products-grid">
    `;

    products.forEach(product => {
      html += this.createProductCard(product);
    });

    html += '</div>';
    container.innerHTML = html;
  }

  renderAllCategories() {
    const categoryMapping = {
      'Noivas': 'noivas',
      'Noivos': 'noivos',
      'Acessórios': 'acessorios'
    };

    Object.entries(categoryMapping).forEach(([categoryName, containerId]) => {
      if (this.categories[categoryName] && Object.keys(this.categories[categoryName]).length > 0) {
        this.renderCategory(containerId, categoryName);
      } else {
        console.warn(`${categoryName} não tem dados`);
      }
    });
  }
}

// Carregar produtos quando DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Iniciando...');

  if (typeof PRODUTOS_FALLBACK === 'undefined') {
    console.error('❌ PRODUTOS_FALLBACK não definido!');
    return;
  }

  console.log('✅ PRODUTOS_FALLBACK encontrado');

  const loader = new ProductLoader();

  // Adicionar produtos
  Object.entries(PRODUTOS_FALLBACK).forEach(([categoria, colecoes]) => {
    Object.entries(colecoes).forEach(([colecao, produtos]) => {
      produtos.forEach(p => {
        loader.products.push(p);
      });
    });
  });

  loader.organizeByCategory();
  console.log(`📦 Carregados ${loader.products.length} produtos`);
  console.log('📊 Categorias:', Object.keys(loader.categories));

  // Renderizar
  loader.renderAllCategories();
  console.log('✅ Renderização completa!');
});
