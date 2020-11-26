const path = require('path')

const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = ['.', '?', '!', '-', ':', '`', ',', '’', '+', '$', '´', '"', "'", '♪', '_', '<i>','</i>', '\r', '[', ']', '(', ')']



fn.lerDiretorio(caminho)
    .then(arquivos      =>    fn.pegaElementosTerminadosCom('.srt')(arquivos))
    .then(arquivosSRT   =>    fn.lerArquivos(arquivosSRT))
    .then(conteudos     =>    fn.mesclarElementos(conteudos))
    .then(todoConteudo  =>    fn.separarTextoPorSimbolo('\n')(todoConteudo))
    .then(linhas        =>    fn.removeElementosSeVazio(linhas))
    .then(linhas        =>    fn.removerElementosSeTemTexto('-->')(linhas))
    .then(linhas        =>    fn.removerElementosSeEhNumero(linhas))
    .then(linhas        =>    fn.removerSimbolosDoElemento(simbolos)(linhas))
    .then(linhas        =>    fn.mesclarElementos(linhas))
    .then(texto         =>    fn.separarTextoPorSimbolo(' ')(texto))
    .then(palavras      =>    fn.removeElementosSeVazio(palavras) )
    .then(palavras      =>    fn.removerElementosSeEhNumero(palavras) )
    .then(palavras      =>    fn.agruparElementos(palavras))
    .then(palavras      =>    fn.ordenarPorAtributo('qtde', 'desc')(palavras))
    .then(console.log)
