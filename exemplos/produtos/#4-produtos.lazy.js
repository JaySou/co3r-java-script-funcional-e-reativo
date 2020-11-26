const produtosAPI = require('./#2-produtos.api')

function pegarProdutosPorCategoria(api) {

    const produtos = api.get()

    return function (categoria) {

        return produtos.filter(produto => produto.categoria === categoria)
    }

}
console.time('#PEGAR_CATEGORIA_LAZY')
const separarPorCategoria = pegarProdutosPorCategoria(produtosAPI)

const frutas = separarPorCategoria('frutas')
console.log(frutas)

const bebidas = separarPorCategoria('bebidas')
console.log(bebidas)

const doces = separarPorCategoria('doces')
console.log(doces)
console.timeEnd('#PEGAR_CATEGORIA_LAZY')


