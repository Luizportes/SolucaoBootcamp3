
const request = require("supertest");
const app = require("../src/index");

describe("API de Compromissos", () => {

    const compromissoValido = {
        nome: "Reuniao de projeto",
        data: "2026-10-20",
        horario: "14:00",
        descricao: "Revisar o andamento do projeto"
    };

    test("POST /api/compromissos deve criar um compromisso", async () => {
        const response = await request(app)
            .post("/api/compromissos")
            .send(compromissoValido);

        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(compromissoValido);
        expect(response.body.id).toEqual(expect.any(Number));
    });

    test("GET /api/compromissos deve listar compromissos cadastrados", async () => {
        const criado = await request(app)
            .post("/api/compromissos")
            .send(compromissoValido);

        const response = await request(app)
            .get("/api/compromissos");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: criado.body.id,
                    nome: compromissoValido.nome
                })
            ])
        );
    });

    test("GET /api/compromissos/:id deve buscar um compromisso", async () => {
        const criado = await request(app)
            .post("/api/compromissos")
            .send(compromissoValido);

        const response = await request(app)
            .get(`/api/compromissos/${criado.body.id}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(criado.body.id);
        expect(response.body.nome).toBe(compromissoValido.nome);
    });

    test("PUT /api/compromissos/:id deve atualizar um compromisso", async () => {
        const criado = await request(app)
            .post("/api/compromissos")
            .send(compromissoValido);

        const novosDados = {
            nome: "Reuniao atualizada",
            data: "2026-10-21",
            horario: "15:30",
            descricao: "Novo horario"
        };

        const response = await request(app)
            .put(`/api/compromissos/${criado.body.id}`)
            .send(novosDados);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(novosDados);
        expect(response.body.id).toBe(criado.body.id);
    });

    test("DELETE /api/compromissos/:id deve excluir um compromisso", async () => {
        const criado = await request(app)
            .post("/api/compromissos")
            .send(compromissoValido);

        const response = await request(app)
            .delete(`/api/compromissos/${criado.body.id}`);

        expect(response.statusCode).toBe(200);

        const consulta = await request(app)
            .get(`/api/compromissos/${criado.body.id}`);

        expect(consulta.statusCode).toBe(404);
    });

    test("POST deve rejeitar compromisso sem nome", async () => {
        const response = await request(app)
            .post("/api/compromissos")
            .send({
                data: "2026-10-20",
                horario: "14:00",
                descricao: "Compromisso sem nome"
            });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty("erro");
    });

    test("GET deve retornar 404 para compromisso inexistente", async () => {
        const response = await request(app)
            .get("/api/compromissos/999999");

        expect(response.statusCode).toBe(404);
    });

    test("GET deve permitir filtrar compromissos por data", async () => {
        const criado = await request(app)
            .post("/api/compromissos")
            .send({
                ...compromissoValido,
                data: "2026-12-25"
            });

        const response = await request(app)
            .get("/api/compromissos?data=2026-12-25");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: criado.body.id,
                    data: "2026-12-25"
                })
            ])
        );

        expect(
            response.body.every(
                compromisso => compromisso.data === "2026-12-25"
            )
        ).toBe(true);
    });

});
