let num = document.getElementById('num')
let tab = document.getElementById('seltab')

function verificar (){


    if (num.value.length == 0){
        window.alert('ERRO')
    }else{ 
        let n = Number(num.value)
        for ( var c = 0; c <= 10; c ++){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild (item) 
        }
    }
}
function limpar (){
    tab.innerHTML = ''
}