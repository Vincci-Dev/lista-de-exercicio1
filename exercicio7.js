const prompt = require('prompt-sync')();

let quantidade = Number(prompt("Digite a quantidade de maçãs compradas: "));

let precoUnitario;

if(quantidade < 12){
    precoUnitario = 0.30
}else {
    precoUnitario = 0.25
}

const total = quantidade * precoUnitario;

console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);