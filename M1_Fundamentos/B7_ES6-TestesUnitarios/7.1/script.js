// 1 - Modifique a estrutura da função para que ela seja uma arrow function
//     Modifique as concatenações para template literals
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);

// 2 - 
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescente = (array) => {
  const compareNumbers = (a , b) => a - b;
  array.sort(compareNumbers);

  return array;
}

console.log(`Os números ${crescente(oddsAndEvens)} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉