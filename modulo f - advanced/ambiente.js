//array
//verificar quantidade de elementos utilizando lenght
let num = [5,8,2,9,3]
num.push(1) //adicionar elemnto 1
num.sort() //colocar em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//simplificando os indices
//enquanto o meu vetor for maior que um tamanho final do vetor, eu vou adicionar uma posicição
for (let pos=0;pos <num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//procurando a posição do array
//let posi = num.indexOf(8)
//console.log(`O valor 8 está na posição ${posi}`)

//ouuuuu
let posi = num.indexOf(6)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posição ${posi}`)
}