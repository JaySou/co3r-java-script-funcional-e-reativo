// Wrapper
// Functors são objetos que implementam a funcao map
// que também é um  wrapper de um valor

const nums = [1, 2, 3, 4, 5, 6]

const novosNums = nums
                    .map(el => el + 10)
                    .map(el => el * 2)
console.log(nums)
console.log(novosNums)

function TipoSeguro(valor){
    return {
        valor,
        invalido(){
            return this.valor === null || this.valor === undefined
        },
        map(fn){
            if(this.invalido()){
                return TipoSeguro(null)
            }else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        }
    }
}


const original = 'Esse é Um Texto'
const alterado = TipoSeguro(original)
                    .map(t  => t.toUpperCase())
                    .map(t => `${t}!!!!`)
                    .map(t => t.split('').join(' '))

console.log(original, alterado.valor)