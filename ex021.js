var num = [4,2,1,6]
num.push(9)
//num.sort()
console.log(num)
console.log(num[3])
console.log('o vetor tem '+num.length+' elementos')
var pos = num.indexOf(10)
console.log('o numero 10 esta na posição '+ pos)


/*
let valores = [9,4,3,5,2,7]
for (let pos=0; pos < valores.length; pos++){
    console.log('a posição ' +pos+ ' tem valores '+valores[pos])
}
// ==> versão mais simplificada da ECMAScript
for (let pos in valores){
    console.log('a posição '+pos+ ' tem o valor de '+valores[pos])
}
*/
