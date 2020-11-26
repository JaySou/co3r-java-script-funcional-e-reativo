function composicao(...fns){
    return function(valor) {
        return fns.reduce(async (acc, fn) => { 
            if(Promise.resolve(acc) === acc){
                return  fn(await acc)
            }else {
                return  fn(acc)
            }
        }, valor)
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(text0){
    return `${text0}!!!`
}

function tornarLento(texto) {
    return new Promise(resolve => {
        setTimeout(() => resolve( texto.split('').join(' ')), 3000)
    }) 
}

const exagerado = composicao(gritar, enfatizar, tornarLento)

const resultado1 = exagerado('para').then(console.log)
const resultado2 = exagerado('cuidado com o buraco').then(console.log)

