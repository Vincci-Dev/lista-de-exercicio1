//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')()

let peso = Number(prompt("Digite seu peso: "));

let altura = Number(prompt("Digite a sua altura em centímetros: "));

let imc = peso / altura**2

if(imc < 18.5) {
    console.log("Abaixo do peso.")
} else if(imc > 18.5 && imc <= 24.9) {
    console.log("Peso normal")
} else if(imc >= 25.0 && imc <= 29.9) {
    console.log("Excesso de peso.")
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log("Obesidade classe I")
} else if(imc >= 35.0 && imc <= 39.9) {
    console.log("Obesidade classe II") 
} else {
    console.log("Obesidade classe III")
}
