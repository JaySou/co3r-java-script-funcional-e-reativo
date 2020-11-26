const { Observable, noop } = require('rxjs');

const obs = Observable.create(subscribe => {
  subscribe.next('RxJS')
  subscribe.next('é')
  subscribe.next('bem')
  subscribe.next('legal')

  if(Math.random() > 0.5){
    subscribe.complete()
  }
  else {
    subscribe.error('Que problema')
  }
})

obs.subscribe(
  valor => console.log(`Valor: ${valor}`),
  erro => console.log(`Erro: ${erro}`),
  () => console.log('Fim!!!')
)

obs.subscribe({
  next(valor){
    console.log(`Valor: ${valor}`)
  },
  error(erro){
    console.log(`Erro: ${erro}`)
  },
  complete(){
    console.log('Fim!!!')
  },
})