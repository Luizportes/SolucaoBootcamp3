
const db = require("../database/database");

function criarCompromisso(dados) {
    const resultado = db.prepare(`
        INSERT INTO compromissos (nome, data, horario, descricao)
        VALUES (?, ?, ?, ?)
    `).run(
        dados.nome.trim(),
        dados.data,
        dados.horario,
        dados.descricao.trim()
    );

    return buscarCompromissoPorId(resultado.lastInsertRowid);
}

function listarCompromissos(data) {
    if (data) {
        return db.prepare(`
            SELECT * FROM compromissos
            WHERE data = ?
            ORDER BY horario, id
        `).all(data);
    }

    return db.prepare(`
        SELECT * FROM compromissos
        ORDER BY data, horario, id
    `).all();
}

function buscarCompromissoPorId(id) {
    return db.prepare(`
        SELECT * FROM compromissos
        WHERE id = ?
    `).get(Number(id)) || null;
}

function atualizarCompromisso(id, dados) {
    const compromisso = buscarCompromissoPorId(id);

    if (!compromisso) {
        return null;
    }

    db.prepare(`
        UPDATE compromissos
        SET nome = ?, data = ?, horario = ?, descricao = ?
        WHERE id = ?
    `).run(
        dados.nome.trim(),
        dados.data,
        dados.horario,
        dados.descricao.trim(),
        Number(id)
    );

    return buscarCompromissoPorId(id);
}

function excluirCompromisso(id) {
    const resultado = db.prepare(`
        DELETE FROM compromissos
        WHERE id = ?
    `).run(Number(id));

    return resultado.changes > 0;
}

module.exports = {
    criarCompromisso,
    listarCompromissos,
    buscarCompromissoPorId,
    atualizarCompromisso,
    excluirCompromisso
};
