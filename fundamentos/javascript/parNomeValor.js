// PAR nome/valor
const saudacao = 'opa'//contexto léxico1

function exec(){
    const saudacao = 'fala' // contexto lexico2
    return saudacao
}

 // objetos são grupos aninhados de pares nome/valor

 const cliente = {
    nome: 'catarina' ,
    idade: 11,
    peso: 10,
    endereco: {
        logadouro: 'Castelo Animado',
        numero: 6
    }
 }
 console.log(saudacao);
 console.log(exec());
 console.log(cliente);
 
 
 