function inteiroaleatorio (min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
 }

 let op = 0

do {
    op = inteiroaleatorio (-1, 25)
    console.log(`opcao escolhida foi ${op}.`); 
 } while (op != -1)

 console.log('fim');
 
 