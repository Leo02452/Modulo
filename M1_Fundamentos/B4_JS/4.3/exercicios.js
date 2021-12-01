
let n = 5;

// 1 - quadrado de asterisco
//pegar o n e imprimir horizontalmente
//pegar o n e imprimir verticalmente

var asterisco = "";

for (let linha = 1; linha <= n; linha += 1){
    for (let coluna = 1; coluna <= n; coluna += 1){
        asterisco += "*";
    }
    console.log(asterisco);
    asterisco = "";
}

// 2 - triangulo de asterisco
let triangulo = "";

for (let l = 1; l <= n; l += 1){
        triangulo += "*";
        console.log(triangulo);
}

// 3 - triangulo invertido de asterisco
// criar um for para poder criar a linha
// criar quantidade de espaços n - 1 e e completar com asterisco até n
// zerar variaveis para a próxima linha

let invertido = "";
let espacoVazio = "";
let posicao = n;

for (let lin = 1; lin <= n; lin += 1){
    for (let colun = 1; colun < posicao; colun += 1){
        espacoVazio += " ";
    }
    invertido += "*";
    console.log(espacoVazio + invertido);
    espacoVazio = "";
    posicao -= 1;
}

// 4 - piramide de asterisco
//criar um for para poder criar a linha
//


let piramide = "";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      piramide += "*";
    } else {
      piramide += " ";
    }
  }
  console.log(piramide);
  piramide = "";
  controlRight += 1;
  controlLeft -= 1
}