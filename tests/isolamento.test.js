
const request = require("supertest");
const app = require("../src/index");

describe("Isolamento dos testes", () => {

    test("Deve iniciar com as listas vazias", async () => {
        const compromissos = await request(app)
            .get("/api/compromissos");

        const tarefas = await request(app)
            .get("/api/tarefas");

        expect(compromissos.statusCode).toBe(200);
        expect(tarefas.statusCode).toBe(200);

        expect(compromissos.body).toEqual([]);
        expect(tarefas.body).toEqual([]);
    });

    test("Deve criar um compromisso com ID inicial", async () => {
        const response = await request(app)
            .post("/api/compromissos")
            .send({
                nome: "Teste de isolamento",
                data: "2026-10-20",
                horario: "10:00",
                descricao: "Verificar banco temporario"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.id).toBe(1);
    });

    test("Deve iniciar novamente sem compromissos", async () => {
        const response = await request(app)
            .get("/api/compromissos");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

    test("Deve criar uma tarefa com ID inicial", async () => {
        const response = await request(app)
            .post("/api/tarefas")
            .send({
                titulo: "Tarefa de isolamento",
                prazo: "2026-10-20",
                descricao: "Verificar banco temporario",
                status: "pendente"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.id).toBe(1);
    });

    test("Deve iniciar novamente sem tarefas", async () => {
        const response = await request(app)
            .get("/api/tarefas");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

});
