function composicao(...fns){
    return function(valor) {
        return fns.reduce((acc, fn) => fn(acc), valor)
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(text0){
    return `${text0}!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

const exagerado = composicao(gritar, enfatizar, tornarLento)

const resultado1 = exagerado('para')
const resultado2 = exagerado('cuidado com o buraco')

console.log(resultado1)
console.log(resultado2)