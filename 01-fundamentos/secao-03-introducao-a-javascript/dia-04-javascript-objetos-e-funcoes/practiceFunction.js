// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function adicao(a, b) {
    return a + b;
    
}

function subtracao (a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

console.log(adicao(4, 3));
console.log(subtracao(4, 3));
console.log(multiplicacao(4, 3));
console.log(divisao(4, 3));
console.log(modulo(4, 3));

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function highestNumber(num1, num2) {
    if (num1 > num2) {
        return num1 + ' é maior do que ' + num2;
    } else {
            return num2 + ' é maior do que ' + num1;
        }
}

console.log(highestNumber(240, 366));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function biggestOfThree(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        return firstNumber + ' é o maior entre os três números.';
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        return secondNumber + ' é o maior entre os três números.';
    } else {
        return thirdNumber + ' é o maior entre os três números.';
    }
}

console.log(biggestOfThree(40, 70, 180));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function numbers(realNumbers) {
    if (realNumbers < 0) {
        return 'negative';
    } else if (realNumbers === 0) {
        return 'zero';
    } else {
        return 'positive';
    }
}

console.log(numbers(0));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function triangle(angleA, angleB, angleC) {
    if (angleA + angleB + angleC === 180) {
        return true;
    } else {
        return 'Mensagem de Erro!';
    }
}
console.log(triangle(100, 40, 220));
