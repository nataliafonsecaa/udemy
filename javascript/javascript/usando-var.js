// usando var1

{
    {
      {
        {
          var sera = 'será???'
        }
      }
    }
  }
  console.log(sera); // a variavel var sempre ficará visivel, indenpendente se ela está dentro ou fora de um bloco. 
  

  function teste() {
    var local = 123 // quando  é declarado uma variavel dentro de uma funcão, ela irá so funcionar dentro do escopo da função. 
    console.log(local);
  }
  teste()

 
//   usando var2
// variavel definida como a palavra resenvada var tem o escopon global

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero);
}
console.log('fora = ', numero);


// usando var em loop

for (var i = 0; i < 10; i++){
    console.log(i);
    
}
console.log('i =', i);

// usando var em loop 2

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
        
    })
}

funcs[2]()
funcs[8]()