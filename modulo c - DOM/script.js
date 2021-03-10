window.document.write("Olá, Mundo!");
window.document.write(window.document.charset);
window.document.write(window.document.URL);
// ^ escrevendo objetos
/* 
    Métodos de acesso - selecionando
    por marca - getElementByTagName()
    por ID - getElementByID()
    por nome - getElementsbyName()
    por classe - getElementsByClasseName()
    por selector(css) - querySelector() / querySlectorAll()
 */ 

var corpo = window.document.body
var p1 = window.document.getElementsByTagName("p")[1] 
// selecionando o primeiro parágrado do texto - 0, paragrafo 2? 1...

p1.style.color = 'blue';

/*var d = window.document.getElementByID('msg');
d.style.backgroudn = 'green';

window.document.getElementByID('msg').innerText = 'Olá' */
