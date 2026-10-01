const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(produtos[produtos.length - 1].id) + 1
    produtos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(produtos)
}

const excluir = (req, res) => {
    const id = Number(req.params.id)
    let status = 0

    pedidos.forEach((pedido, indice) => {
        if (pedido.id === id) {
            pedidos.splice(indice, 1)
            status = 1
        }
    })

    if (status == 1) {
        res.send("Produto excluido com sucesso")
    } else {
        res.status(404).send("Erro ao excluir Produto")
    }
}

const alterar = (req, res) => {
    const id = Number(req.params.id)
    const dados = req.body

    const chaves = Object.keys(dados)

    const produto = produtos.find(item => item.id === id)

    if (produto) {
        chaves.forEach(chave => {
            produto[chave] = dados[chave]
        })

        res.send("Produto atualizado com sucesso")
    } else {
        res.status(404).send("Erro ao atualizar Produto")
    }
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}