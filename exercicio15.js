const numeros = 10;

let a = 0;
let b = 1;

console.log(a);

console.log(b)

for(let i = 2; i < numeros; i++) {
    const proximo = a + b;

    console.log(proximo)

    a = b;
    b = proximo;
}