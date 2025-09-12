const express = require('express')
const app = express()
app.use(express.json())

app.post("/pedidos", (req, res) => {
    const pedido = req.body
    console.log(`pedido recebido para o usuário ID: ${pedido.userId}`)
    res.send({message: "pedido criado com sucesso!", pedido})
})

app.listen(4000, () => console.log("order service rodando na porta 4000"))