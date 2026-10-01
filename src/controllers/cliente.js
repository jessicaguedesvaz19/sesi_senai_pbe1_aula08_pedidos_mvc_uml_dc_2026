const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1
    clientes.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(clientes)
}

const excluir = (req, res) => {
    const id = Number(req.params.id)
    let status = 0

    pedidos.forEach((cliente, indice) => {
        if (cliente.id === id) {
            clientes.splice(indice, 1)
            status = 1
        }
    })

    if (status == 1) {
        res.send("Cliente excluido com sucesso")
    } else {
        res.status(404).send("Erro ao excluir Cliente")
    }
}

const alterar = (req, res) => {
    const id = Number(req.params.id)
    const dados = req.body

    const chaves = Object.keys(dados)

    const cliente = clientes.find(item => item.id === id)

    if (cliente) {
        chaves.forEach(chave => {
            cliente[chave] = dados[chave]
        })

        res.send("Cliente atualizado com sucesso")
    } else {
        res.status(404).send("Erro ao atualizar Cliente")
    }
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}