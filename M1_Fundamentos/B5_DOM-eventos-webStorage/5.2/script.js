// 1. Acesse o elemento elementoOndeVoceEsta
const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
ondeVoceEsta.parentNode.style.color = 'blue';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Adicionando um texto';

// 4. Acesse o primeiroFilho a partir de pai
const pai = document.getElementById('pai');
let primeiroFilho = pai.firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
primeiroFilho = ondeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
const textAtencao = ondeVoceEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
let terceiroFilho = ondeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai
terceiroFilho = pai.children[2];
