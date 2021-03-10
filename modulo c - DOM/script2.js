//mouseenter - mouse entra em um elemento
//mousemove - enquanto eu estiver movendo dentro do elemento o evento acontece
//mousedown - clica e segura
//mouseup - soltar o click
//click - apetar e soltar
//mouseout - tirei o mouse do elemento

//funções
/*    function ação(parametros){
    BLOCO
}
*/

var a = window.document.getElementById('area')
function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}
function entrar() {
    a.innerText = 'Entrou!'
}
function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}



var b = window.document.getElementById('area2')
b.addEventListener('click', clicar)
b.addEventListener('mouseenter', entrar)
b.addEventListener('mouseout', sair)

function clicar() {
    b.innerText = 'Clicou!'
    b.style.background = 'red'
}
function entrar() {
    b.innerText = 'Entrou!'
}
function sair() {
    b.innerText = 'Saiu!'
    b.style.background = 'green'
}