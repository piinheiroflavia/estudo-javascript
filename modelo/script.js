function carregar(){

var msg = window.document.querySelector("div#msg")
var img = window.document.querySelector ("img#foto")


var data = new Date()
var hora = data.getHours()


msg.innerHTML = (`Agora são extamente ${hora} horas.<br>`)

if (hora >= 0 && hora < 12){
    msg.innerHTML += ("Bom Dia!! <br>")
    img.src = './img/manha.png.jpg'
    document.body.style.backgroundImage = "linear-gradient(to right, #e1ebef, #d5e2e8,#bfd5de)"
}else if (hora >=12 && hora < 18){
    msg.innerHTML += ("Boa tarde!! <br>")
    img.src = "./img/tarde.png.jpg"
    document.body.style.backgroundImage = "linear-gradient(to right, #d67b2c, #CC6100, #aa4f00)"
}else{
    msg.innerHTML += ("Boa Noite!!<br>")
    img.src = "./img/noite.png.jpg"
    document.body.style.backgroundImage = "linear-gradient(to right, #16484f, #173438,#071c1f)"

}
}