# 🎀 Melos Noivas — Website Premium

Website profissional e responsivo para loja de vestidos de noiva, ternos de noivo e acessórios de casamento em Penafiel, Portugal.

## ✨ Características

### 🎨 Design Premium
- **UI/UX Pro Max**: Glassmorphism, animações suaves (200-300ms), hover states sofisticados
- **Tipografia elegante**: Playfair Display (headers), Lora (body), Inter (UI)
- **Paleta profissional**: Rosa (#8B2E2E), Ouro (#d4af37), Creme (#faf8f3)
- **Responsivo completo**: Mobile-first, tablets e desktop

### 📄 Páginas Estruturadas

| Página | Descrição | Recursos |
|--------|-----------|----------|
| `index.html` | Home com hero parallax | Stats section, featured collections, CTA |
| `colecoes.html` | Catálogo completo de produtos | 535 produtos do CSV, filtros dinâmicos, imagens reais |
| `galeria.html` | Galeria com lightbox | Navegação por teclado, filtros por categoria |
| `sobre.html` | História e valores | Timeline (2008-2024), equipa, valores da marca |
| `contacto.html` | Contacto e formulário | Google Maps, Netlify Forms, horários |

### 📦 Integração de Dados

**CSV com 535 produtos reais:**
- **170 Noivas** em 3 coleções (2.4 fotos/média)
- **126 Noivos** em 1 coleção (1.24 fotos/média)
- **109 Acessórios** (1.11 fotos/média)
- **66 Criança** (mínima documentação)
- **64 Cerimónia** (1.52 fotos/média)
- **Total: 873 fotos integradas**

### 🚀 Funcionalidades JavaScript

✅ Mobile navigation com menu hamburger
✅ Parallax scrolling em hero section
✅ Scroll animations (Intersection Observer)
✅ Counter animations nos stats
✅ Lightbox interativo com navegação
✅ Filtros de produtos com transições
✅ Scroll to top automático
✅ Form validation
✅ Lazy loading de imagens
✅ CSV parser e renderização dinâmica

### ♿ Acessibilidade

- WCAG AA compliance
- `prefers-reduced-motion` respeitado
- Navegação por teclado completa
- Labels associadas aos inputs
- Alt text em imagens
- Contraste adequado

## 📁 Estrutura de Arquivos

```
melos-noivas-v2/
├── index.html              # Home com parallax e animações
├── colecoes.html           # Catálogo dinâmico de produtos
├── galeria.html            # Galeria com lightbox
├── sobre.html              # About page com timeline
├── contacto.html           # Contacto e formulário
├── styles.css              # CSS global (2700+ linhas)
├── app.js                  # JavaScript vanilla (600+ linhas)
├── colecoes-data.js        # Parser CSV e renderização
└── produtos.csv            # 535 produtos com preços e imagens
```

## 🎯 Animações Implementadas

### Page Transitions
- `fadeInUp`: Entrada suave com fade
- `fadeInDown`: Entrada do topo
- `slideInLeft`: Entrada lateral
- `float`: Flutuação contínua
- `glow`: Efeito de brilho

### Hover Effects
- `translateY(-8px)`: Cards elevam-se ao passar o mouse
- `scale(1.05)`: Imagens ampliam levemente
- `color change`: Cores transitam suavemente
- `border-color`: Bordas mudam de cor

### Scroll Animations
- Reveal animations ao scroll
- Counter animations em stats
- Parallax background
- Scroll to top automático

## 🔧 Configuração

### Variáveis CSS
```css
:root {
  --primary: #8B2E2E;           /* Rosa principal */
  --accent: #d4af37;            /* Ouro */
  --cream: #faf8f3;             /* Creme */
  --transition-base: 300ms ease; /* Animações padrão */
}
```

### Google Fonts
```
Playfair Display (600, 700, 800) — Títulos elegantes
Lora (400, 500, 600)              — Body text
Inter (300-700)                   — Interface
```

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| **Produtos** | 535 |
| **Fotos** | 873 |
| **Páginas** | 5 |
| **Categorias** | 5 |
| **CSS Lines** | 2700+ |
| **JS Lines** | 600+ |
| **Tamanho CSS** | ~80KB |

## 🎮 Como Usar

### Localmente

```bash
# Abrir em navegador
open index.html

# Ou usar um servidor local
python -m http.server 8000
# Aceder a http://localhost:8000
```

### Deploy

O website é **100% estático** e pode ser deployado em:
- Netlify (com suporte a formulários)
- GitHub Pages
- Vercel
- Qualquer hosting estático

## 📝 Formulário de Contacto

Integrado com **Netlify Forms**:

```html
<form name="contacto" method="POST" data-netlify="true">
  <!-- Campos do formulário -->
</form>
```

Submissões aparecem automaticamente no painel Netlify.

## 🔗 Links Rápidos

- **Telefone**: +351 916 182 677
- **Email**: geral@melosnoivas.com
- **Morada**: Avenida São Miguel Nº 601, 4575-302 Termas de São Vicente, Penafiel
- **Instagram**: @melosnoivas
- **Facebook**: Melos Noivas

## 🛠️ Tecnologias

- **HTML5** — Semântico e acessível
- **CSS3** — Grid, Flexbox, Animations, Backdrop Filter
- **JavaScript Vanilla** — Sem dependências
- **CSV** — Dados estruturados
- **Google Fonts** — Tipografia premium
- **Google Maps** — Localização integrada
- **Netlify Forms** — Formulários serverless

## 📱 Responsividade

Breakpoints implementados:
- **Desktop**: 1024px+ (2 colunas, full features)
- **Tablet**: 768px-1024px (ajustes de layout)
- **Mobile**: <768px (1 coluna, menu hamburger)
- **Small**: <480px (otimizado para telefones)

## ✅ Performance

- **Lazy loading** de imagens
- **Minified assets** (pronto para produção)
- **Fallback images** para URLs quebradas
- **No external dependencies** — Carrega rápido
- **Optimized animations** — 60fps smooth

## 🎓 Aprendizados Aplicados

- UI/UX Pro Max Skill patterns
- Glassmorphism e Neumorphism
- Soft shadows e smooth transitions
- Reveal animations ao scroll
- CSV parsing em JavaScript puro
- Formulários com Netlify
- SEO otimizado (meta tags, schema.org)
- Acessibilidade WCAG AA

## 📄 Licença

Copyright © 2026 Melos Noivas. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Melos Noivas**
