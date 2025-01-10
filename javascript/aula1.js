console.log('-----------------------------------exemplo de setença---------------------------------------------');

/* isso é uma setença de código  */

console.log("O mundo irá acabar em");
console.log(' 3...');
console.log(' 2...');
console.log(' 1...');
console.log('BUMMMMMMM');

console.log('--------------------------------------exemplo de bloco----------------------------------------------');


/* isso é um bloco de código. Ele é definido por uma par de chaves { }  */
 
{
console.log('Essa setença está dentro de um bloco de código');
}



console.log('---------------------------------desafio de setença e bloco -----------------------------------------');

console.log('números ímpares'); {    
    console.log('1');
    console.log('3');
    console.log('5');
    console.log('7');
    console.log('9');
}


console.log('números pares'); {    
    
    console.log('2');
    console.log('4');
    console.log('6');
    console.log('8');
    console.log('10');
}

console.log('---------------------------------trabalhando com dados 1-----------------------------------------');


/* VARIAVEL - var tem escopo de função, o que significa que se a variável for declarada dentro de uma função, ela estará acessível em toda a função, mesmo que seja declarada após a utilização */ 
var produto = 'Lápis';
var quantidade = 10; 
var preco = 6.4;
var imposto = 1.5;
var total =  preco + imposto


console.log('Produto escolhido: ' + produto); /* string */
console.log('Quantidade: ' + quantidade, 'unidades');  
console.log('Preço do produto: ' + preco , 'reais');
console.log('Imposto sob o produto: ' + 1.5 , 'reais');   
console.log('Total: ' + total, 'reais');  


console.log('---------------------------------trabalhando com dados 2-----------------------------------------');

/* VARIAVEL - let tem escopo de bloco, ou seja, a variável declarada com let é acessível apenas dentro do bloco (por exemplo, dentro de uma função ou de um loop) onde foi declarada. */ 

let valor = 19.90;
let desconto = 0.4; 

console.log(19.9 * 0.6);
console.log(valor * (1 - desconto)); /* primeiro o sistema faz a conta dentro do parenteses  */


console.log('---------------------------------trabalhando com dados 3-----------------------------------------');
/* TYPEOF - Para saber o tipo de dados dentro da variavel, se é string, number etc*/
let idade = 21;
console.log( typeof 21); /* number */ 
console.log(typeof idade);

let nome = 'Catarina'
console.log(typeof 'Catarina'); /*string*/ 

let estaChovendo = true // or false// 
console.log(typeof estaChovendo); //boolean// 

console.log('---------------------------------trabalhando com dados 4-----------------------------------------');

// para mudar a variavel dentro da função é possivel// 

let a = 3

// ... ... ... 

a = 5 // no meio da operação foi feita a modificação e agora a variavel vai ficar com o valor final escolhido

// ... ... ...


console.log(a);
  

// tambémm... 

let b = 10

// ...........

b = 5 + 10

console.log(b);


// VARIAVEL - const é recomendado para valores que não devem ser reatribuídos e quando você quer garantir um escopo de bloco, mantendo a imutabilidade do valor (exceto em objetos ou arrays) ou seja o valor não pode ser mudado // 

console.log('---------------------------------desafio dados 1-----------------------------------------');

const PI = 3.141592;
let raio = 10;
let area =  PI * raio * raio


console.log('o valor da area será de: ' + area);


console.log('---------------------------------desafio dados 2-----------------------------------------');
