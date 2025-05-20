const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Digite o valor 1: "));

let valor2 = Number(prompt("Digite o valor 2: "));

if (valor1 < valor2) {
    console.log(valor1, valor2)
}else {
    console.log(valor2, valor1)
}