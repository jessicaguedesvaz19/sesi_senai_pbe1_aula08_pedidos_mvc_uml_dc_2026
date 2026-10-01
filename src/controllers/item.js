const itens = require("../../dados/itens.json")

function subtotais() {
    itens.forEach(i => {
        i.subtotal = i.quantidade * i.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(itens[itens.length - 1].id) + 1
    itens.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    subtotais()
    res.json(itens)
}

const excluir = (req, res) => {
    const id = Number(req.params.id)
    let status = 0

    itens.forEach((item, indice) => {
        if (item.id === id) {
            itens.splice(indice, 1)
            status = 1
        }
    })

    if (status == 1) {
        res.send("Item excluido com sucesso")
    } else {
        res.status(404).send("Erro ao excluir item")
    }
}

const alterar = (req, res) => {
    const id = Number(req.params.id)
    const dados = req.body

    const chaves = Object.keys(dados)

    const item = itens.find(item => item.id === id)

    if (item) {
        chaves.forEach(chave => {
            item[chave] = dados[chave]
        })

        res.send("Item atualizado com sucesso")
    } else {
        res.status(404).send("Erro ao atualizar item")
    }
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}