
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

describe("Persistencia SQLite", () => {

    test("Deve preservar compromissos e tarefas entre execucoes", () => {
        // Cria uma pasta temporaria exclusiva para o teste.
        const pastaTemporaria = fs.mkdtempSync(
            path.join(os.tmpdir(), "agenda-teste-")
        );

        const caminhoBanco = path.join(
            pastaTemporaria,
            "agenda.db"
        );

        // O processo filho utiliza um arquivo SQLite,
        // nunca o banco de producao.
        const ambiente = {
            ...process.env,
            NODE_ENV: "development",
            DB_PATH: caminhoBanco
        };

        function executarCodigo(codigo) {
            return execFileSync(
                process.execPath,
                ["-e", codigo],
                {
                    cwd: path.resolve(__dirname, ".."),
                    env: ambiente,
                    encoding: "utf8"
                }
            ).trim();
        }

        try {
            // Primeira execucao:
            // cria os registros e encerra o processo.
            const resultadoCriacao = executarCodigo(`
                const compromissos = require("./src/services/compromissos.service");
                const tarefas = require("./src/services/tarefas.service");

                const compromisso = compromissos.criarCompromisso({
                    nome: "Reuniao persistente",
                    data: "2026-10-20",
                    horario: "14:00",
                    descricao: "Teste de persistencia"
                });

                const tarefa = tarefas.criarTarefa({
                    titulo: "Tarefa persistente",
                    prazo: "2026-10-20",
                    descricao: "Teste de persistencia",
                    status: "pendente"
                });

                console.log(JSON.stringify({
                    compromisso,
                    tarefa
                }));
            `);

            const criados = JSON.parse(resultadoCriacao);

            expect(criados.compromisso.id).toBe(1);
            expect(criados.tarefa.id).toBe(1);

            expect(fs.existsSync(caminhoBanco)).toBe(true);

            // Segunda execucao:
            // abre novamente o mesmo arquivo SQLite.
            const resultadoConsulta = executarCodigo(`
                const compromissos = require("./src/services/compromissos.service");
                const tarefas = require("./src/services/tarefas.service");

                console.log(JSON.stringify({
                    compromisso: compromissos.buscarCompromissoPorId(1),
                    tarefa: tarefas.buscarTarefaPorId(1)
                }));
            `);

            const encontrados = JSON.parse(resultadoConsulta);

            expect(encontrados.compromisso).toMatchObject({
                id: 1,
                nome: "Reuniao persistente",
                data: "2026-10-20",
                horario: "14:00"
            });

            expect(encontrados.tarefa).toMatchObject({
                id: 1,
                titulo: "Tarefa persistente",
                prazo: "2026-10-20",
                status: "pendente"
            });

        } finally {
            // Remove todos os arquivos temporarios,
            // mesmo se o teste falhar.
            fs.rmSync(pastaTemporaria, {
                recursive: true,
                force: true
            });
        }
    });

});
