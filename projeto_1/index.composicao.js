const path = require('path')

const fn = require('./funcoes.composicao')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = ['.', '?', '!', '-', ':', '`', ',', '’', '+', '$', '´', '"', "'", '♪', '_', '<i>','</i>', '\r', '[', ']', '(', ')']

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.pegaElementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPorSimbolo('\n'),
    fn.removeElementosSeVazio,
    fn.removerElementosSeTemTexto('-->'),
    fn.removerElementosSeEhNumero,
    fn.removerSimbolosDoElemento(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPorSimbolo(' '),
    fn.removeElementosSeVazio,
    fn.removerElementosSeEhNumero,
    fn.agruparElementos,
    fn.ordenarPorAtributo('qtde', 'desc')
)

palavrasMaisUsadas(caminho)
        .then(console.log)


