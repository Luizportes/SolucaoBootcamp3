
const compromissosService = require("../services/compromissos.service");

function dadosValidos(dados) {
    return (
        typeof dados.nome === "string" &&
        dados.nome.trim() !== "" &&
        typeof dados.data === "string" &&
        dados.data.trim() !== "" &&
        typeof dados.horario === "string" &&
        dados.horario.trim() !== "" &&
        typeof dados.descricao === "string" &&
        dados.descricao.trim() !== ""
    );
}

function criar(req, res) {
    const dados = req.body || {};

    if (!dadosValidos(dados)) {
        return res.status(400).json({
            erro: "Nome, data, horario e descricao sao obrigatorios."
        });
    }

    const compromisso = compromissosService.criarCompromisso(dados);

    return res.status(201).json(compromisso);
}

function listar(req, res) {
    const compromissos = compromissosService.listarCompromissos(
        req.query.data
    );

    return res.status(200).json(compromissos);
}

function buscarPorId(req, res) {
    const compromisso = compromissosService.buscarCompromissoPorId(
        req.params.id
    );

    if (!compromisso) {
        return res.status(404).json({
            erro: "Compromisso nao encontrado."
        });
    }

    return res.status(200).json(compromisso);
}

function atualizar(req, res) {
    const dados = req.body || {};

    if (!dadosValidos(dados)) {
        return res.status(400).json({
            erro: "Nome, data, horario e descricao sao obrigatorios."
        });
    }

    const compromisso = compromissosService.atualizarCompromisso(
        req.params.id,
        dados
    );

    if (!compromisso) {
        return res.status(404).json({
            erro: "Compromisso nao encontrado."
        });
    }

    return res.status(200).json(compromisso);
}

function excluir(req, res) {
    const excluido = compromissosService.excluirCompromisso(
        req.params.id
    );

    if (!excluido) {
        return res.status(404).json({
            erro: "Compromisso nao encontrado."
        });
    }

    return res.status(200).json({
        mensagem: "Compromisso excluido com sucesso."
    });
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    atualizar,
    excluir
};
