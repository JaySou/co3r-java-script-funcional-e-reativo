const { from, Observable } = require('rxjs')

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


function primeiro() {
  return createPipeableOperator(subscriber => ({
    next(valor) {
      subscriber.next(valor)
      subscriber.complete()
    }
  }))
}


function ultimo() {
  let ultimo
  return createPipeableOperator(subscriber => ({
    next(valor) {
      ultimo = (valor)
    },
    complete() {
      if (ultimo !== undefined) {
        subscriber.next(ultimo)
      }
      subscriber.complete()
    }
  }))
}

function nenhum() {
  return createPipeableOperator(subscriber => ({
    next(valor) {
      subscriber.complete()
    }
  }))
}

from([1, 2, 3, 4, 5, 6])
  .pipe(
    // primeiro(),
    // nenhum(),
    ultimo()
  )
  .subscribe(console.log)