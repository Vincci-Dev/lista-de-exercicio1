const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número: "))

let fatorial = 1

if(numero < 0) {
    console.log("Fatorial não é definido para números negativos.")
} else {
    for( let i = 1; i <= numero; i++) {
        fatorial *= i;
        
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`)
}

