const letras = ['o', 'l', 'á', ' ','m','u','n','d','o','!','!','!']

const resultado = letras
                    .map(l => l.toUpperCase())
                    .reduce((a, b) => a + b)

console.log(resultado)