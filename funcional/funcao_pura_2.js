/**
 * uma função pura é uma função em que o valor
 * de retorno é determinado APENAS por seus valores
 * de entrada, sem efeitos colaterais observaveis
 */

// Funcao impura
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min // retornon não é determinado APENAS por seus valores
}

console.log(gerarNumeroAleatorio(1, 100))
console.log(gerarNumeroAleatorio(1, 100))
console.log(gerarNumeroAleatorio(1, 100))