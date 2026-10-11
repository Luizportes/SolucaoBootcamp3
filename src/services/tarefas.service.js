
const db = require("../database/database");

function criarTarefa(dados) {
    const resultado = db.prepare(`
        INSERT INTO tarefas (titulo, prazo, descricao, status)
        VALUES (?, ?, ?, ?)
    `).run(
        dados.titulo.trim(),
        dados.prazo,
        dados.descricao.trim(),
        dados.status.trim()
    );

    return buscarTarefaPorId(resultado.lastInsertRowid);
}

function listarTarefas(prazo) {
    if (prazo) {
        return db.prepare(`
            SELECT * FROM tarefas
            WHERE prazo = ?
            ORDER BY id
        `).all(prazo);
    }

    return db.prepare(`
        SELECT * FROM tarefas
        ORDER BY prazo, id
    `).all();
}

function buscarTarefaPorId(id) {
    return db.prepare(`
        SELECT * FROM tarefas
        WHERE id = ?
    `).get(Number(id)) || null;
}

function atualizarTarefa(id, dados) {
    const tarefa = buscarTarefaPorId(id);

    if (!tarefa) {
        return null;
    }

    db.prepare(`
        UPDATE tarefas
        SET titulo = ?, prazo = ?, descricao = ?, status = ?
        WHERE id = ?
    `).run(
        dados.titulo.trim(),
        dados.prazo,
        dados.descricao.trim(),
        dados.status.trim(),
        Number(id)
    );

    return buscarTarefaPorId(id);
}

function excluirTarefa(id) {
    const resultado = db.prepare(`
        DELETE FROM tarefas
        WHERE id = ?
    `).run(Number(id));

    return resultado.changes > 0;
}

module.exports = {
    criarTarefa,
    listarTarefas,
    buscarTarefaPorId,
    atualizarTarefa,
    excluirTarefa
};
