/*
let numeros = [1, 2, 3, 4, 5]
console.log("array original:", numeros)
console.log(numeros[0])
console.log(numeros[2]) 

let frutas = ["maçã", "banana", "laranja"]
frutas.push("uva")
frutas.unshift("morango")
console.log("array de frutas:", frutas)

frutas.forEach((fruta, index) => {
    console.log(`índice ${index}: ${fruta}`)
})

let misto = [42, "texto", true, null, {chave: "valor"}, [1, 2, 3]]
console.log(misto)
console.log('array misto:', misto.length)
console.log(misto[misto.length - 1])

for(let i = 0; i < frutas.length; i++) {
    console.log(`fruta no índice ${i}: ${frutas[i]}`)
}

for(let fruta of frutas) {
    console.log(fruta)
}

for(let indice in frutas) {
    console.log(`indice ${indice}: ${frutas[indice]}`)
}

frutas.pop()
frutas.shift()
frutas.splice(1,3)
console.log(frutas)*/

let mapa = new Map()

mapa.set("nome", "Kari")
mapa.set("altura", 1.78)

console.log(mapa.get("nome"))
console.log(mapa.has("idade"))
mapa.delete("nome")
mapa.clear()
console.log(mapa.size)

let conjunto = new Set([1, 2, 3, 4, 5, 6])
console.log(conjunto)
conjunto.add(7)
conjunto.delete(2)

conjunto.forEach(valor => console.log(valor))

let pessoa = {
    nome: "Kari",
    idade: 19,
    profissão: "dev front-end",
    endereco: {
        rua: "rua a",
        numero: 123
    }
}

console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa.endereco.rua)
console.log(pessoa)

delete pessoa.endereco