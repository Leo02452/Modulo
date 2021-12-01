
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

for (let a = 1; a <= n; a += 1){
        triangulo += "*";
        console.log(triangulo);
}

// 3 - triangulo invertido de asterisco
let invertido = "";

for (let lin = 1; lin <= n; lin += 1){
    for (let colun = 1; colun <= n; colun += 1){
        invertido += "*";
    }
    console.log(invertido);
}

// 4 - piramide de asterisco