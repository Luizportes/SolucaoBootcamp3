
const compromissosService = require("../services/compromissos.service");

const {
    textoValido,
    dataValida,
    horarioValido,
    idValido
} = require("../utils/validacoes");

function dadosValidos(dados) {
    return (
        textoValido(dados.nome) &&
        dataValida(dados.data) &&
        horarioValido(dados.horario) &&
        textoValido(dados.descricao)
    );
}

function criar(req, res) {
    const dados = req.body || {};

    if (!dadosValidos(dados)) {
        return res.status(400).json({
            erro: "Dados invalidos. Informe nome, data valida, horario valido e descricao."
        });
    }

    const compromisso = compromissosService.criarCompromisso(dados);

    return res.status(201).json(compromisso);
}

function listar(req, res) {
    const { data } = req.query;

    if (data !== undefined && !dataValida(data)) {
        return res.status(400).json({
            erro: "Informe uma data valida no formato AAAA-MM-DD."
        });
    }

    const compromissos = compromissosService.listarCompromissos(data);

    return res.status(200).json(compromissos);
}

function buscarPorId(req, res) {
    if (!idValido(req.params.id)) {
        return res.status(400).json({
            erro: "Identificador de compromisso invalido."
        });
    }

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
    if (!idValido(req.params.id)) {
        return res.status(400).json({
            erro: "Identificador de compromisso invalido."
        });
    }

    const dados = req.body || {};

    if (!dadosValidos(dados)) {
        return res.status(400).json({
            erro: "Dados invalidos. Informe nome, data valida, horario valido e descricao."
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
    if (!idValido(req.params.id)) {
        return res.status(400).json({
            erro: "Identificador de compromisso invalido."
        });
    }

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
