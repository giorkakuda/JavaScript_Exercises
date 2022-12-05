function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        window.alert('Digite um numero!')
    } else {
        var num = Number(num.value)
        var c = 1
        tab.innerHTML=''//para limpar a tabuada
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = ''+num+ ' x ' +c+ ' = '+ num*c
            tab.appendChild(item) //para aparecer a tabuada(linha 3)
            c++
        }
        
    }

}