//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
 
const prompt = require('prompt-sync')();

let opcao = '';

while(opcao !== '3'){
   console.log('\n====== MENU======');
   console.log('1 - MOSTRAR A DATA E HORA ATUAL');
   console.log('2 - SOMA DE DOIS NÚMEROS');
   console.log('3 - ENCERRAR O PROGRAMA');

   opcao = Number(prompt('Escolha uma opção: '));

   switch(opcao) {
    case 1:
        const data = new Date();
        console.log("A data e hora atual é: ", data.toLocaleDateString());
        break;

    case 2:
        const num = Number(prompt("Digite um número: "));
        const num2 = Number(prompt("Digite um outro número: "));
        console.log(`A soma dos dois números é ${num + num2}`);
        break;

    case 3:
        console.log("Encerrando o programa...");
        break;

    default:
        console.log("Opção inválida. Tente novamente!");
   }
}