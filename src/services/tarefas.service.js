
let tarefas = [];
let proximoId = 1;

function criarTarefa(dados) {
    const tarefa = {
        id: proximoId++,
        titulo: dados.titulo.trim(),
        prazo: dados.prazo,
        descricao: dados.descricao.trim(),
        status: dados.status.trim()
    };

    tarefas.push(tarefa);

    return tarefa;
}

function listarTarefas(prazo) {
    if (prazo) {
        return tarefas.filter(tarefa => tarefa.prazo === prazo);
    }

    return tarefas;
}

function buscarTarefaPorId(id) {
    return tarefas.find(tarefa => tarefa.id === Number(id));
}

function atualizarTarefa(id, dados) {
    const tarefa = buscarTarefaPorId(id);

    if (!tarefa) {
        return null;
    }

    tarefa.titulo = dados.titulo.trim();
    tarefa.prazo = dados.prazo;
    tarefa.descricao = dados.descricao.trim();
    tarefa.status = dados.status.trim();

    return tarefa;
}

function excluirTarefa(id) {
    const indice = tarefas.findIndex(
        tarefa => tarefa.id === Number(id)
    );

    if (indice === -1) {
        return false;
    }

    tarefas.splice(indice, 1);

    return true;
}

module.exports = {
    criarTarefa,
    listarTarefas,
    buscarTarefaPorId,
    atualizarTarefa,
    excluirTarefa
};
