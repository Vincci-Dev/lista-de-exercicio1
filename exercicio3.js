//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

let notas = Number(prompt("Digita sua nota: "));

if(notas <= 5.0 && notas <= 6.0){
    console.log("REPROVADO")
} else if (notas >= 6.5 && notas <= 6.9) {
    console.log("RECUPERAÇÃO")
} else {
    console.log("APROVADO")
}