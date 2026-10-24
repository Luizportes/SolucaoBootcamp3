
const request = require("supertest");
const app = require("../src/index");

describe("Validacoes da API", () => {

    const compromissoValido = {
        nome: "Reuniao",
        data: "2026-10-20",
        horario: "14:00",
        descricao: "Reuniao do projeto"
    };

    const tarefaValida = {
        titulo: "Estudar",
        prazo: "2026-10-20",
        descricao: "Revisar conteudo",
        status: "pendente"
    };

    describe("Compromissos", () => {

        test("Deve rejeitar data inexistente", async () => {
            const response = await request(app)
                .post("/api/compromissos")
                .send({
                    ...compromissoValido,
                    data: "2026-02-30"
                });

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar horario invalido", async () => {
            const response = await request(app)
                .post("/api/compromissos")
                .send({
                    ...compromissoValido,
                    horario: "25:90"
                });

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar nome vazio", async () => {
            const response = await request(app)
                .post("/api/compromissos")
                .send({
                    ...compromissoValido,
                    nome: "   "
                });

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar ID nao numerico", async () => {
            const response = await request(app)
                .get("/api/compromissos/abc");

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar filtro de data invalido", async () => {
            const response = await request(app)
                .get("/api/compromissos?data=2026-02-30");

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar atualizacao com horario invalido", async () => {
            const criado = await request(app)
                .post("/api/compromissos")
                .send(compromissoValido);

            expect(criado.statusCode).toBe(201);

            const response = await request(app)
                .put(`/api/compromissos/${criado.body.id}`)
                .send({
                    ...compromissoValido,
                    horario: "30:00"
                });

            expect(response.statusCode).toBe(400);
        });
    });

    describe("Tarefas", () => {

        test("Deve rejeitar prazo inexistente", async () => {
            const response = await request(app)
                .post("/api/tarefas")
                .send({
                    ...tarefaValida,
                    prazo: "2026-02-30"
                });

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar status invalido", async () => {
            const response = await request(app)
                .post("/api/tarefas")
                .send({
                    ...tarefaValida,
                    status: "cancelada"
                });

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar titulo vazio", async () => {
            const response = await request(app)
                .post("/api/tarefas")
                .send({
                    ...tarefaValida,
                    titulo: "   "
                });

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar ID nao numerico", async () => {
            const response = await request(app)
                .get("/api/tarefas/abc");

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar filtro de prazo invalido", async () => {
            const response = await request(app)
                .get("/api/tarefas?prazo=2026-02-30");

            expect(response.statusCode).toBe(400);
        });

        test("Deve rejeitar atualizacao com status invalido", async () => {
            const criada = await request(app)
                .post("/api/tarefas")
                .send(tarefaValida);

            expect(criada.statusCode).toBe(201);

            const response = await request(app)
                .put(`/api/tarefas/${criada.body.id}`)
                .send({
                    ...tarefaValida,
                    status: "desconhecido"
                });

            expect(response.statusCode).toBe(400);
        });
    });

    describe("Cronograma", () => {

        test("Deve aceitar uma data bissexta valida", async () => {
            const response = await request(app)
                .get("/api/cronograma?data=2028-02-29");

            expect(response.statusCode).toBe(200);
        });

        test("Deve rejeitar uma data bissexta invalida", async () => {
            const response = await request(app)
                .get("/api/cronograma?data=2027-02-29");

            expect(response.statusCode).toBe(400);
        });
    });

    
describe("Cobertura adicional das validacoes", () => {
    const {
        dataValida,
        horarioValido,
        idValido
    } = require("../src/utils/validacoes");

    test("deve rejeitar datas com ano menor que 1", () => {
        expect(dataValida("0000-01-01")).toBe(false);
    });

    test("deve rejeitar horarios que nao sejam strings", () => {
        expect(horarioValido(null)).toBe(false);
        expect(horarioValido(1430)).toBe(false);
    });

    test("deve rejeitar horarios com formato incorreto", () => {
        expect(horarioValido("14:3")).toBe(false);
        expect(horarioValido("14h30")).toBe(false);
    });

    test("deve rejeitar identificadores que nao sejam strings", () => {
        expect(idValido(null)).toBe(false);
        expect(idValido(1)).toBe(false);
    });
});


});
