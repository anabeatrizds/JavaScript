//função possui uma chamada, um parametro, uma ação e um retorno
/* Funções são ações executadas assim que são chamadas ou em decorrencia de algum evento.
Uma função pode receber parâmetros e retornar um resultado.*/
//uma função só pode ter 1 retorno

//se um numero é par ou impar
function parimp(n){
    if(n%2==0){
        return'par'
    }else{
        return'impar' //retorno
    }
}

console.log(parimp(11)) //chamada