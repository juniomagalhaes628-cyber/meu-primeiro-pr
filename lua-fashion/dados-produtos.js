// ========== LUA FASHION — CATÁLOGO DE PRODUTOS ==========
// Imagens: Unsplash CDN (gratuito, sem API key)
// Substituir pelos preços e imagens reais quando fornecidos pela loja

const BASE = 'https://images.unsplash.com/';
const Q    = '?w=500&h=700&fit=crop&q=80';

const PRODUTOS = [
  {
    id: 1,
    nome: "Blusa Fluida Luar",
    categoria: "tops",
    preco: 16.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["creme","preto","rosa"],
    imagens: [
      BASE + "photo-1485462537746-965f33f7f6a7" + Q,
      BASE + "photo-1434389677669-e08b4cac3105" + Q
    ],
    novo: true,
    destaque: true,
    bestseller: false,
    descricao: "Blusa leve e fluida, perfeita para o dia a dia. Tecido premium com queda suave.",
    tags: ["casual","primavera","verão"]
  },
  {
    id: 2,
    nome: "Calças Wide Leg Lua",
    categoria: "calcas",
    preco: 27.99,
    precoPrev: 34.99,
    tamanhos: ["XS","S","M","L","XL","XXL"],
    cores: ["preto","camel","cinza"],
    imagens: [
      BASE + "photo-1473966968600-fa801b869a1a" + Q,
      BASE + "photo-1584370848010-d7fe6bc767ec" + Q
    ],
    novo: false,
    destaque: true,
    bestseller: true,
    descricao: "Calças wide leg com cintura elástica. Confortáveis e elegantes, ideais para qualquer ocasião.",
    tags: ["casual","trendy","conforto"]
  },
  {
    id: 3,
    nome: "Vestido Meia Estação",
    categoria: "vestidos",
    preco: 29.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L"],
    cores: ["terracota","verde escuro","preto"],
    imagens: [
      BASE + "photo-1496747611176-843222e1e57c" + Q,
      BASE + "photo-1572804013427-4d7ca7268217" + Q
    ],
    novo: true,
    destaque: false,
    bestseller: false,
    descricao: "Vestido midi elegante para a meia estação. Comprimento joelho, ideal para trabalho ou saída.",
    tags: ["elegante","outono","trabalho"]
  },
  {
    id: 4,
    nome: "Casaco Boucle Premium",
    categoria: "casacos",
    preco: 49.99,
    precoPrev: 62.99,
    tamanhos: ["S","M","L","XL"],
    cores: ["creme","preto","cinza"],
    imagens: [
      BASE + "photo-1548712000-b94dae0b7c26" + Q,
      BASE + "photo-1544022613-e87ca75a784a" + Q
    ],
    novo: false,
    destaque: true,
    bestseller: true,
    descricao: "Casaco boucle de qualidade premium. Peça de destaque para qualquer guarda-roupa de outono/inverno.",
    tags: ["premium","outono","inverno","elegante"]
  },
  {
    id: 5,
    nome: "Top Cropped Básico",
    categoria: "tops",
    preco: 12.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["branco","preto","bege","rosa","azul"],
    imagens: [
      BASE + "photo-4wxz1lj_n2I" + Q,
      BASE + "photo-SgIQxcePMco" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: true,
    descricao: "Top cropped essencial para o dia a dia. 100% algodão, lavável à máquina.",
    tags: ["básico","casual","verão"]
  },
  {
    id: 6,
    nome: "Saia Midi Plissada",
    categoria: "saias",
    preco: 28.99,
    precoPrev: 36.99,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["dourado","vinho","verde sage"],
    imagens: [
      BASE + "photo-1583846783214-7229a7a8c0e5" + Q,
      BASE + "photo-1515886657613-9f3515b0c78f" + Q
    ],
    novo: false,
    destaque: true,
    bestseller: false,
    descricao: "Saia midi plissada com corte fluído. Versátil — veste-se com t-shirt ou blusa elegante.",
    tags: ["elegante","versátil","outono"]
  },
  {
    id: 7,
    nome: "Blazer Oversized Noite",
    categoria: "casacos",
    preco: 54.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["preto","creme","cinza escuro"],
    imagens: [
      BASE + "photo-1539109136881-3be0616acf4b" + Q,
      BASE + "photo-1581044777550-4cfa60707c03" + Q
    ],
    novo: true,
    destaque: true,
    bestseller: false,
    descricao: "Blazer oversized com acabamentos premium. Perfeito tanto com jeans como com calças de fato.",
    tags: ["trendy","trabalho","noite","versátil"]
  },
  {
    id: 8,
    nome: "Calças Linho Verão",
    categoria: "calcas",
    preco: 29.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL","XXL"],
    cores: ["branco","bege","azul marinho"],
    imagens: [
      BASE + "photo-QpvMdWqFe1s" + Q,
      BASE + "photo-1583744946564-b52ac1c389c8" + Q
    ],
    novo: true,
    destaque: false,
    bestseller: false,
    descricao: "Calças de linho leves e frescas para os dias quentes. Tecido respirável e confortável.",
    tags: ["verão","linho","casual","conforto"]
  },
  {
    id: 9,
    nome: "Vestido Maxi Boho",
    categoria: "vestidos",
    preco: 42.99,
    precoPrev: 52.99,
    tamanhos: ["S","M","L","XL"],
    cores: ["floral bege","azul índigo","verde"],
    imagens: [
      BASE + "photo-1469334031218-e382a71b716b" + Q,
      BASE + "photo-1502716119720-b23a93e5fe1b" + Q
    ],
    novo: false,
    destaque: true,
    bestseller: true,
    descricao: "Vestido maxi estilo boho com estampados exclusivos. Flui lindamente com o movimento.",
    tags: ["boho","verão","festival","romântico"]
  },
  {
    id: 10,
    nome: "Camisola Decote V",
    categoria: "tops",
    preco: 18.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["camel","cinza","vinho","branco"],
    imagens: [
      BASE + "photo-Rqv98K5kHyw" + Q,
      BASE + "photo-bPZHv3OVVcY" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: true,
    descricao: "Camisola maleável com decote V elegante. Perfeita para usar por dentro ou por fora.",
    tags: ["casual","básico","inverno","primavera"]
  },
  {
    id: 11,
    nome: "Conjunto Coordenado Lua",
    categoria: "conjuntos",
    preco: 52.99,
    precoPrev: 65.99,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["bege","preto","rosa pó"],
    imagens: [
      BASE + "photo-1490481651871-ab68de25d43d" + Q,
      BASE + "photo-1544005313-94ddf0286df2" + Q
    ],
    novo: true,
    destaque: true,
    bestseller: false,
    descricao: "Conjunto top + calças coordenados. Peças que funcionam juntas ou separadamente.",
    tags: ["conjunto","trendy","primavera","versátil"]
  },
  {
    id: 12,
    nome: "Cardigan Tricot Quente",
    categoria: "casacos",
    preco: 39.99,
    precoPrev: null,
    tamanhos: ["S","M","L","XL"],
    cores: ["creme","cinza","terracota","verde escuro"],
    imagens: [
      BASE + "photo-qFDf9mQK0uQ" + Q,
      BASE + "photo-3rkvjdFxW-k" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: true,
    descricao: "Cardigan de tricot com textura premium. Quentinho e estiloso para os dias frios.",
    tags: ["inverno","outono","conforto","tricot"]
  },
  {
    id: 13,
    nome: "Saia Assimétrica Mini",
    categoria: "saias",
    preco: 24.99,
    precoPrev: 32.99,
    tamanhos: ["XS","S","M","L"],
    cores: ["preto","branco","castanho"],
    imagens: [
      BASE + "photo-1591369822096-ffd140ec948f" + Q,
      BASE + "photo-1549062572-544a64fb0c56" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: false,
    descricao: "Saia assimétrica com corte moderno. Bainha irregular para um look contemporâneo.",
    tags: ["trendy","saída","noite","casual"]
  },
  {
    id: 14,
    nome: "Vestido Cocktail Dourado",
    categoria: "vestidos",
    preco: 58.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L"],
    cores: ["dourado","preto","champagne"],
    imagens: [
      BASE + "photo-1580618672591-eb180b1a973f" + Q,
      BASE + "photo-1515886657613-9f3515b0c78f" + Q
    ],
    novo: true,
    destaque: true,
    bestseller: false,
    descricao: "Vestido cocktail com brilhos subtis. Para festas, casamentos e ocasiões especiais.",
    tags: ["festa","elegante","noite","casamento"]
  },
  {
    id: 15,
    nome: "Jeans Skinny Premium",
    categoria: "calcas",
    preco: 36.99,
    precoPrev: 44.99,
    tamanhos: ["34","36","38","40","42","44"],
    cores: ["azul escuro","preto","cinza lavado"],
    imagens: [
      BASE + "photo-1541099649105-f69ad21f3246" + Q,
      BASE + "photo-1584370848010-d7fe6bc767ec" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: true,
    descricao: "Jeans skinny de qualidade premium com elastano para máximo conforto e aderência.",
    tags: ["casual","denim","básico","versátil"]
  },
  {
    id: 16,
    nome: "Trench Coat Clássico",
    categoria: "casacos",
    preco: 74.99,
    precoPrev: 89.99,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["bege","preto","camel"],
    imagens: [
      BASE + "photo-sCThzW4NxQo" + Q,
      BASE + "photo-w4Quk-q747E" + Q
    ],
    novo: false,
    destaque: true,
    bestseller: false,
    descricao: "Trench coat clássico atemporal. Peça de investimento para o guarda-roupa intemporal.",
    tags: ["premium","outono","primavera","elegante","clássico"]
  },
  {
    id: 17,
    nome: "Top Renda Delicado",
    categoria: "tops",
    preco: 19.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L"],
    cores: ["branco","preto","nude"],
    imagens: [
      BASE + "photo-_-ncpRI9NvE" + Q,
      BASE + "photo-eYi76seFZEw" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: false,
    descricao: "Top com detalhes em renda delicada. Feminino e sofisticado para dia ou noite.",
    tags: ["romântico","elegante","especial","feminino"]
  },
  {
    id: 18,
    nome: "Calças Cargo Fashion",
    categoria: "calcas",
    preco: 38.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["verde militar","preto","bege"],
    imagens: [
      BASE + "photo-1583744946564-b52ac1c389c8" + Q,
      BASE + "photo-1473966968600-fa801b869a1a" + Q
    ],
    novo: true,
    destaque: false,
    bestseller: false,
    descricao: "Calças cargo fashion com um toque urbano e moderno. Confortáveis e estilosas.",
    tags: ["urban","casual","trendy","verão"]
  },
  {
    id: 19,
    nome: "Conjunto Fato Riscas",
    categoria: "conjuntos",
    preco: 68.99,
    precoPrev: 82.99,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["preto/branco","azul marinho/branco"],
    imagens: [
      BASE + "photo-1490481651871-ab68de25d43d" + Q,
      BASE + "photo-1539109136881-3be0616acf4b" + Q
    ],
    novo: false,
    destaque: true,
    bestseller: false,
    descricao: "Fato completo com riscas elegantes. Blazer + calças coordenados para o ambiente profissional.",
    tags: ["trabalho","elegante","fato","premium"]
  },
  {
    id: 20,
    nome: "Vestido Wrap Floral",
    categoria: "vestidos",
    preco: 33.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["floral rosa","floral azul","floral vinho"],
    imagens: [
      BASE + "photo-1502716119720-b23a93e5fe1b" + Q,
      BASE + "photo-1469334031218-e382a71b716b" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: true,
    descricao: "Vestido wrap com estampado floral delicado. O wrap favorece todas as silhuetas.",
    tags: ["verão","floral","feminino","versátil","romântico"]
  },
  {
    id: 21,
    nome: "Blusa Seda Ombros Nus",
    categoria: "tops",
    preco: 26.99,
    precoPrev: 33.99,
    tamanhos: ["XS","S","M","L"],
    cores: ["branco","preto","dourado","vinho"],
    imagens: [
      BASE + "photo-zJgcBUtqDTo" + Q,
      BASE + "photo-1485462537746-965f33f7f6a7" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: false,
    descricao: "Blusa com ombros nus em tecido acetinado. Sofisticada para noite ou grandes ocasiões.",
    tags: ["noite","elegante","saída","especial"]
  },
  {
    id: 22,
    nome: "Mini Vestido Glam",
    categoria: "vestidos",
    preco: 44.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L"],
    cores: ["preto","vermelho","dourado"],
    imagens: [
      BASE + "photo-1581044777550-4cfa60707c03" + Q,
      BASE + "photo-1580618672591-eb180b1a973f" + Q
    ],
    novo: true,
    destaque: false,
    bestseller: false,
    descricao: "Mini vestido com detalhes glamorosos. Para noites especiais que merecem atenção.",
    tags: ["noite","festa","glam","saída"]
  },
  {
    id: 23,
    nome: "Camisola Crop Knit",
    categoria: "tops",
    preco: 21.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["creme","preto","azul","rosa"],
    imagens: [
      BASE + "photo-1Pj1Yrpca4A" + Q,
      BASE + "photo-9lX56_DWfME" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: true,
    descricao: "Crop top de malha tricotada para os meses frios. Combina com saia, calças ou jeans.",
    tags: ["inverno","tricot","casual","básico"]
  },
  {
    id: 24,
    nome: "Saia Lápis Executiva",
    categoria: "saias",
    preco: 31.99,
    precoPrev: 39.99,
    tamanhos: ["XS","S","M","L","XL"],
    cores: ["preto","cinza","azul marinho","camel"],
    imagens: [
      BASE + "photo-1591369822096-ffd140ec948f" + Q,
      BASE + "photo-1472417583565-cc2a7ded41de" + Q
    ],
    novo: false,
    destaque: false,
    bestseller: false,
    descricao: "Saia lápis clássica para o ambiente de trabalho. Corte elegante com elástico na cintura.",
    tags: ["trabalho","elegante","clássico","executivo"]
  },
  {
    id: 25,
    nome: "Conjunto Loungewear Lua",
    categoria: "conjuntos",
    preco: 45.99,
    precoPrev: null,
    tamanhos: ["XS","S","M","L","XL","XXL"],
    cores: ["cinza claro","creme","preto","rosa pó"],
    imagens: [
      BASE + "photo-1544005313-94ddf0286df2" + Q,
      BASE + "photo-1490481651871-ab68de25d43d" + Q
    ],
    novo: true,
    destaque: true,
    bestseller: false,
    descricao: "Conjunto loungewear ultra confortável. Para ficar em casa em grande estilo.",
    tags: ["conforto","casa","loungewear","primavera"]
  }
];

// Categorias disponíveis
const CATEGORIAS = [
  { id: "todos",    label: "Todos",     icon: "✦" },
  { id: "tops",     label: "Tops",      icon: "👚" },
  { id: "calcas",   label: "Calças",    icon: "👖" },
  { id: "vestidos", label: "Vestidos",  icon: "👗" },
  { id: "casacos",  label: "Casacos",   icon: "🧥" },
  { id: "saias",    label: "Saias",     icon: "🩱" },
  { id: "conjuntos",label: "Conjuntos", icon: "✨" }
];

// Tamanhos disponíveis
const TAMANHOS = ["XS","S","M","L","XL","XXL","34","36","38","40","42","44"];
