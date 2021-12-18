var agora = new Date()
var diaSem = agora.getDay ()

//0-domingo,1- segunda, 2- terça, quearta, quinta, sexta, sábado


switch(diaSem){
    case 0:
        console.log('domingoo')
        break
    case 1: 
        console.log ('segundaa')
        break
    case 2 :
        console.log ('terçaa')
        break
    case 3:
        console.log ('quataa')
        break
    case 4: 
        console.log ('quintaa')
        break
    case 5:
        console.log ('sextaa')
        break
    case 6:
        console.log ('sábadoo')
        break
    default :
        console.log ('[ERRO] dia inválido ')
        break
}