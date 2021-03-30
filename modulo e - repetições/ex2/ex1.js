function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if (num.value.lenght == 0) {
        window.alert("Por favor digite umm número!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //apagar o html para quando vc clicar novamente
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //selecionar item
            tab.appendChild(item)
            c++
        }
    }
}
