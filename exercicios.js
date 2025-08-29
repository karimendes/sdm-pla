//função declarativa
function identificadorIdade(idade) {
    if (idade <18) {
        return `você é menor de idade e tem ${idade} anos.`
    }
    else {
        return `você é maior de idade e tem ${idade} anos.`
    }
}


//função anônima
const identificadorAltura = function(altura) {
    return `sua altura é: ${altura}`
}


//arrow function
const identificadorCurso = (curso) => {
    return `seu curso é: ${curso}`
}


console.log(identificadorIdade(19), identificadorAltura(1.7), identificadorCurso("Ciência da Computação"))