let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - imprimir todos os valores
for (let list of numbers) {
    console.log(list);
}

//2 - some todos os valores
let somaDosNumeros = 0;
for (let i = 0; i < numbers.length; i += 1) {
    somaDosNumeros += numbers[i];
}

console.log(somaDosNumeros);

//3 - calcule a média artimética
let mediaAritmetica = somaDosNumeros / numbers.length;
console.log(mediaAritmetica);

//4 - maior ou menor que 20?
let maiorQueVinte = mediaAritmetica > 20 ? "valor maior que 20" : "valor menor ou igual a 20";
console.log(maiorQueVinte)

//5 - maior valor do array
let valorMax = 0;
for (let m = 0; m < numbers.length; m += 1){
    if (numbers[m] > valorMax) {
        valorMax = numbers[m]; 
    }
}
console.log(valorMax);

//6 - imprimir numeros impares
let oddNumbers = [];
for (let imp = 0; imp < numbers.length; imp += 1) {
    if (numbers[imp] % 2 !== 0) {
        oddNumbers.push(numbers[imp]); 
    }
}
if (oddNumbers.length == 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(oddNumbers)
}

//7 - menor valor do array
let valorMin = numbers[0];
for (let n = 1; n < numbers.length; n += 1){
    if (numbers[n] < valorMin) {
        valorMin = numbers[n]; 
    }
}
console.log(valorMin);

//8 - criar array de 1 a 25 e imprima
let topVinteCinco = [];
for (let t = 1; t <= 25; t += 1){
    topVinteCinco.push(t);
}
console.log(topVinteCinco);

//9 - todos os elemento do ex8 dividos por 2
let divididoPorDois = [];
for (let d = 0; d < topVinteCinco.length; d += 1) {
    divididoPorDois.push(topVinteCinco[d] / 2);
}
console.log(divididoPorDois);

