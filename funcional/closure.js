/**
 * Closure é quando uma função "lembra"
 * do seu escopo léxico, mesmo que a função
 * é executada fora desse escopo léxico
 */

 const somarXMais3 = require('./closure_escopo')

 const x = 1000
 
 console.log(somarXMais3(6))