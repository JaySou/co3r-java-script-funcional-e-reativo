/**
 * Diz-se que uma linguegem de programação possui
 * funções de primeira classe quando funções nessa 
 * linguagem são tratadas como qualquer outra variavel
 */

 const x = 3
 const y = function(texto){
     return `Esse é o texto: ${texto}`
 }

 const z = () => console.log('Zzzzzzzzzzzz!')

 console.log(x)
 console.log(y('Olá'))
 z()
