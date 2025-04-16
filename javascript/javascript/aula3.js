// exmplos básicos de funçoes

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);

// funcão com retorno
function soma(a, b = 0) {
  return a + b;
}
console.log(soma(2, 3));

// armazenando uma funão em uma variavel

const imprimirrSoma = function (a, b) {
  console.log(a + b);
};
imprimirrSoma(2, 7);

// armazenando uma função arrow em uma variavel
// Sintaxe mais curta: arrow são mais compactas, especialmente em funções pequenas.
const somaa = (a, b) => {
  return a + b;
};
console.log(somaa(2, 95));

// retorno implicito

const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

