Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("quadro de honra")
  } else if (nota.entre(7, 8.99)) {
    console.log("aprovado")
  } else if (nota.entre(0, 4.99)) {
    console.log("reprovado")
  } else {
    console.log("nota inválida")
  }
  console.log('fim');
  
};

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(2.3)
imprimirResultado(-1)

