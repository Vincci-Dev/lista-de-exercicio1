//6 - Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

let A = Number(prompt('Digita o valro de A: '));

let B = Number(prompt('Digite o valor de B: '));

let C = Number(prompt("Digite o valor de C: "));

if (A < B + C && B < A + C && C < A + B) {
    console.log("Os valores fornecidos formam um triângulo;")
    if(A === B || B === A || B === C) {
        console.log("Triângulo isóceles.")
    } else if( A === B && B === C) {
        console.log("Triângulo Equilátero.")
    } else {
        console.log("Triângulo Escaleno.")
    }
}else {
    console.log("Os valores fornecidos NÃO formam um triângulo.")
}
