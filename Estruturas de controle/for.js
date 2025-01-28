let contador = 1 
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i<=10; i++){
    console.log(`i = ${i}`)
    
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`);
}
console.log(i);

let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta: ${frutas[i]}`);
}

let numero;

do {
  numero = prompt("Digite um número maior que 10:");
} while (numero <= 10);

console.log(`Você digitou o número ${numero}, que é maior que 10!`);
