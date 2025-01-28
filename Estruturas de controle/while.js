function inteiroaleatorio (min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
 }

 let op = 0

 while(op != -1){
    op = inteiroaleatorio (-1, 25)
    console.log(`opcao escolhida foi ${op}.`);
    
 }

 console.log('fim');
 
let balas = 5;

while (balas > 0) {
  console.log(`Comi uma bala, agora restam ${balas} bala(s).`); //Enquanto o número de balas for maior que 0, o laço continua rodando.
  balas--; // Diminui o número de balas
}

console.log("Acabaram as balas!"); //Quando as balas chegam a 0, a condição (balas > 0) não é mais verdadeira, então o laço para.
