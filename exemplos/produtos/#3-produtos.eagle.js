const produtosAPI = require('./#2-produtos.api')

function pegarProdutosPorCategoria(api, categoria) {

    const produtos = api.get()

    return produtos.filter(produto => produto.categoria === categoria)
}


console.time('#PEGAR_CATEGORIA_EAGLE')

console.log(pegarProdutosPorCategoria(produtosAPI, 'frutas'))
console.log(pegarProdutosPorCategoria(produtosAPI, 'bebidas'))
console.log(pegarProdutosPorCategoria(produtosAPI, 'doces'))

console.timeEnd('#PEGAR_CATEGORIA_EAGLE')

