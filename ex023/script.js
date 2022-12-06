let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, valores)) {// exclamação significa 'não'
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = 'valor '+num.value+' adicionado'
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor invalido ou ja encontrado')
    }
    num.value = ''
    num.focus()
}

function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function finalizar() {
    if (valores.length ==0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += '<p> Ao todo temos '+tot+ ' numeros cadastrados </p>'
        res.innerHTML += '<p> o MAIOR valor informado foi '+maior+ ' </p>'
        res.innerHTML += '<p> o MENOR valor informado foi '+menor+ ' </p>'
    }
}