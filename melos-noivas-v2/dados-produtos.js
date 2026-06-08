// Dados dos produtos com imagens locais do CSV
const PRODUTOS_FALLBACK = {
  "Noivas": {
    "Coleção 1": [
      {
        "REFERÊNCIA/NOME": "ML2902",
        "PREÇO_EUR": "1675 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2902_1.jpg|images/Noivas/Coleção 1/ML2902_10.jpg|images/Noivas/Coleção 1/ML2902_11.jpg|images/Noivas/Coleção 1/ML2902_12.jpg|images/Noivas/Coleção 1/ML2902_13.jpg|images/Noivas/Coleção 1/ML2902_14.jpg|images/Noivas/Coleção 1/ML2902_2.jpg|images/Noivas/Coleção 1/ML2902_3.jpg|images/Noivas/Coleção 1/ML2902_4.jpg|images/Noivas/Coleção 1/ML2902_5.jpg|images/Noivas/Coleção 1/ML2902_6.jpg|images/Noivas/Coleção 1/ML2902_7.jpg|images/Noivas/Coleção 1/ML2902_8.jpg|images/Noivas/Coleção 1/ML2902_9.jpg",
        "TOTAL_FOTOS": "14"
      },
      {
        "REFERÊNCIA/NOME": "ML2905",
        "PREÇO_EUR": "1957.50 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2905_1.jpg|images/Noivas/Coleção 1/ML2905_2.jpg|images/Noivas/Coleção 1/ML2905_3.jpg|images/Noivas/Coleção 1/ML2905_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "ML2905-2932_06675",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2905-2932_06675_1.jpg|images/Noivas/Coleção 1/ML2905-2932_06675_2.jpg|images/Noivas/Coleção 1/ML2905-2932_06675_3.jpg|images/Noivas/Coleção 1/ML2905-2932_06675_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "ML2923",
        "PREÇO_EUR": "1397 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2923_1.jpg|images/Noivas/Coleção 1/ML2923_2.jpg|images/Noivas/Coleção 1/ML2923_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "ML2946",
        "PREÇO_EUR": "1765 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2946_1.jpg|images/Noivas/Coleção 1/ML2946_2.jpg|images/Noivas/Coleção 1/ML2946_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "ML2977",
        "PREÇO_EUR": "1765 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2977_1.jpg|images/Noivas/Coleção 1/ML2977_2.jpg|images/Noivas/Coleção 1/ML2977_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "ML2977-2932_06675",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2977-2932_06675_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "ML2990",
        "PREÇO_EUR": "1285 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2990_1.jpg|images/Noivas/Coleção 1/ML2990_2.jpg|images/Noivas/Coleção 1/ML2990_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "ML2990_17392",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML2990_17392_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "ML3471W",
        "PREÇO_EUR": "1680 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML3471W_1.jpg|images/Noivas/Coleção 1/ML3471W_2.jpg|images/Noivas/Coleção 1/ML3471W_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "ML3471W_20920",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ML3471W_20920_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "MT3530",
        "PREÇO_EUR": "1885 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT3530_1.jpeg|images/Noivas/Coleção 1/MT3530_2.jpeg|images/Noivas/Coleção 1/MT3530_3.jpeg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "MT3530FVCAPE63",
        "PREÇO_EUR": "325 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT3530FVCAPE63_1.jpeg|images/Noivas/Coleção 1/MT3530FVCAPE63_2.jpeg",
        "TOTAL_FOTOS": "2"
      },
      {
        "REFERÊNCIA/NOME": "MT3537",
        "PREÇO_EUR": "1295.00 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT3537_1.jpg|images/Noivas/Coleção 1/MT3537_2.jpeg|images/Noivas/Coleção 1/MT3537_3.jpg|images/Noivas/Coleção 1/MT3537_4.jpg|images/Noivas/Coleção 1/MT3537_5.jpg",
        "TOTAL_FOTOS": "5"
      },
      {
        "REFERÊNCIA/NOME": "MT8092CAPA",
        "PREÇO_EUR": "650.00 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8092CAPA_1.jpg|images/Noivas/Coleção 1/MT8092CAPA_2.jpg",
        "TOTAL_FOTOS": "2"
      },
      {
        "REFERÊNCIA/NOME": "MT8234",
        "PREÇO_EUR": "925 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8234_1.jpg|images/Noivas/Coleção 1/MT8234_2.jpg|images/Noivas/Coleção 1/MT8234_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "MT8295",
        "PREÇO_EUR": "1375.00 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8295_1.jpeg|images/Noivas/Coleção 1/MT8295_2.jpeg",
        "TOTAL_FOTOS": "2"
      },
      {
        "REFERÊNCIA/NOME": "MT8295A",
        "PREÇO_EUR": "1375 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MT8324",
        "PREÇO_EUR": "1375 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MT8334",
        "PREÇO_EUR": "1125 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MT8334C",
        "PREÇO_EUR": "1125 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MT8336A",
        "PREÇO_EUR": "1125 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MT8336C",
        "PREÇO_EUR": "1125 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MT8357",
        "PREÇO_EUR": "1750.00 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8357_1.jpeg|images/Noivas/Coleção 1/MT8357_2.jpeg|images/Noivas/Coleção 1/MT8357_3.jpg|images/Noivas/Coleção 1/MT8357_4.jpg|images/Noivas/Coleção 1/MT8357_5.jpg|images/Noivas/Coleção 1/MT8357_6.jpg|images/Noivas/Coleção 1/MT8357_7.jpg",
        "TOTAL_FOTOS": "7"
      },
      {
        "REFERÊNCIA/NOME": "MT8365+0022",
        "PREÇO_EUR": "1100.00 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8365+0022_1.jpg|images/Noivas/Coleção 1/MT8365+0022_2.jpg|images/Noivas/Coleção 1/MT8365+0022_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "MT8368",
        "PREÇO_EUR": "1295 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8368_1.jpeg|images/Noivas/Coleção 1/MT8368_2.jpeg|images/Noivas/Coleção 1/MT8368_3.jpeg|images/Noivas/Coleção 1/MT8368_4.jpg|images/Noivas/Coleção 1/MT8368_5.jpg|images/Noivas/Coleção 1/MT8368_6.jpg",
        "TOTAL_FOTOS": "6"
      },
      {
        "REFERÊNCIA/NOME": "MT8372",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8372_1.jpeg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "MT8372+8082",
        "PREÇO_EUR": "1625 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8372+8082_1.jpeg|images/Noivas/Coleção 1/MT8372+8082_2.jpeg|images/Noivas/Coleção 1/MT8372+8082_3.jpeg|images/Noivas/Coleção 1/MT8372+8082_4.jpeg|images/Noivas/Coleção 1/MT8372+8082_5.jpeg|images/Noivas/Coleção 1/MT8372+8082_6.jpeg",
        "TOTAL_FOTOS": "6"
      },
      {
        "REFERÊNCIA/NOME": "MT8377 BODICE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8377 BODICE_1.jpeg|images/Noivas/Coleção 1/MT8377 BODICE_2.jpeg|images/Noivas/Coleção 1/MT8377 BODICE_3.jpeg|images/Noivas/Coleção 1/MT8377 BODICE_4.jpeg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "MT8377+8065",
        "PREÇO_EUR": "1365 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/MT8377+8065_1.jpeg|images/Noivas/Coleção 1/MT8377+8065_2.jpeg|images/Noivas/Coleção 1/MT8377+8065_3.jpeg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "RJ69846",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/RJ69846_1.jpeg|images/Noivas/Coleção 1/RJ69846_2.jpeg|images/Noivas/Coleção 1/RJ69846_3.jpeg|images/Noivas/Coleção 1/RJ69846_4.jpeg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "RJ69910_006",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/RJ69910_006_1.jpg|images/Noivas/Coleção 1/RJ69910_006_2.jpg|images/Noivas/Coleção 1/RJ69910_006_3.jpg|images/Noivas/Coleção 1/RJ69910_006_4.jpg|images/Noivas/Coleção 1/RJ69910_006_5.jpg",
        "TOTAL_FOTOS": "5"
      },
      {
        "REFERÊNCIA/NOME": "RJ69922_071",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/RJ69922_071_1.jpg|images/Noivas/Coleção 1/RJ69922_071_2.jpg|images/Noivas/Coleção 1/RJ69922_071_3.jpg|images/Noivas/Coleção 1/RJ69922_071_4.jpg|images/Noivas/Coleção 1/RJ69922_071_5.jpg|images/Noivas/Coleção 1/RJ69922_071_6.jpg",
        "TOTAL_FOTOS": "6"
      },
      {
        "REFERÊNCIA/NOME": "VI53055_0007",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI53055_0007_1.jpg|images/Noivas/Coleção 1/VI53055_0007_2.jpg|images/Noivas/Coleção 1/VI53055_0007_3.jpg|images/Noivas/Coleção 1/VI53055_0007_4.jpg|images/Noivas/Coleção 1/VI53055_0007_5.jpg",
        "TOTAL_FOTOS": "5"
      },
      {
        "REFERÊNCIA/NOME": "VI53055_0108",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI53055_0108_1.jpg|images/Noivas/Coleção 1/VI53055_0108_2.jpg|images/Noivas/Coleção 1/VI53055_0108_3.jpg|images/Noivas/Coleção 1/VI53055_0108_4.jpg|images/Noivas/Coleção 1/VI53055_0108_5.jpg|images/Noivas/Coleção 1/VI53055_0108_6.jpg|images/Noivas/Coleção 1/VI53055_0108_7.jpg|images/Noivas/Coleção 1/VI53055_0108_8.jpg",
        "TOTAL_FOTOS": "8"
      },
      {
        "REFERÊNCIA/NOME": "VI53059_0015",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI53059_0015_1.jpg|images/Noivas/Coleção 1/VI53059_0015_10.jpg|images/Noivas/Coleção 1/VI53059_0015_2.jpg|images/Noivas/Coleção 1/VI53059_0015_3.jpg|images/Noivas/Coleção 1/VI53059_0015_4.jpg|images/Noivas/Coleção 1/VI53059_0015_5.jpg|images/Noivas/Coleção 1/VI53059_0015_6.jpg|images/Noivas/Coleção 1/VI53059_0015_7.jpg|images/Noivas/Coleção 1/VI53059_0015_8.jpg|images/Noivas/Coleção 1/VI53059_0015_9.jpg",
        "TOTAL_FOTOS": "10"
      },
      {
        "REFERÊNCIA/NOME": "VI63006",
        "PREÇO_EUR": "2237 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63006_1.jpg|images/Noivas/Coleção 1/VI63006_2.jpg|images/Noivas/Coleção 1/VI63006_3.jpg|images/Noivas/Coleção 1/VI63006_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "VI63006_0056",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63006_0056_1.jpg|images/Noivas/Coleção 1/VI63006_0056_2.jpg|images/Noivas/Coleção 1/VI63006_0056_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "VI63027",
        "PREÇO_EUR": "2525 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63027_1.jpg|images/Noivas/Coleção 1/VI63027_2.jpg|images/Noivas/Coleção 1/VI63027_3.jpg|images/Noivas/Coleção 1/VI63027_4.jpg|images/Noivas/Coleção 1/VI63027_5.jpg",
        "TOTAL_FOTOS": "5"
      },
      {
        "REFERÊNCIA/NOME": "VI63070",
        "PREÇO_EUR": "1475 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63070_1.jpg|images/Noivas/Coleção 1/VI63070_2.jpg|images/Noivas/Coleção 1/VI63070_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "VI63070_0008",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63070_0008_1.jpg|images/Noivas/Coleção 1/VI63070_0008_2.jpg|images/Noivas/Coleção 1/VI63070_0008_3.jpg|images/Noivas/Coleção 1/VI63070_0008_4.jpg|images/Noivas/Coleção 1/VI63070_0008_5.jpg|images/Noivas/Coleção 1/VI63070_0008_6.jpg",
        "TOTAL_FOTOS": "6"
      },
      {
        "REFERÊNCIA/NOME": "VI63103",
        "PREÇO_EUR": "2097 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63103_1.jpg|images/Noivas/Coleção 1/VI63103_2.jpg|images/Noivas/Coleção 1/VI63103_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "VI63103PS",
        "PREÇO_EUR": "Sob consulta",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63103PS_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "VI63103_10222_02107",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63103_10222_02107_1.jpg|images/Noivas/Coleção 1/VI63103_10222_02107_2.jpg|images/Noivas/Coleção 1/VI63103_10222_02107_3.jpg|images/Noivas/Coleção 1/VI63103_10222_02107_4.jpg|images/Noivas/Coleção 1/VI63103_10222_02107_5.jpg|images/Noivas/Coleção 1/VI63103_10222_02107_6.jpg",
        "TOTAL_FOTOS": "6"
      },
      {
        "REFERÊNCIA/NOME": "VI63106",
        "PREÇO_EUR": "1695 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63106_1.jpg|images/Noivas/Coleção 1/VI63106_2.jpg|images/Noivas/Coleção 1/VI63106_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "VI63106CAPA SOB CONSULTA",
        "PREÇO_EUR": "Sob consulta",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63106CAPA SOB CONSULTA_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "VI63122",
        "PREÇO_EUR": "2375.00 €",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63122_1.jpg|images/Noivas/Coleção 1/VI63122_2.jpg|images/Noivas/Coleção 1/VI63122_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "VI63122_63123",
        "PREÇO_EUR": "Sob consulta",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63122_63123_1.jpg|images/Noivas/Coleção 1/VI63122_63123_2.jpg",
        "TOTAL_FOTOS": "2"
      },
      {
        "REFERÊNCIA/NOME": "VI63122_63123-3289",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/VI63122_63123-3289_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "Z02",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/Z02_1.jpg|images/Noivas/Coleção 1/Z02_10.jpg|images/Noivas/Coleção 1/Z02_11.jpg|images/Noivas/Coleção 1/Z02_2.jpg|images/Noivas/Coleção 1/Z02_3.jpg|images/Noivas/Coleção 1/Z02_4.jpg|images/Noivas/Coleção 1/Z02_5.jpeg|images/Noivas/Coleção 1/Z02_6.jpg|images/Noivas/Coleção 1/Z02_7.jpeg|images/Noivas/Coleção 1/Z02_8.jpg|images/Noivas/Coleção 1/Z02_9.jpeg",
        "TOTAL_FOTOS": "11"
      },
      {
        "REFERÊNCIA/NOME": "ZBR 25421 1858",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ZBR 25421 1858_1.jpg|images/Noivas/Coleção 1/ZBR 25421 1858_2.jpg|images/Noivas/Coleção 1/ZBR 25421 1858_3.jpg|images/Noivas/Coleção 1/ZBR 25421 1858_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "ZME 25301 6396",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 1/ZME 25301 6396_1.jpg|images/Noivas/Coleção 1/ZME 25301 6396_2.jpg",
        "TOTAL_FOTOS": "2"
      }
    ],
    "Coleção 2": [
      {
        "REFERÊNCIA/NOME": "AC441",
        "PREÇO_EUR": "975 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC441_1.jpg|images/Noivas/Coleção 2/AC441_2.jpg|images/Noivas/Coleção 2/AC441_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "AC443",
        "PREÇO_EUR": "625 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC443_1.jpg|images/Noivas/Coleção 2/AC443_2.jpg|images/Noivas/Coleção 2/AC443_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "AC447",
        "PREÇO_EUR": "1195 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC447_1.jpg|images/Noivas/Coleção 2/AC447_2.jpg|images/Noivas/Coleção 2/AC447_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "AC467",
        "PREÇO_EUR": "775 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC467_1.jpg|images/Noivas/Coleção 2/AC467_2.jpg|images/Noivas/Coleção 2/AC467_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "AC502",
        "PREÇO_EUR": "825 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC502_1.jpg|images/Noivas/Coleção 2/AC502_2.jpg|images/Noivas/Coleção 2/AC502_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "AC608",
        "PREÇO_EUR": "785.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC608_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC613",
        "PREÇO_EUR": "885.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC613_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC630",
        "PREÇO_EUR": "995.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC630_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC638",
        "PREÇO_EUR": "525.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC638_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC639",
        "PREÇO_EUR": "885.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC639_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC654",
        "PREÇO_EUR": "865.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC654_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC657",
        "PREÇO_EUR": "885.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC657_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC665",
        "PREÇO_EUR": "1075.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC665_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC672",
        "PREÇO_EUR": "1195.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC672_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC685",
        "PREÇO_EUR": "825.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC685_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC699",
        "PREÇO_EUR": "1345.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC699_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AC703",
        "PREÇO_EUR": "750.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/AC703_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "ACREUS",
        "PREÇO_EUR": "999 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/ACREUS_1.jpg|images/Noivas/Coleção 2/ACREUS_2.jpg",
        "TOTAL_FOTOS": "2"
      },
      {
        "REFERÊNCIA/NOME": "ACZIVA",
        "PREÇO_EUR": "815 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/ACZIVA_1.jpg|images/Noivas/Coleção 2/ACZIVA_2.jpg|images/Noivas/Coleção 2/ACZIVA_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LN24CARICE",
        "PREÇO_EUR": "1670 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN24CARICE_1.jpg|images/Noivas/Coleção 2/LN24CARICE_2.jpg|images/Noivas/Coleção 2/LN24CARICE_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LN24TULSA",
        "PREÇO_EUR": "1360 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN24TULSA_1.jpg|images/Noivas/Coleção 2/LN24TULSA_2.jpg|images/Noivas/Coleção 2/LN24TULSA_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LN26JAILA",
        "PREÇO_EUR": "1780.00 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JAILA_1.jpg|images/Noivas/Coleção 2/LN26JAILA_2.jpg|images/Noivas/Coleção 2/LN26JAILA_3.jpg|images/Noivas/Coleção 2/LN26JAILA_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "LN26JALISA",
        "PREÇO_EUR": "1910 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JALISA_1.jpg|images/Noivas/Coleção 2/LN26JALISA_2.jpg|images/Noivas/Coleção 2/LN26JALISA_3.jpg|images/Noivas/Coleção 2/LN26JALISA_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "LN26JANEK",
        "PREÇO_EUR": "1670 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JANEK_1.jpg|images/Noivas/Coleção 2/LN26JANEK_2.jpg|images/Noivas/Coleção 2/LN26JANEK_3.jpg|images/Noivas/Coleção 2/LN26JANEK_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "LN26JANIAH",
        "PREÇO_EUR": "1390 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JANIAH_1.jpg|images/Noivas/Coleção 2/LN26JANIAH_2.jpg|images/Noivas/Coleção 2/LN26JANIAH_3.jpg|images/Noivas/Coleção 2/LN26JANIAH_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "LN26JARELLA",
        "PREÇO_EUR": "1770 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JARELLA_1.jpg|images/Noivas/Coleção 2/LN26JARELLA_2.jpg|images/Noivas/Coleção 2/LN26JARELLA_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LN26JARETT",
        "PREÇO_EUR": "2380 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JARETT_1.jpg|images/Noivas/Coleção 2/LN26JARETT_2.jpg|images/Noivas/Coleção 2/LN26JARETT_3.jpg|images/Noivas/Coleção 2/LN26JARETT_4.jpg|images/Noivas/Coleção 2/LN26JARETT_5.jpg",
        "TOTAL_FOTOS": "5"
      },
      {
        "REFERÊNCIA/NOME": "LN26JAYDE",
        "PREÇO_EUR": "2170 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JAYDE_1.jpg|images/Noivas/Coleção 2/LN26JAYDE_2.jpg|images/Noivas/Coleção 2/LN26JAYDE_3.jpg|images/Noivas/Coleção 2/LN26JAYDE_4.jpg|images/Noivas/Coleção 2/LN26JAYDE_5.jpg",
        "TOTAL_FOTOS": "5"
      },
      {
        "REFERÊNCIA/NOME": "LN26JENDRI",
        "PREÇO_EUR": "2450 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JENDRI_1.jpg|images/Noivas/Coleção 2/LN26JENDRI_2.jpg|images/Noivas/Coleção 2/LN26JENDRI_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LN26JERI",
        "PREÇO_EUR": "1540 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JERI_1.jpg|images/Noivas/Coleção 2/LN26JERI_2.jpg|images/Noivas/Coleção 2/LN26JERI_3.jpg|images/Noivas/Coleção 2/LN26JERI_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "LN26JERMA",
        "PREÇO_EUR": "1540 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JERMA_1.jpg|images/Noivas/Coleção 2/LN26JERMA_2.jpg|images/Noivas/Coleção 2/LN26JERMA_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LN26JESSAM",
        "PREÇO_EUR": "1670 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JESSAM_1.jpg|images/Noivas/Coleção 2/LN26JESSAM_2.jpg|images/Noivas/Coleção 2/LN26JESSAM_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LN26JORJA",
        "PREÇO_EUR": "1850 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JORJA_1.jpg|images/Noivas/Coleção 2/LN26JORJA_2.jpg|images/Noivas/Coleção 2/LN26JORJA_3.jpg|images/Noivas/Coleção 2/LN26JORJA_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "LN26JOVAN",
        "PREÇO_EUR": "1940 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JOVAN_1.jpg|images/Noivas/Coleção 2/LN26JOVAN_2.jpg|images/Noivas/Coleção 2/LN26JOVAN_3.jpg|images/Noivas/Coleção 2/LN26JOVAN_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "LN26JULEE",
        "PREÇO_EUR": "1520 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LN26JULEE_1.jpg|images/Noivas/Coleção 2/LN26JULEE_2.jpg|images/Noivas/Coleção 2/LN26JULEE_3.jpg|images/Noivas/Coleção 2/LN26JULEE_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "LNTARNEY",
        "PREÇO_EUR": "1790 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LNTARNEY_1.jpg|images/Noivas/Coleção 2/LNTARNEY_2.jpg|images/Noivas/Coleção 2/LNTARNEY_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LNTERIA",
        "PREÇO_EUR": "2190 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LNTERIA_1.jpg|images/Noivas/Coleção 2/LNTERIA_2.jpg|images/Noivas/Coleção 2/LNTERIA_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LNTEYER",
        "PREÇO_EUR": "1790 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LNTEYER_1.jpg|images/Noivas/Coleção 2/LNTEYER_2.jpg|images/Noivas/Coleção 2/LNTEYER_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "LNTIBERIA",
        "PREÇO_EUR": "1670 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/LNTIBERIA_1.jpg|images/Noivas/Coleção 2/LNTIBERIA_2.jpg|images/Noivas/Coleção 2/LNTIBERIA_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "SEALAN",
        "PREÇO_EUR": "1850 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/SEALAN_1.jpg|images/Noivas/Coleção 2/SEALAN_2.jpg|images/Noivas/Coleção 2/SEALAN_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "SESUN",
        "PREÇO_EUR": "1810 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/SESUN_1.jpg|images/Noivas/Coleção 2/SESUN_2.jpg|images/Noivas/Coleção 2/SESUN_3.jpg|images/Noivas/Coleção 2/SESUN_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "SOLAN",
        "PREÇO_EUR": "1810 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/SOLAN_1.jpg|images/Noivas/Coleção 2/SOLAN_2.jpg|images/Noivas/Coleção 2/SOLAN_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "SOLINE- RASO",
        "PREÇO_EUR": "1470 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/SOLINE- RASO_1.jpg|images/Noivas/Coleção 2/SOLINE- RASO_2.jpg|images/Noivas/Coleção 2/SOLINE- RASO_3.jpg",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "VALETE",
        "PREÇO_EUR": "1520 €",
        "COLEÇÃO": "Coleção 2",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 2/VALETE_1.jpg|images/Noivas/Coleção 2/VALETE_2.jpg|images/Noivas/Coleção 2/VALETE_3.jpg",
        "TOTAL_FOTOS": "3"
      }
    ],
    "Coleção 3": [
      {
        "REFERÊNCIA/NOME": "(SEM REFERÊNCIA IDENTIFICÁVEL)",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 3",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "DR2415",
        "PREÇO_EUR": "1825 €",
        "COLEÇÃO": "Coleção 3",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 3/DR2415_1.jpg|images/Noivas/Coleção 3/DR2415_2.jpg|images/Noivas/Coleção 3/DR2415_3.jpg|images/Noivas/Coleção 3/DR2415_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "EK1619",
        "PREÇO_EUR": "1650 €",
        "COLEÇÃO": "Coleção 3",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 3/EK1619_1.jpg|images/Noivas/Coleção 3/EK1619_2.jpg|images/Noivas/Coleção 3/EK1619_3.jpg|images/Noivas/Coleção 3/EK1619_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "EK1621",
        "PREÇO_EUR": "1725 €",
        "COLEÇÃO": "Coleção 3",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 3/EK1621_1.jpg|images/Noivas/Coleção 3/EK1621_2.jpg",
        "TOTAL_FOTOS": "2"
      },
      {
        "REFERÊNCIA/NOME": "EKCT628",
        "PREÇO_EUR": "2475 €",
        "COLEÇÃO": "Coleção 3",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 3/EKCT628_1.jpg|images/Noivas/Coleção 3/EKCT628_2.jpg|images/Noivas/Coleção 3/EKCT628_3.jpg|images/Noivas/Coleção 3/EKCT628_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "EKDR2601",
        "PREÇO_EUR": "1925 €",
        "COLEÇÃO": "Coleção 3",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 3/EKDR2601_1.jpg|images/Noivas/Coleção 3/EKDR2601_2.jpg|images/Noivas/Coleção 3/EKDR2601_3.jpg|images/Noivas/Coleção 3/EKDR2601_4.jpg|images/Noivas/Coleção 3/EKDR2601_5.jpg",
        "TOTAL_FOTOS": "5"
      },
      {
        "REFERÊNCIA/NOME": "EKDR2609",
        "PREÇO_EUR": "2125 €",
        "COLEÇÃO": "Coleção 3",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 3/EKDR2609_1.jpg|images/Noivas/Coleção 3/EKDR2609_2.jpg|images/Noivas/Coleção 3/EKDR2609_3.jpg|images/Noivas/Coleção 3/EKDR2609_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "EKDR2610",
        "PREÇO_EUR": "2225 €",
        "COLEÇÃO": "Coleção 3",
        "CATEGORIA": "Noivas",
        "URLs_IMAGENS": "images/Noivas/Coleção 3/EKDR2610_1.jpg|images/Noivas/Coleção 3/EKDR2610_2.jpg|images/Noivas/Coleção 3/EKDR2610_3.jpg|images/Noivas/Coleção 3/EKDR2610_4.jpg|images/Noivas/Coleção 3/EKDR2610_5.jpg",
        "TOTAL_FOTOS": "5"
      }
    ]
  },
  "Noivos": {
    "Coleção 1": [
      {
        "REFERÊNCIA/NOME": "078B5091-2A18-2A75-C848-C08910A5565A",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/078B5091-2A18-2A75-C848-C08910A5565A_1.jpeg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "(SEM REFERÊNCIA IDENTIFICÁVEL)",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "126-LOOK-LARGE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/126-LOOK-LARGE_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "129-LOOK-LARGE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/129-LOOK-LARGE_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "133-LOOK-LARGE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/133-LOOK-LARGE_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "136-LOOK-LARGE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/136-LOOK-LARGE_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "147-LOOK-LARGE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/147-LOOK-LARGE_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "1AJA101.260",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/1AJA101.260_1.jpg|images/Noivos/Coleção 1/1AJA101.260_10.jpg|images/Noivos/Coleção 1/1AJA101.260_11.jpg|images/Noivos/Coleção 1/1AJA101.260_12.jpg|images/Noivos/Coleção 1/1AJA101.260_13.jpg|images/Noivos/Coleção 1/1AJA101.260_14.jpg|images/Noivos/Coleção 1/1AJA101.260_15.jpg|images/Noivos/Coleção 1/1AJA101.260_16.jpg|images/Noivos/Coleção 1/1AJA101.260_17.jpg|images/Noivos/Coleção 1/1AJA101.260_18.jpg|images/Noivos/Coleção 1/1AJA101.260_19.jpg|images/Noivos/Coleção 1/1AJA101.260_2.jpg|images/Noivos/Coleção 1/1AJA101.260_20.jpg|images/Noivos/Coleção 1/1AJA101.260_21.jpg|images/Noivos/Coleção 1/1AJA101.260_3.jpg|images/Noivos/Coleção 1/1AJA101.260_4.jpg|images/Noivos/Coleção 1/1AJA101.260_5.jpg|images/Noivos/Coleção 1/1AJA101.260_6.jpg|images/Noivos/Coleção 1/1AJA101.260_7.jpg|images/Noivos/Coleção 1/1AJA101.260_8.jpg|images/Noivos/Coleção 1/1AJA101.260_9.jpg",
        "TOTAL_FOTOS": "21"
      },
      {
        "REFERÊNCIA/NOME": "3712-PRODUCT-LARGE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/3712-PRODUCT-LARGE_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "3721-PRODUCT-LARGE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/3721-PRODUCT-LARGE_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "4106-PRODUCT-LARGE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/4106-PRODUCT-LARGE_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__0112_1028D510_JAKARTA_TURQUOISE___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__0112_1028D510_JAKARTA_TURQUOISE___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__0549_1049D290_NEPAL_BORDEAUX___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__0549_1049D290_NEPAL_BORDEAUX___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__0581_1049D290_NEPAL_GREEN___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__0581_1049D290_NEPAL_GREEN___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__0606_1049D290_NEPAL_BLUE___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__0606_1049D290_NEPAL_BLUE___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__0990_1057D230_MELES_IVORY___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__0990_1057D230_MELES_IVORY___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__1122_1057D230_MELES_BROWN_PARLIAMENT___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__1122_1057D230_MELES_BROWN_PARLIAMENT___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__1193_1038D270_NEPAL_LBLUE___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__1193_1038D270_NEPAL_LBLUE___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__1203_1038D270_NEPAL_LGREEN___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__1203_1038D270_NEPAL_LGREEN___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__1222_1038D270_NEPAL_BLUE___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__1222_1038D270_NEPAL_BLUE___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__2109_958V520_NANTES_BEIGE___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__2109_958V520_NANTES_BEIGE___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__2117_958V520_NANTES_LBLUE___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__2117_958V520_NANTES_LBLUE___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__2243_958V520_NANTES_LGREEN___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__2243_958V520_NANTES_LGREEN___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__3233_1024D670_NANDO_BLUE___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__3233_1024D670_NANDO_BLUE___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__3578_1002D220_DUBLIN_NAVY_BORDEAUX___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__3578_1002D220_DUBLIN_NAVY_BORDEAUX___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "AB__3696_1031D340_ZEUS_VIOLET___T_INTERNET",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/AB__3696_1031D340_ZEUS_VIOLET___T_INTERNET_1.jpg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "COR123.250",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/COR123.250_1.jpg|images/Noivos/Coleção 1/COR123.250_2.jpg|images/Noivos/Coleção 1/COR123.250_3.jpg|images/Noivos/Coleção 1/COR123.250_4.jpg",
        "TOTAL_FOTOS": "4"
      },
      {
        "REFERÊNCIA/NOME": "COR127.250",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/COR127.250_1.jpg|images/Noivos/Coleção 1/COR127.250_2.jpg|images/Noivos/Coleção 1/COR127.250_3.jpg|images/Noivos/Coleção 1/COR127.250_4.jpg|images/Noivos/Coleção 1/COR127.250_5.jpg",
        "TOTAL_FOTOS": "5"
      },
      {
        "REFERÊNCIA/NOME": "FEEL_42_22_910_V2",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/FEEL_42_22_910_V2_1.jpeg",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST 31",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST 31_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST 32",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST 32_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST 33",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST 33_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST 34",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST 34_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST 36",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST 36_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST 37",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST 37_1.png|images/Noivos/Coleção 1/SS25 POST 37_2.png",
        "TOTAL_FOTOS": "2"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST 39",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST 39_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST 40",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST 40_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST INSTA",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST INSTA_1.png|images/Noivos/Coleção 1/SS25 POST INSTA_2.png|images/Noivos/Coleção 1/SS25 POST INSTA_3.png",
        "TOTAL_FOTOS": "3"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST INSTA-1",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST INSTA-1_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST INSTA-2",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST INSTA-2_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST INSTA-3",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST INSTA-3_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST INSTA-4",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST INSTA-4_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST INSTA-5",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST INSTA-5_1.png",
        "TOTAL_FOTOS": "1"
      },
      {
        "REFERÊNCIA/NOME": "SS25 POST INSTA-6",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Coleção 1",
        "CATEGORIA": "Noivos",
        "URLs_IMAGENS": "images/Noivos/Coleção 1/SS25 POST INSTA-6_1.png",
        "TOTAL_FOTOS": "1"
      }
    ]
  },
  "Cerimónia": {
    "Galeria": [
      {
        "REFERÊNCIA/NOME": "1-EXPERTO-1",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "1-EXPERTO-2",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "1257-310102_BIG",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "(SEM REFERÊNCIA IDENTIFICÁVEL)",
        "PREÇO_EUR": "1324 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "1367-311127-1_FULL",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "1367-311127_BIG",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "1443G_FRONT",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "1A",
        "PREÇO_EUR": "3124 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "29733-TEAL",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "29801_SHAMROCK_011_492X768",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "29801_SHAMROCK_023_512X768",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "29805_A_SALMON_001_494X768",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "29805_A_SALMON_005_512X768",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "314159-SCALED",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "3646C_FRONT",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "785N_FRONT",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "9059_BA",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "9059_F",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "D16557 BACK",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "D16557 FRONT",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "ENDRINA-1",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "ENDRINA-2",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "M1870-MIDNIGHTBLUEX1200",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "M1870BX1200",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "M1972-HUNTER-ZOOM",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "M7983-ROSEGOLD-ZOOM",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "M7983B-ROSEGOLD-ZOOM",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "Z",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Cerimónia",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      }
    ]
  },
  "Criança": {
    "Galeria": [
      {
        "REFERÊNCIA/NOME": "(SEM REFERÊNCIA IDENTIFICÁVEL)",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "84687533_477923049568342_6842089932836569088_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "85023197_477925119568135_8420752033459470336_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "85023201_477924126234901_455832141914177536_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "85106045_477922586235055_903224376738971648_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "86477261_477922656235048_3560705755864629248_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "86695790_477925616234752_1635417413379948544_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "86701828_477925809568066_4848318611695075328_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "86723638_477922979568349_2878727642897448960_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "AG20252",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "AM2003P",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "AM4840",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "BG77006",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "CL23315",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "CL23317",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "CL24325",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMG_2232-CROP",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMG_2235",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMG_2236",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMG_2243",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMG_2261",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMG_2277",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMG_2285",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MF07.345",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN18019",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN220002C",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN220002CA",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN220008",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN220010",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN230006",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN24002",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN24002A",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN24005",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN24006",
        "PREÇO_EUR": "350.00 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MN24007",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PC117P009",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PC120P193",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PCCONJ.120P235",
        "PREÇO_EUR": "307 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PCCVESTP325A",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PCCVESTP325B",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PCVESTP317P318P319",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PCVESTP352",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PCVESTP352A",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PCVESTP415P070",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PCVESTP417P313P070",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PPP1-5991",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PRODUCT_IMG_13212_FEATURE_IMG-1120X1606",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PRODUCT_IMG_13212_GALLERY_IMG_1-1120X1606",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "PRODUCT_IMG_13212_GALLERY_IMG_3-1120X1606",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "RMVESTC4004LEI",
        "PREÇO_EUR": "425 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "RMVESTC4004LEI2",
        "PREÇO_EUR": "425 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S1931",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S1956",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "V16-9006",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "V709003",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Criança",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      }
    ]
  },
  "Acessórios": {
    "Galeria": [
      {
        "REFERÊNCIA/NOME": "(SEM REFERÊNCIA IDENTIFICÁVEL)",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "102709884_3038546729554716_3974454003091905416_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "104000072_3038546549554734_8705239338522328615_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "104112423_3038546389554750_8047830891227677895_O",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "2923-A005_20114",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "3530HVCAPE63",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "3530JVCAPE63",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "63136_10228_08568_18BE191B-FA7C-441F-A028-E8803B7F14FE_720X",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "63152_10228_07415_979AB2BC-C449-4463-80B3-FEA433EC5620_720X",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "63152_10228_07464_42A076FB-7B5D-491F-8ADC-B5BE9BC94B59_720X",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "8092 COVER DRESS",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "ACCAPA616",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "ACCAPA636",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "DJ100170",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "DJ20786",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "DJ20793",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "DJ20993",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "HEADPIECES AND VEILS-5",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.24.38_31F65FE2",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.24.38_69279442",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.24.38_976441B4",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.24.38_2760D546",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.24.39_2760D546",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.24.39_6E670529",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.24.40_0BDF04C9",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.26.56_7D98FC15",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.26.57_6BD7F4DE",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.26.58_18B69492",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.26.58_541A37D4",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.26.58_9F3CFED5",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.26.59_3293A977",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 17.54.14_320395B8",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.01.10_C1DF74D5",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.01.11_E8C16E8F",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.01.11_F6241FE0",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.01.12_7F0969F3",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.01.12_C8FF163E",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.01.13_6AD9BC02",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.04.23_32486C30",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.04.24_30A31BD6",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.06.34_DDF4336D",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "IMAGEM WHATSAPP 2025-06-21 ÀS 18.06.58_13B503C9",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "LN26JAILA",
        "PREÇO_EUR": "1780 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "LN26JALISA",
        "PREÇO_EUR": "1910 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "LN26JANEK",
        "PREÇO_EUR": "1670 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "LN26JARETT",
        "PREÇO_EUR": "2380 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "LN26JAYDE",
        "PREÇO_EUR": "2170 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "LN26JOVAN",
        "PREÇO_EUR": "1940 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "MT3530FVCAPE63",
        "PREÇO_EUR": "325 €",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S435-350--1--MED_002_S435-350_002X_001",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S435-350--1--MED_002_S435-350_002_002",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S435-350--1--MED_002_S435-350_002_003",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S701-300--1--SOFT_002_S701-300--1--SOFT_002_05",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S701-300--1--SOFT_002_S702-300--1--SOFT_002_04",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S701_300_1_SOFT_002_S701_300_002_05",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S701_300_1_SOFT_002_S701_300_1_SOFT_002_03",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S75516-300--1--SF_002_S75516-300_002_01",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S75516-300--1--SF_002_S75516-300_002_02",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S75516-300--1--SF_002_S75516-300_002_03",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "S75516-300--1--SF_002_S75516-300_01",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "VI10207A",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "VI10207B",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      },
      {
        "REFERÊNCIA/NOME": "VI10207C",
        "PREÇO_EUR": "",
        "COLEÇÃO": "Galeria",
        "CATEGORIA": "Acessórios",
        "URLs_IMAGENS": "",
        "TOTAL_FOTOS": "0"
      }
    ]
  }
};