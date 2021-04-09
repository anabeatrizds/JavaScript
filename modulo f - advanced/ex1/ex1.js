let num = document.getElementById("txtn")
let lista = document.getElementById("flista")
let res =  document.getElementById("res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
     if(l.indexOf(Number(n)) != -1){
         return true
     } else {
         return false
     }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push.Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert("")
    }
    num.value = ''
    num.focus() //focar na escrita
    
    function finalizar(){
        if (valores.lenght == 0) {
            window.alert('Adicione valores antes de finalizar')
        } else {
            res.innerHTML = `<p>Ao todo, temos ${num.length} numeros cadastrados</p>`
            item.text = `O maior valor informado foi ${num}`
            item.text = `O menor valor informado foi ${num}`
            item.text = `Somando toos os valores, temos ${num}`
            item.text = `A média dos valores digitados é ${num}`
        }
        
    }
}
