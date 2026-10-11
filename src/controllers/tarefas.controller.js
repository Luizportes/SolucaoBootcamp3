
const tarefasService = require("../services/tarefas.service");

const {
    textoValido,
    dataValida,
    statusValido,
    idValido
} = require("../utils/validacoes");

function dadosValidos(dados) {
    return (
        textoValido(dados.titulo) &&
        dataValida(dados.prazo) &&
        textoValido(dados.descricao) &&
        statusValido(dados.status)
    );
}

function criar(req, res) {
    const dados = req.body || {};

    if (!dadosValidos(dados)) {
        return res.status(400).json({
            erro: "Dados invalidos. Informe titulo, prazo valido, descricao e status permitido."
        });
    }

    const tarefa = tarefasService.criarTarefa(dados);

    return res.status(201).json(tarefa);
}

function listar(req, res) {
    const { prazo } = req.query;

    if (prazo !== undefined && !dataValida(prazo)) {
        return res.status(400).json({
            erro: "Informe um prazo valido no formato AAAA-MM-DD."
        });
    }

    const tarefas = tarefasService.listarTarefas(prazo);

    return res.status(200).json(tarefas);
}

function buscarPorId(req, res) {
    if (!idValido(req.params.id)) {
        return res.status(400).json({
            erro: "Identificador de tarefa invalido."
        });
    }

    const tarefa = tarefasService.buscarTarefaPorId(
        req.params.id
    );

    if (!tarefa) {
        return res.status(404).json({
            erro: "Tarefa nao encontrada."
        });
    }

    return res.status(200).json(tarefa);
}

function atualizar(req, res) {
    if (!idValido(req.params.id)) {
        return res.status(400).json({
            erro: "Identificador de tarefa invalido."
        });
    }

    const dados = req.body || {};

    if (!dadosValidos(dados)) {
        return res.status(400).json({
            erro: "Dados invalidos. Informe titulo, prazo valido, descricao e status permitido."
        });
    }

    const tarefa = tarefasService.atualizarTarefa(
        req.params.id,
        dados
    );

    if (!tarefa) {
        return res.status(404).json({
            erro: "Tarefa nao encontrada."
        });
    }

    return res.status(200).json(tarefa);
}

function excluir(req, res) {
    if (!idValido(req.params.id)) {
        return res.status(400).json({
            erro: "Identificador de tarefa invalido."
        });
    }

    const excluido = tarefasService.excluirTarefa(
        req.params.id
    );

    if (!excluido) {
        return res.status(404).json({
            erro: "Tarefa nao encontrada."
        });
    }

    return res.status(200).json({
        mensagem: "Tarefa excluida com sucesso."
    });
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    atualizar,
    excluir
};
