// CSV Parser e Product Loader
class ProductLoader {
  constructor() {
    this.products = [];
    this.categories = {};
  }

  async loadCSV(filePath) {
    try {
      const response = await fetch(filePath);
      const text = await response.text();
      this.parseCSV(text);
      this.organizeByCategory();
      return this.products;
    } catch (error) {
      console.error('Erro ao carregar CSV:', error);
      return [];
    }
  }

  parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;

      const row = this.parseCSVLine(lines[i]);
      if (row.length < headers.length) continue;

      const product = {};
      headers.forEach((header, index) => {
        product[header.trim()] = row[index]?.trim() || '';
      });

      if (product.CATEGORIA && product['REFERÊNCIA/NOME']) {
        this.products.push(product);
      }
    }
  }

  parseCSVLine(line) {
    const result = [];
    let current = '';
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }

    result.push(current);
    return result;
  }

  organizeByCategory() {
    this.products.forEach(product => {
      const category = product.CATEGORIA.trim();
      if (!this.categories[category]) {
        this.categories[category] = {};
      }

      const collection = product.COLEÇÃO.trim();
      if (!this.categories[category][collection]) {
        this.categories[category][collection] = [];
      }

      this.categories[category][collection].push(product);
    });
  }

  getCategories() {
    return Object.keys(this.categories);
  }

  getCollections(category) {
    return Object.keys(this.categories[category] || {});
  }

  getProducts(category, collection) {
    return this.categories[category]?.[collection] || [];
  }

  getAllProductsByCategory(category) {
    const collections = this.getCollections(category);
    const products = [];
    collections.forEach(collection => {
      products.push(...this.getProducts(category, collection));
    });
    return products;
  }

  createProductCard(product) {
    const name = product['REFERÊNCIA/NOME'];
    const price = product.PREÇO_EUR || 'Sob consulta';
    const images = product.URLs_IMAGENS
      ? product.URLs_IMAGENS.split('|').map(url => url.trim()).filter(url => url)
      : [];
    const mainImage = images[0] || '';
    const category = product.CATEGORIA.trim();
    const collection = product.COLEÇÃO.trim();

    const categoryClass = category.toLowerCase().replace(/\s+/g, '-');

    // Emoji por categoria
    const categoryEmoji = {
      'Noivas': '👰',
      'Noivos': '🤵',
      'Acessórios': '✨',
      'Criança': '👧',
      'Cerimónia': '💒'
    };

    const emoji = categoryEmoji[category] || '✨';

    // Fallback images por categoria
    const fallbackImages = {
      'noivas': 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop',
      'noivos': 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop',
      'acessórios': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop'
    };

    const displayImage = mainImage || fallbackImages[categoryClass] || fallbackImages['acessórios'];

    return `
      <div class="product-card" data-category="${categoryClass}" data-aos="fade-up">
        <div class="product-image">
          <img src="${displayImage}" alt="${name}" loading="lazy"
               onerror="this.src='${fallbackImages[categoryClass] || fallbackImages['acessórios']}'; this.style.display='block';"
               style="width:100%;height:100%;object-fit:cover;">
          <div class="image-placeholder" id="placeholder-${name.replace(/\s+/g, '-')}" style="display:none; position:absolute; inset:0;">
            <span>${emoji}</span>
          </div>
        </div>
        <div class="product-info">
          <div>
            <p class="product-ref">${collection}</p>
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
    if (!container) return;

    const products = this.getAllProductsByCategory(category);
    const collections = this.getCollections(category);

    let html = `
      <h2 class="collection-title">${category}</h2>
      <p class="collection-subtitle">${products.length} produtos em ${collections.length} coleção(ões)</p>
      <div class="products-grid">
    `;

    products.forEach(product => {
      html += this.createProductCard(product);
    });

    html += '</div>';

    container.innerHTML = html;

    // Trigger AOS animation
    AOS.refreshHard?.() || window.AOS?.refresh?.();
  }

  renderAllCategories() {
    const categoryMapping = {
      'Noivas': 'noivas',
      'Noivos': 'noivos',
      'Acessórios': 'acessorios'
    };

    Object.entries(categoryMapping).forEach(([categoryName, containerId]) => {
      console.log(`  Renderizando ${categoryName} em #${containerId}`);
      if (this.categories[categoryName]) {
        console.log(`    ✅ ${Object.keys(this.categories[categoryName]).join(', ')}`);
        this.renderCategory(containerId, categoryName);
      } else {
        console.warn(`    ❌ ${categoryName} não encontrada`);
      }
    });

    // Setup global filters
    this.setupGlobalFilters();
  }

  setupGlobalFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const filter = this.dataset.filter;
        const allCards = document.querySelectorAll('.product-card');

        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        allCards.forEach(card => {
          if (filter === 'todos') {
            card.style.display = 'flex';
            card.style.opacity = '1';
          } else {
            const cardText = (card.textContent || '').toLowerCase();
            if (cardText.includes(filter)) {
              card.style.display = 'flex';
              setTimeout(() => card.style.opacity = '1', 10);
            } else {
              card.style.opacity = '0';
              setTimeout(() => card.style.display = 'none', 300);
            }
          }
        });
      });
    });
  }

  setupFiltersForCategory(containerId) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const container = document.getElementById(containerId);
    if (!container) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const filter = this.dataset.filter;
        const allCards = container.querySelectorAll('.product-card');

        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        allCards.forEach(card => {
          if (filter === 'todos') {
            card.style.display = 'flex';
            card.style.opacity = '1';
          } else {
            const cardName = card.querySelector('.product-name').textContent.toLowerCase();
            const cardRef = card.querySelector('.product-ref').textContent.toLowerCase();

            if (cardName.includes(filter) || cardRef.includes(filter)) {
              card.style.display = 'flex';
              setTimeout(() => card.style.opacity = '1', 10);
            } else {
              card.style.opacity = '0';
              setTimeout(() => card.style.display = 'none', 300);
            }
          }
        });
      });
    });
  }

  addProductFilter(products, filterValue) {
    if (filterValue === 'todos') return products;

    return products.filter(p => {
      const ref = p['REFERÊNCIA/NOME'].toLowerCase();
      const col = p.COLEÇÃO.toLowerCase();
      const price = p.PREÇO_EUR?.toLowerCase() || '';

      return ref.includes(filterValue) || col.includes(filterValue);
    });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Iniciando ProductLoader...');
  const loader = new ProductLoader();

  // Tentar carregar do CSV local
  let products = [];
  try {
    console.log('📄 Tentando carregar CSV...');
    products = await loader.loadCSV('./produtos.csv');
    if (products.length === 0) throw new Error('CSV vazio');
    console.log(`✅ CSV carregado com ${products.length} produtos`);
  } catch (e) {
    console.warn('⚠️ CSV não disponível, usando dados fallback:', e.message);

    // Usar fallback com dados em JS
    if (typeof PRODUTOS_FALLBACK !== 'undefined') {
      console.log('📦 Usando PRODUTOS_FALLBACK...');
      // Converter dados estruturados para formato esperado
      Object.entries(PRODUTOS_FALLBACK).forEach(([category, collections]) => {
        Object.entries(collections).forEach(([collection, items]) => {
          items.forEach(item => {
            loader.products.push(item);
          });
        });
      });
      loader.organizeByCategory();
      products = loader.products;
      console.log(`✅ Usando ${products.length} produtos fallback!`);
    } else {
      console.error('❌ PRODUTOS_FALLBACK não definido!');
    }
  }

  console.log('📊 Categorias encontradas:', Object.keys(loader.categories));

  if (products.length > 0) {
    console.log('🎨 Renderizando categorias...');
    loader.renderAllCategories();
    console.log('✅ Categorias renderizadas!');

    // Setup filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log(`🔘 Encontrados ${filterBtns.length} botões de filtro`);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const filter = this.dataset.filter;
        const allCards = document.querySelectorAll('.product-card');

        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        let visibleCount = 0;
        allCards.forEach(card => {
          if (filter === 'todos') {
            card.style.display = 'flex';
            card.style.opacity = '1';
            visibleCount++;
          } else {
            const cardText = (card.textContent || '').toLowerCase();
            if (cardText.includes(filter)) {
              card.style.display = 'flex';
              setTimeout(() => card.style.opacity = '1', 10);
              visibleCount++;
            } else {
              card.style.opacity = '0';
              setTimeout(() => card.style.display = 'none', 300);
            }
          }
        });
        console.log(`🔍 Filtro "${filter}": ${visibleCount} produtos encontrados`);
      });
    });

    console.log(`✅ Carregados ${products.length} produtos!`);
  } else {
    console.error('❌ Nenhum produto disponível');
  }
});
