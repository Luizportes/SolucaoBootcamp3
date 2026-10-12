
const db = require("../src/database/database");

beforeEach(() => {
    db.exec(`
        DELETE FROM compromissos;
        DELETE FROM tarefas;

        DELETE FROM sqlite_sequence
        WHERE name IN ('compromissos', 'tarefas');
    `);
});
