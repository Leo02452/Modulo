// 1 - função palíndromo

function verificaPalindrome(string) {
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome("cebola"));

// 2 - função retornar o index do maior valor do array

let numberArray = [2, 3, 6, 7, 10, 1];


// function posicaoMaiorValor() {
//     let maiorValor = 0;
//     for (let index = 0; index < numberArray.length; index += 1);
//         if (numberArray[index] > maiorValor) {
//             maior = numberArray[index];
//         }
//     return maiorValor;
// }

// console.log(posicaoMaiorValor());

console.log(numberArray[0]);