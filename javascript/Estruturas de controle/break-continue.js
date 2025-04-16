console.log("BREAK");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5) {
        break // age tanto em estruturas de repetição for e while como também age em cima do swift 
    }
    console.log(`${x} = ${nums[x]}`);
}

console.log("CONTINUE");


for (y in nums){
    if (y == 5 ){
        continue // só faz sentido agir em estruturas de repetição, ele para a repetição atual e vai para a próxima. 
    }
    console.log(`${y} = ${nums[y]}`);
    
}


console.log("externo ");

externo:  // externo: está sendo usado como um rótulo 
 for (a in nums){
    for (b in nums){
        if( a == 2 && b == 3 ) break externo
        console.log(`Par = ${a}, ${b}`);
        
    }
}