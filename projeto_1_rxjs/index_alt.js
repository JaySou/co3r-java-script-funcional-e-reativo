const { toArray, map, groupBy, mergeMap, reduce } = require('rxjs/operators')
const _ = require('lodash');

const path = require('path')

const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = ['.', '?', '!', '-', ':', '`', ',', '’', '+', '$', '´', '"', "'", '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '!']

fn.lerDiretorio(caminho)
    .pipe(
        fn.pegaElementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPorSimbolo('\n'),
        fn.removeElementosSeVazio(),
        fn.removerElementosSeEhNumero(),
        fn.removerSimbolosDoElemento(simbolos),
        fn.separarTextoPorSimbolo(' '),
        fn.removeElementosSeVazio(),
        fn.removerElementosSeEhNumero(),
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({elemento: palavras[0], qtde: palavras.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)
