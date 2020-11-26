const pessoa = Object.freeze({
    nome: 'maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end:{
        rua: 'Feliz!'
    } 
})

// Atribuição por referencia
const novaPessoaAtr = pessoa

// Passagem por refetencia
function alteraPessoaPass(novaPessoa){
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.nome = 'João'
}


// Função pura
function alteraPessoa(pessoa) {

    const novaPessoa = { ...pessoa }

    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.nome = 'João'
    novaPessoa.end.rua = 'ABC'

    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)


// Atribuição por valor

let a = 3
let b = a

a++
b--

console.log(a, b)