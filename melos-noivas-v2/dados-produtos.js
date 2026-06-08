// Dados dos produtos (fallback quando CSV não carrega)
const PRODUTOS_FALLBACK = {
  "Noivas": {
    "Coleção 1": [
      {"REFERÊNCIA/NOME": "ML2902", "PREÇO_EUR": "1675 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "14"},
      {"REFERÊNCIA/NOME": "ML2905", "PREÇO_EUR": "1957.50 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"},
      {"REFERÊNCIA/NOME": "ML2923", "PREÇO_EUR": "1397 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "ML2946", "PREÇO_EUR": "1765 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "ML2977", "PREÇO_EUR": "1765 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "ML2990", "PREÇO_EUR": "1285 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "ML3471W", "PREÇO_EUR": "1680 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "MT3530", "PREÇO_EUR": "1885 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "MT3537", "PREÇO_EUR": "1295.00 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "5"},
      {"REFERÊNCIA/NOME": "MT8234", "PREÇO_EUR": "925 €", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"}
    ],
    "Coleção 2": [
      {"REFERÊNCIA/NOME": "AC441", "PREÇO_EUR": "975 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "AC443", "PREÇO_EUR": "625 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "AC447", "PREÇO_EUR": "1195 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "AC467", "PREÇO_EUR": "775 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "AC502", "PREÇO_EUR": "825 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "3"},
      {"REFERÊNCIA/NOME": "LN26JAILA", "PREÇO_EUR": "1780.00 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"},
      {"REFERÊNCIA/NOME": "LN26JALISA", "PREÇO_EUR": "1910 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"},
      {"REFERÊNCIA/NOME": "LN26JANEK", "PREÇO_EUR": "1670 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"},
      {"REFERÊNCIA/NOME": "LN26JANIAH", "PREÇO_EUR": "1390 €", "COLEÇÃO": "Coleção 2", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"}
    ],
    "Coleção 3": [
      {"REFERÊNCIA/NOME": "DR2415", "PREÇO_EUR": "1825 €", "COLEÇÃO": "Coleção 3", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"},
      {"REFERÊNCIA/NOME": "EK1619", "PREÇO_EUR": "1650 €", "COLEÇÃO": "Coleção 3", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"},
      {"REFERÊNCIA/NOME": "EK1621", "PREÇO_EUR": "1725 €", "COLEÇÃO": "Coleção 3", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "2"},
      {"REFERÊNCIA/NOME": "EKCT628", "PREÇO_EUR": "2475 €", "COLEÇÃO": "Coleção 3", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"},
      {"REFERÊNCIA/NOME": "EKDR2601", "PREÇO_EUR": "1925 €", "COLEÇÃO": "Coleção 3", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "5"},
      {"REFERÊNCIA/NOME": "EKDR2609", "PREÇO_EUR": "2125 €", "COLEÇÃO": "Coleção 3", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "4"},
      {"REFERÊNCIA/NOME": "EKDR2610", "PREÇO_EUR": "2225 €", "COLEÇÃO": "Coleção 3", "CATEGORIA": "Noivas", "URLs_IMAGENS": "", "TOTAL_FOTOS": "5"}
    ]
  },
  "Noivos": {
    "Coleção 1": [
      {"REFERÊNCIA/NOME": "Fato Preto Premium", "PREÇO_EUR": "Sob consulta", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivos", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Fato Cinzento Moderno", "PREÇO_EUR": "Sob consulta", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivos", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Fato Azul Marinho", "PREÇO_EUR": "Sob consulta", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivos", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Fato Cinzento Clássico", "PREÇO_EUR": "Sob consulta", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivos", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Fato Preto Moderno", "PREÇO_EUR": "Sob consulta", "COLEÇÃO": "Coleção 1", "CATEGORIA": "Noivos", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"}
    ]
  },
  "Acessórios": {
    "Acessórios": [
      {"REFERÊNCIA/NOME": "Tiara de Cristal", "PREÇO_EUR": "420 €", "COLEÇÃO": "Acessórios", "CATEGORIA": "Acessórios", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Sapatos Branco Marfim", "PREÇO_EUR": "185 €", "COLEÇÃO": "Acessórios", "CATEGORIA": "Acessórios", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Bolsa de Mão Elegante", "PREÇO_EUR": "280 €", "COLEÇÃO": "Acessórios", "CATEGORIA": "Acessórios", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Gravata Noivo Premium", "PREÇO_EUR": "A partir de 95 €", "COLEÇÃO": "Acessórios", "CATEGORIA": "Acessórios", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Véu de Noiva", "PREÇO_EUR": "320 €", "COLEÇÃO": "Acessórios", "CATEGORIA": "Acessórios", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Colar de Noiva", "PREÇO_EUR": "550 €", "COLEÇÃO": "Acessórios", "CATEGORIA": "Acessórios", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"},
      {"REFERÊNCIA/NOME": "Pulseira de Cristal", "PREÇO_EUR": "280 €", "COLEÇÃO": "Acessórios", "CATEGORIA": "Acessórios", "URLs_IMAGENS": "", "TOTAL_FOTOS": "1"}
    ]
  }
};
