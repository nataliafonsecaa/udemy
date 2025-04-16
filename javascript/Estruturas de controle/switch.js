const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10: case 9: 
            console.log('quadro de honra');
            break
        case 8: case 7:
            console.log('aprovado');
            break
        case 6: case 4:
            console.log('recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado');
            break
        default:
            console.log('nota invalida');
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(-1)

let sabor = "morango";

switch (sabor) {
  case "chocolate":
    console.log("Você escolheu sorvete de chocolate!");
    break;
  case "morango":
    console.log("Você escolheu sorvete de morango!");
    break;
  case "baunilha":
    console.log("Você escolheu sorvete de baunilha!");
    break;
  default:
    console.log("Desculpe, não temos esse sabor.");
}
