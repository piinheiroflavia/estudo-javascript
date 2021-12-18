function contar() {
    var i = Number(document.getElementById ('txti').value)
    var f = Number(document.getElementById ('txtf').value)
    var p = Number(document.getElementById ('txtp').value)    
    var res = document.getElementById ('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = ("[ERRO] Impossível contar!")
    }else {
        res.innerHTML = ('Contando:')

        for (var c = i ; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += ` FIM\u{1F3C1}`
    }
}
