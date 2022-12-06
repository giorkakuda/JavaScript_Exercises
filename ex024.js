let amigo = {nome:'jose',peso: 89,sexo: 'M', 
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2.5)// é possivel colocar funçoes dentro de variaveis

console.log('o '+amigo.nome+ ' pesa '+amigo.peso+ ' kg agora')