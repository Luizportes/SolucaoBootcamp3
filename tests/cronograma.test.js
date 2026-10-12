
const request = require("supertest");
const app = require("../src/index");

describe("API de Cronograma", () => {

    const dataTeste = "2027-03-15";

    test("GET deve reunir compromissos e tarefas da mesma data", async () => {
        const compromisso = await request(app)
            .post("/api/compromissos")
            .send({
                nome: "Reuniao",
                data: dataTeste,
                horario: "14:00",
                descricao: "Reuniao do projeto"
            });

        const tarefa = await request(app)
            .post("/api/tarefas")
            .send({
                titulo: "Estudar",
                prazo: dataTeste,
                descricao: "Revisar conteudo",
                status: "pendente"
            });

        expect(compromisso.statusCode).toBe(201);
        expect(tarefa.statusCode).toBe(201);

        const response = await request(app)
            .get(`/api/cronograma?data=${dataTeste}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.data).toBe(dataTeste);

        expect(response.body.compromissos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: compromisso.body.id,
                    nome: "Reuniao"
                })
            ])
        );

        expect(response.body.tarefas).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: tarefa.body.id,
                    titulo: "Estudar"
                })
            ])
        );

        expect(
            response.body.compromissos.every(item => item.data === dataTeste)
        ).toBe(true);

        expect(
            response.body.tarefas.every(item => item.prazo === dataTeste)
        ).toBe(true);
    });

    test("GET deve retornar listas vazias para data sem atividades", async () => {
        const response = await request(app)
            .get("/api/cronograma?data=2099-12-31");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            data: "2099-12-31",
            compromissos: [],
            tarefas: []
        });
    });

    test("GET deve rejeitar consulta sem data", async () => {
        const response = await request(app)
            .get("/api/cronograma");

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty("erro");
    });

    test("GET deve rejeitar data com formato invalido", async () => {
        const response = await request(app)
            .get("/api/cronograma?data=15-03-2027");

        expect(response.statusCode).toBe(400);
    });

    test("GET deve rejeitar data inexistente", async () => {
        const response = await request(app)
            .get("/api/cronograma?data=2027-02-30");

        expect(response.statusCode).toBe(400);
    });

});
