const {writeFile} = require('fs')

writeFile("arquivo.txt", 'Criando Arquivo de Text com writeFile', err =>{
    if(err) throw err
    console.log('Arquivo criado com sucesso')
})