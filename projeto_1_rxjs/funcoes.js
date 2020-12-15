const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

function createPipeableOperator(operatorFN) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFN(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e))
            })
        })
    }
}

function lerDiretorio(caminho) {
    return new Observable((subscriber) => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => subscriber.next(path.join(caminho, arquivo)))
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }
    })
}

function pegaElementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subscribe => ({
        next(texto) {
            if (texto.endsWith(padraoTextual)) {
                subscribe.next(texto)
            }
        }
    }))
}

function lerArquivo() {
    return createPipeableOperator(subscribe => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
                subscribe.next(conteudo.toString())
            } catch (error) {
                subscribe.error()
            }
        }
    }))
}

function separarTextoPorSimbolo(simbolo) {
    return createPipeableOperator(subscribe => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subscribe.next(parte)
            })
        }
    }))
}

function removeElementosSeVazio() {
    return createPipeableOperator(subscribe => ({
        next(texto) {
            if (texto.trim()) {
                subscribe.next(texto)
            }
        }
    }))
}


function removerElementosSeEhNumero() {
    return createPipeableOperator(subscribe => ({
        next(texto) {
            const num = parseInt(texto.trim())
            if (num !== num) {
                subscribe.next(texto)
            }
        }
    }))
}

function removerSimbolosDoElemento(simbolos) {
    return createPipeableOperator(subscribe => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, texto)

            subscribe.next(textoSemSimbolos)
        }
    }))
}

function agruparElementos() {
    return createPipeableOperator(subscribe => ({
        next(palavras) {
            const agrupado = Object.values(palavras.reduce((agrupamento, item) => {
                const el = item.toLowerCase()
                const qtde = agrupamento[el] ? agrupamento[el].qtde + 1 : 1
                agrupamento[el] = { elemento: el, qtde }
        
                return agrupamento
        
            }, {}))

            subscribe.next(agrupado)
        }
    }))
}

module.exports = {
    lerDiretorio,
    pegaElementosTerminadosCom,
    lerArquivo,
    removeElementosSeVazio,
    removerElementosSeEhNumero,
    removerSimbolosDoElemento,
    separarTextoPorSimbolo,
    agruparElementos,
}