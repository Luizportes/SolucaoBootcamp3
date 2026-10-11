
const { DatabaseSync } = require("node:sqlite");
const fs = require("node:fs");
const path = require("node:path");

// Durante os testes, usamos um banco temporario.
// Na execucao normal, usamos um arquivo persistente.
const caminhoBanco = process.env.DB_PATH || (
    process.env.NODE_ENV === "test"
        ? ":memory:"
        : path.join(__dirname, "../../data/agenda.db")
);

// Criar a pasta do banco quando necessario.
if (caminhoBanco !== ":memory:") {
    fs.mkdirSync(path.dirname(path.resolve(caminhoBanco)), {
        recursive: true
    });
}

// Abrir ou criar o banco de dados.
const db = new DatabaseSync(caminhoBanco);

// Ativar verificacao de integridade referencial.
db.exec("PRAGMA foreign_keys = ON");

// Criar as tabelas caso ainda nao existam.
db.exec(`
    CREATE TABLE IF NOT EXISTS compromissos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        data TEXT NOT NULL,
        horario TEXT NOT NULL,
        descricao TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        prazo TEXT NOT NULL,
        descricao TEXT NOT NULL,
        status TEXT NOT NULL
    );
`);

module.exports = db;
