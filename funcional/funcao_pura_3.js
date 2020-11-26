/**
 * uma função pura é uma função em que o valor
 * de retorno é determinado APENAS por seus valores
 * de entrada, sem efeitos colaterais observaveis
 */

// impura

let quantidade = 0

function somar(a, b){
    quantidade++    // efeito colateral observavel
    return a + b
}

console.log(quantidade)
console.log(somar(1, 2))
console.log(somar(1, 2))
console.log(somar(1, 2))
console.log(somar(1, 2))
console.log(somar(1, 2))
console.log(quantidade)