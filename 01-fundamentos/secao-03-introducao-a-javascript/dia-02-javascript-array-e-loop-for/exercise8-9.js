// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index)
}

console.log(array);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let variavel = [];
let variavel2 = 0;

for (let index2 = 0; index2 < array.length; index2 += 1) {
    variavel2 = array[index2] / 2;
    variavel.push(variavel2);
}

console.log(variavel);
