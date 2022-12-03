function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = 'Agora são '+hora+ ' horas'
if (hora >=0 && hora < 12) {
    img.src = "manha.png"
    document.body.style.background = "rgb(97.6, 69.4, 30.2)"
} else if (hora >=12 && hora < 18) {
    img.src = "tarde.png"
    document.body.style.background = "rgb(186, 112, 98)"
} else {
    img.src = "noite.png"
    document.body.style.background = " rgb(2, 7, 10)"
}

}
