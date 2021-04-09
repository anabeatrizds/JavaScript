let vetores = [8,1,7,4,2,9]

//enquanto pos menor doque vetores, vou acrescentar pos +1
for (let pos=0;pos < vetores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//maneira mais simples:
//para cada posição dentro de num, eu vou mostrar o num pos
//for só funciona para array e objetos
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//simplificando os indices
//enquanto o meu vetor for maior que um tamanho final do vetor, eu vou adicionar uma posiciçã