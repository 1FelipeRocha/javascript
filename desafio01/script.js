function carregar () {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12) {
    img.src = "imagens/manha.png"
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <18) {
    img.src = "imagens/pexels-george-desipris-858241.jpg"
    document.body.style.background = '#b98464'
} else {
    img.src = "imagens/pexels-eberhard-grossgasteiger-1421903.jpg"
    document.body.style.background = '#515154'
}
}