
// Lazy Evaluation

function textoComTamanhoEntre(min){

    return function(max){
        return function(erro){
            return function(texto){
                const tamanho = (texto || '').trim().length
                if(tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}

const p1 = {
    nome: 'A',
    preco: 14.99,
    desc: 0.25
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome Invalido!')

forcarNomeProdutoValido(p1.nome)