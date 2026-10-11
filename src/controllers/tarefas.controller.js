
const tarefasService = require("../services/tarefas.service");

function dadosValidos(dados) {
    return (
        typeof dados.titulo === "string" &&
        dados.titulo.trim() !== "" &&
        typeof dados.prazo === "string" &&
        dados.prazo.trim() !== "" &&
        typeof dados.descricao === "string" &&
        dados.descricao.trim() !== "" &&
        typeof dados.status === "string" &&
        dados.status.trim() !== ""
    );
}

function criar(req, res) {
    const dados = req.body || {};

    if (!dadosValidos(dados)) {
        return res.status(400).json({
            erro: "Titulo, prazo, descricao e status sao obrigatorios."
        });
    }

    const tarefa = tarefasService.criarTarefa(dados);

    return res.status(201).json(tarefa);
}

function listar(req, res) {
    const tarefas = tarefasService.listarTarefas(req.query.prazo);

    return res.status(200).json(tarefas);
}

function buscarPorId(req, res) {
    const tarefa = tarefasService.buscarTarefaPorId(req.params.id);

    if (!tarefa) {
        return res.status(404).json({
            erro: "Tarefa nao encontrada."
        });
    }

    return res.status(200).json(tarefa);
}

function atualizar(req, res) {
    const dados = req.body || {};

    if (!dadosValidos(dados)) {
        return res.status(400).json({
            erro: "Titulo, prazo, descricao e status sao obrigatorios."
        });
    }

    const tarefa = tarefasService.atualizarTarefa(req.params.id, dados);

    if (!tarefa) {
        return res.status(404).json({
            erro: "Tarefa nao encontrada."
        });
    }

    return res.status(200).json(tarefa);
}

function excluir(req, res) {
    const excluido = tarefasService.excluirTarefa(req.params.id);

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
