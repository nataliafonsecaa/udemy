// function soma() {
//     let soma = 0
//     for ( i in arguments){
//         soma += arguments[i]
//     }
//     return soma
// }

// console.log(soma());
// console.log(soma(1));
// console.log(soma(1.1, 2.2, 3.3));
// console.log(soma(1.1, 2.2, "teste"));

//Parâmetros Padrão


// estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0));



// estratégia 2, 3, 4 para gerar valor padrão

function soma2 (a, b, c) {
    a = a !== undefined ? a:1
    b = b in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));


// valor padrão do es2015

function soma3( a = 1, b = 1, c= 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));

function soma4( a = 1, b = 1, c= 1){
    return a + b + c
}

console.log(soma4(), soma4(3));

// soma4(3);  Apenas a = 3 foi passado, então os outros parâmetros assumem seus valores padrão:

// a = 3
// b = 1
// c = 1
// Retorno:
// 3 + 1 + 1 = 5 

