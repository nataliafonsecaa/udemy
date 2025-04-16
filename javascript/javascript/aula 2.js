// variaveis e constantes //
console.log('---------------------------------variaveis-----------------------------------------');

var a = 3; // o usa de var não é muito recomendado

let b = 5;  // let é a variavel mais recomendada de se usar por ser a mais moderna e usada // 

const c = 7; // é para identificar valores que serão fixos, que o valor não será mudado. 
console.log(a);
console.log(b);
console.log(c);

console.log('---------------------------------tipos: number-----------------------------------------');

const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // usado para fazer testes, por exemplo: para saber se o valor é inteiro ou não (true/false)

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total =  avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2); 
console.log('A média será de: ' + media);
console.log(media.toFixed(2)); // mostrará apenas dois numeros depois da vírgula 
console.log(media.toString(2)); // transfomará em uma valor binário 


console.log('---------------------------------tipos: string-----------------------------------------');

const escola = 'cod3r'

console.log(escola.charAt(4)); // irá mostrar qual é a quarta palavra da variavel 

console.log(escola.charCodeAt(3)); //Obtém o código Unicode do caractere que está no índice 3 da string armazenada na variável escola.

console.log(escola.indexOf('3')); //Procura a primeira ocorrência do caractere '3' na string armazenada na variável escola e retorna o índice dessa ocorrência. Se não encontrar, retorna -1.

console.log(escola.substring(1)); //Extrai a substring da variável escola a partir do índice 1 até o final da string.

console.log(escola.substring(0,3)); //Extrai a substring da variável escola do índice 0 (início) até o índice 3 (não inclusivo).

console.log('escola' .concat(escola).concat('!')); // Concatena a string 'escola', o valor da variável escola, e o caractere '!', formando uma única string.

console.log(escola.replace(3, 'e')) //Substitui a primeira ocorrência do caractere '3' na string escola pelo caractere 'e'. Se '3' não existir, a string permanece inalterada.

console.log('Ana, Maria, Pedro' .split(',')); //Divide a string 'Ana, Maria, Pedro' em um array, utilizando a vírgula ',' como delimitador.

console.log('---------------------------------templates string-----------------------------------------');

const nome = "Natalia"
const concatenacao = 'olá ' + nome + '!'
const template = `
    olá
    ${nome}!
`

console.log(concatenacao, template);


console.log('---------------------------------tipos boolean-----------------------------------------');

//Boolean é um tipo de dado que representa um dos dois valores: true (verdadeiro) ou false

// Inicializa a variável 'isAtivo' com o valor booleano 'false'
let isAtivo = false; 
console.log(isAtivo); // Exibe 'false' no console

// Atribui o valor booleano 'true' à variável 'isAtivo'
isAtivo = true;
console.log(isAtivo); // Exibe 'true' no console

// Atribui o número '1' à variável 'isAtivo' (números podem ser interpretados como booleanos)
isAtivo = 1;
// O operador '!!' converte o valor para booleano explicitamente
console.log(!!isAtivo); // Exibe 'true', pois 1 é um valor "truthy"

// Exibe exemplos de valores que são considerados "truthy"
console.log('os verdadeiros...');
console.log(!!3); // Números diferentes de zero são "truthy" -> true
console.log(!!-1); // Números negativos também são "truthy" -> true
console.log(!!' '); // Strings com espaço (não vazias) são "truthy" -> true
console.log(!!'texto'); // Strings com texto são "truthy" -> true
console.log(!![]); // Arrays (mesmo vazios) são "truthy" -> true
console.log(!!{}); // Objetos (mesmo vazios) são "truthy" -> true
console.log(!!Infinity); // O valor especial 'Infinity' é "truthy" -> true
console.log(!!(isAtivo = true)); // O resultado da atribuição 'isAtivo = true' é "truthy" -> true

// Exibe exemplos de valores que são considerados "falsy"
console.log('os falsos...');
console.log(!!0); // O número 0 é "falsy" -> false
console.log(!!''); // Strings vazias são "falsy" -> false
console.log(!!null); // O valor especial 'null' é "falsy" -> false
console.log(!!NaN); // O valor especial 'NaN' é "falsy" -> false
console.log(!!undefined); // O valor especial 'undefined' é "falsy" -> false
console.log(!!(isAtivo = false)); // O resultado da atribuição 'isAtivo = false' é "falsy" -> false

// Demonstra o operador lógico '||' (OR)
console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' ')); 
// O operador '||' retorna o primeiro valor "truthy" encontrado. Aqui, é a string com espaço -> true

// Exemplo prático de uso do operador '||'
let noome = 'Lucas';
console.log(noome || 'Desconhecido'); 
// Se 'noome' for "truthy", exibe 'Lucas'. Caso contrário, exibe 'Desconhecido'.


console.log('---------------------------------tipos Array----------------------------------------');

// Declara um array chamado 'valores' contendo números decimais
const valores = [7.7, 8.9, 6.3, 9.2];
// Exibe os valores no índice 0 e 3 do array (o uso de parênteses faz com que apenas o último valor seja exibido)
console.log((valores[0], valores[3])); // Exibe o valor no índice 3 -> 9.2

// Adiciona o valor 10 na posição 4 do array
valores[4] = 10;
// Exibe o array atualizado com o novo valor adicionado
console.log(valores); // [7.7, 8.9, 6.3, 9.2, 10]

// Exibe o tamanho do array (quantidade de elementos)
console.log(valores.length); // 5

// Adiciona vários elementos diferentes ao final do array usando o método 'push'
valores.push({ id: 3 }, false, null, 'teste');
// Exibe o array atualizado com os novos elementos adicionados
console.log(valores); // [7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']

// Remove o último elemento do array usando o método 'pop'
console.log(valores.pop()); // Exibe o elemento removido -> 'teste'

// Remove o elemento na posição 0 do array usando o operador 'delete'
delete valores[0];
// Exibe o array atualizado após a remoção (o elemento no índice 0 será 'undefined')
console.log(valores); // [undefined, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null]

// Exibe o tipo da variável 'valores'
console.log(typeof valores); // 'object', pois arrays são tratados como objetos em JavaScript

console.log('---------------------------------tipos Object----------------------------------------');
// o objeto no javascript é representado por chaves "{}"
const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['desconto'] = 0.40

console.log(prod1);


const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}
console.log(prod2);

console.log('---------------------------------tipos  Null & Undefined ----------------------------------------');

let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

