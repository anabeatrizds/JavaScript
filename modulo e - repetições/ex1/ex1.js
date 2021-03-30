function contar() {
    var n1 = window.document.getElementById('n1')
    var n2 = window.document.getElementById('n2')
    var passo = window.document.getElementById('x')
    var res = window.document.getElementById('res')


    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0){
        res.innerHTML("Impossível contar!")
        window.alert("[ERROR} Valor inválido. Vamos considerar 1.")
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            } 
            //contagem regressiva
        } else {
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`

    }
}


