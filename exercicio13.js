const prompt = require('prompt-sync')()

let soma = 0;
let contador = 0;

let num = parseFloat(prompt("Digite um número diferente de 0: "))

while(num != 0) {
    soma += num;
    contador++

    num = parseFloat(prompt("Digite um número diferente de 0: "))
}

if(contador > 0) {
    let media = soma / contador;
    console.log(`A média dos números digitados é ${media}`)
} else {
    console.log('Nenhum número foi digitado')
}
