const request = require("supertest");
const app = require("../src/index");

describe("API SolucaoBootcamp3", () => {

    test("GET / deve retornar 200 e a mensagem esperada", async () => {
        const response = await request(app)
            .get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            message: "API SolucaoBootcamp3 funcionando!"
        });
    });

    test("GET /rota-inexistente deve retornar erro", async () => {
        const response = await request(app)
            .get("/rota-inexistente");

        expect(response.statusCode).toBe(404);
    });

});