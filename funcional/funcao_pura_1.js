/**
 * uma função pura é uma função em que o valor
 * de retorno é determinado APENAS por seus valores
 * de entrada, sem efeitos colaterais observaveis
 */

// const PI = 3.14

 // impura - PI é um valor externo
 function areaCirc(raio){
     return raio * raio * Math.PI // retornon não é determinado APENAS por seus valores
 }

 console.log(areaCirc(10))
 console.log(areaCirc(10))
 console.log(areaCirc(10))



// pura
function areaCircPura(raio, PI){
    return raio * raio * PI // retorno é determinado APENAS por seus valores
} 

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))
