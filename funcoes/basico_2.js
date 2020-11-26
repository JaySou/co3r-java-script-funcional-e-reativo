
function calc(x) {

    return function fn1(y) {

        return function fn2(fn) {

            return fn(10, y)
        }
    }
}


function fn1(y) {

    return function fn2(fn) {

        return fn(10, 2)
    }
}


function fn2(fn) {

    return soma(10, 2)
}


soma(10, 2)


function soma(x, y) {
    return x + y
}

const calculo = calc(10)
const calculo2 = calculo(2)
const calculo3 = calculo2(soma)

console.log(calculo3)