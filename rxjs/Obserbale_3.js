// desafio!
// Criar uma stream de numeros
// entre min e max com observable!


const { Observable, noop } = require('rxjs')

function entre(min, max) {
  return new Observable(subscribe => {
    Array(max - min + 1).fill().map((_, i) => subscribe.next(min + i))
    subscribe.complete()
  })
}

entre(4, 10)
  .subscribe(num => console.log(`num: ${num}`), noop, () => console.log('Fim!!'))