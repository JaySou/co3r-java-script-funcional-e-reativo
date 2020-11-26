
// Os dois tipos...
// 1. Operadores de criação
const { from } = require('rxjs')

// 2. Operadores encadeaveis (Pipeable Op.)
const { last, first, map } = require('rxjs/operators')

from([1, 2, 'ana', false, 'ultimo'])
  .pipe(
    map(v => v[0]),
    map(v => console.log(`a letra é: ${v}`))
    )
  .subscribe(function (valor) {
    console.log(valor);
  })

