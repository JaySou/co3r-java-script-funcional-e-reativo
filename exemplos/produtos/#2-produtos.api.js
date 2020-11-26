
const produtos = require('./#1-produtos.data.json')


const api = {

    get: function(){

        console.time('#API')
        console.log('Chamando API aguarde...')

        const fim = Date.now() + 2500
        while(Date.now() < fim){ }

        console.log('Concluido!')
        console.timeEnd('#API')

        return produtos
    }
}

module.exports = api