const prompt = require('prompt-sync')()

let num = Number(prompt("Digite um número para ver sua tabuada: "))


for(let i = 0; i <= 10; i++){
   const resultado = num * i;
   console.log(`${num} x ${i} = ${resultado}`);

}