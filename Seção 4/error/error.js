//throw new Error('Ah não, deu erro! Não é possível, na minha maquina funciona!')


// tente executar alguma coisa, se der erro execute o catch automaticamente

function execute (){
    executeTo()
}
function executeTo(){
    throw new Error('Ah não, deu erro! Não é possível, na minha maquina funciona!')
}

function init(){
    try {
        execute()
    } catch (e) {
        console.log(`Temos um erro! ${e}`)
    }
}

init()
console.log('Depois do erro')