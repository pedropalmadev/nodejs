console.log('Exibindo uma mensagem no console!')


//error

console.error(new Error('Exibindo uma mensagem de erro, temos problemas!'))



const carros = ['GM', 'Fiat', 'Ford', 'Hyundai', 'Honda']

console.table(carros)

const dados = {name: 'Pedro de Abreu', empresa:'Codigo Kid'}

console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo')
console.countReset('processo')

console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
    //console.log('-')
}

console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')

console.assert(false, 'Ih Rapaz %s, que pena!', 'não funcionou')


//limpa todos os dados do console!
//console.clear()

