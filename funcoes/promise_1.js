let a = 1
console.log(a)

let p = new Promise(
    function(resolve, reject){
        resolve(3)
        reject(0)
})

p.then(function(valor){
    console.log(valor)
})