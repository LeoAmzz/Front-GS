// Declarando o objeto de imagens em um array
let imagens1 = [
    'img/plastico.png',
    'img/coral.png',
    'img/Educacao.png',
  ];
  
  // Declarando links correspondentes
  let links1 = [
    'https://www.example.com/link2',
    'https://www.example.com/link2',
    'https://www.example.com/link2',
  ];
  
  // Declarando descrições correspondentes
  let descricoes1 = [
    'Limpeza de Plásticos no Oceano',
    'Conservação de Recifes de Coral',
    'Educação e Conscientização Ambiental',
  ];
  
  let precos = [

  ];
  
  // Declarando a posição de início
  let index1 = 0;
  
  // Declarando o tempo que as imagens vão passar em milissegundos
  let time1 = 3000;
  
  // Criando a função chamada slideshow
  function slideShow() {
    // Obtendo o elemento de imagem no HTML
  document.getElementById('img-produtos').src = imagens1[index1];
  
  // Obtendo o elemento de link no HTML
  document.getElementById('produto-link').href = links1[index1];
  
  // Obtendo o elemento de descrição no HTML
  document.getElementById('descricao-produtos').textContent = descricoes1[index1];
  
  // Obtendo o elemento de descrição no HTML
  document.getElementById('preco-produtos').textContent = precos[index1];
  
  
    // Incremento das imagens e sua posição
    index1++;
  
    if (index1 === imagens1.length) {
        index1 = 0;
    }
  
    // setTimeout é uma função que executa o tempo, nesse caso vai chamar função e aplicar o time
    setTimeout(slideShow, time1);
  }
  
  // Execute a função de início
  slideShow();