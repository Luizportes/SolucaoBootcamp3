
const request = require("supertest");
const app = require("../src/index");

describe("API de Tarefas", () => {

    const tarefaValida = {
        titulo: "Estudar para prova",
        prazo: "2026-10-20",
        descricao: "Revisar o conteudo",
        status: "pendente"
    };

    test("POST /api/tarefas deve criar uma tarefa", async () => {
        const response = await request(app)
            .post("/api/tarefas")
            .send(tarefaValida);

        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(tarefaValida);
        expect(response.body.id).toEqual(expect.any(Number));
    });

    test("GET /api/tarefas deve listar tarefas", async () => {
        const criada = await request(app)
            .post("/api/tarefas")
            .send(tarefaValida);

        const response = await request(app)
            .get("/api/tarefas");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: criada.body.id,
                    titulo: tarefaValida.titulo
                })
            ])
        );
    });

    test("GET /api/tarefas/:id deve buscar uma tarefa", async () => {
        const criada = await request(app)
            .post("/api/tarefas")
            .send(tarefaValida);

        const response = await request(app)
            .get(`/api/tarefas/${criada.body.id}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(criada.body.id);
    });

    test("PUT /api/tarefas/:id deve atualizar uma tarefa", async () => {
        const criada = await request(app)
            .post("/api/tarefas")
            .send(tarefaValida);

        const novosDados = {
            titulo: "Estudar para prova final",
            prazo: "2026-10-21",
            descricao: "Revisar todos os capitulos",
            status: "em andamento"
        };

        const response = await request(app)
            .put(`/api/tarefas/${criada.body.id}`)
            .send(novosDados);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(novosDados);
    });

    test("DELETE /api/tarefas/:id deve excluir uma tarefa", async () => {
        const criada = await request(app)
            .post("/api/tarefas")
            .send(tarefaValida);

        const response = await request(app)
            .delete(`/api/tarefas/${criada.body.id}`);

        expect(response.statusCode).toBe(200);

        const consulta = await request(app)
            .get(`/api/tarefas/${criada.body.id}`);

        expect(consulta.statusCode).toBe(404);
    });

    test("POST deve rejeitar tarefa sem titulo", async () => {
        const response = await request(app)
            .post("/api/tarefas")
            .send({
                prazo: "2026-10-20",
                descricao: "Tarefa sem titulo",
                status: "pendente"
            });

        expect(response.statusCode).toBe(400);
    });

    test("GET deve retornar 404 para tarefa inexistente", async () => {
        const response = await request(app)
            .get("/api/tarefas/999999");

        expect(response.statusCode).toBe(404);
    });

    test("GET deve filtrar tarefas por prazo", async () => {
        const criada = await request(app)
            .post("/api/tarefas")
            .send({
                ...tarefaValida,
                prazo: "2026-12-25"
            });

        const response = await request(app)
            .get("/api/tarefas?prazo=2026-12-25");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: criada.body.id,
                    prazo: "2026-12-25"
                })
            ])
        );

        expect(
            response.body.every(tarefa => tarefa.prazo === "2026-12-25")
        ).toBe(true);
    });

describe("Casos de erro adicionais - Tarefas", () => {

    const tarefaValida = {
        titulo: "Estudar para prova",
        prazo: "2026-10-20",
        descricao: "Revisar o conteudo",
        status: "pendente"
    };

    test("PUT deve rejeitar identificador invalido", async () => {
        const response = await request(app)
            .put("/api/tarefas/abc")
            .send(tarefaValida);

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty("erro");
    });

    test("PUT deve retornar 404 para tarefa inexistente", async () => {
        const response = await request(app)
            .put("/api/tarefas/999999")
            .send(tarefaValida);

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty("erro");
    });

    test("DELETE deve rejeitar identificador invalido", async () => {
        const response = await request(app)
            .delete("/api/tarefas/abc");

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty("erro");
    });

    test("DELETE deve retornar 404 para tarefa inexistente", async () => {
        const response = await request(app)
            .delete("/api/tarefas/999999");

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty("erro");
    });

});

});
