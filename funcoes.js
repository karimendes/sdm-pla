//função declarativa
function saudacao(nome) {
    return `olá, ${nome}!`
}

console.log(saudacao("kari"))


//função anônima
const soma = function(a,b) {
    return a + b;
}

console.log(soma(5,10))

//arrow function
const multiplicar = (a,b) => { a * b
    console.log(multiplicar(5,3))
    console.log(multiplicar(2,8))
    console.log(multiplicar(4,7))
}


//
function cumprimentar(nome = "kari") {
    return console.log(`olá, ${nome}`)
}


//função auto-invocada
(function() {
    console.log("função auto-invocada")
})()


//função callback
function processar(valor, callback) {
    const resultado = callback(valor)
    console.log(`resultado: ${resultado}`)
}


//função assíncrona
async function processarAssync(valor, callback) {
    const resultado = await callback(valor)
    console.log(`resultado: ${resultado}`)
}