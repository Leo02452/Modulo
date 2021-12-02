// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// 1 - Bem vinda, Margarida
// console.log("Bem-vinda, " + info.personagem);

// // 2 - nova chave 'recorrente com valor 'sim e imprimir o objeto
//    info.recorrente = "Sim";
// console.log(info);

// // 3 - for/in mostrando todas as chaves do objeto
// for (let key in info) {
//     console.log(key);
// }

// // 4 - for/in mostrando todos os valores do objeto
// for (let valor in info) {
//     console.log(info[valor]);
// }

// 5 - definir segundo objeto com mesma estrutura e chave do primeiro

// let inf = {
//     personagem: "Tio Patinhas",
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: "Sim"
// };

// 5 - imprima os valores junto com a chave dos dois objetos
// for (let chaveValor in info) {
//     if (
//         chaveValor === "recorrente" && 
//         info[chaveValor] === "Sim" &&
//         inf[chaveValor] === "Sim") {
//             console.log("Ambos recorrentes")
//    } else {
//         console.log(info[chaveValor] + " e " + inf[chaveValor]);
//     }
// }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      },
    ],
};

// 6 - imprimir frase 
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)

// 7 - adicionar segundo objeto no array

// 8 - imprimir frase
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")