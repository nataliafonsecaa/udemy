// variavel definida como a palavra resenvada let tem o escopon global, escopo de função e escopo de bloco. 

var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);


// for (let i = 0; i < 10; i++){
//     console.log(i);
    
// }
// console.log('i =', i);

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
        
    })
}

funcs[2]()
funcs[7]()