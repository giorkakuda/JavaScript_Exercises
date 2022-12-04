function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro, verifique os dados novamente')
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value) 
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex [0].checked){
            gen = 'Homem'
            document.body.style.backgroundColor = 'darkblue'
            if (idade >=0 && idade <10) {
            // crianca
            img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade <21) {
            //jovem
            img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade <50) {
                //adulto
            img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //idoso
            img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if (fsex [1].checked){
            gen = 'Mulher'
            document.body.style.backgroundColor = 'magenta'
            if (idade >=0 && idade <10) {
                // crianca
                img.setAttribute('src', 'foto-bebe-f.png')
                }else if (idade <21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                }else if (idade <50) {
                    //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                }else {
                    //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                }
        }
        res.innerHTML = 'Detectamos ' +gen+ ' com ' +idade+ ' anos.'
        res.appendChild(img)
        
    }

}

