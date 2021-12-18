function verificar() {

   var data = new Date()
   var ano = data.getFullYear() //2021
   var fano = document.getElementById("txtano")
   var res = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano) { //teste de microvalidação, verifica se a caixa esta vazia se esta igual a 0 e se o valor é maior que o ano
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //mesma coisa que no html, porém dessa vez foi atribuido aqui no js
        if (fsex[0].checked){
            genero ='homem'
            if (idade >= 0 && idade < 10){
                //criança
                //img.setAttribute ('src', 'foto-bb')
            }else if (idade < 23) {
                //jovem
                //img .setAttribute('src', 'foto')
            }else if (idade < 60){
                //adulto
                //img. set Attribute('src', 'foto')
            }else {
                //idoso
                //img.setAttribute('src','foto')
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if  (idade >= 0 && idade <10){
                //criança
                //img.setAttribute('src', 'foto')
            }else if(idade < 23){
                //jovem
                //img.setAttribute('src','foto')
            }else if (idade < 60){
                //adulto
                //img.setAttribute('src', 'foto')
            }else{
                //idoso
                //img.setAttribute('src', 'foto')
            }
        }else if (fsex[2].checked){
            genero = 'você'
            if (idade >= 0 && idade < 10){
                
            }else if (idade < 24){
                //jovem
            }else if (idade < 60){
                //adulto
            }else{
                //idoso
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//adicionar após o de cima
    }
} 