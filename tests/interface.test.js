
const request = require("supertest");
const app = require("../src/index");

describe("Interface Web da Agenda", () => {

    test("GET /agenda/ deve disponibilizar a pagina HTML", async () => {
        const response = await request(app)
            .get("/agenda/");

        expect(response.statusCode).toBe(200);

        expect(response.headers["content-type"]).toMatch(/text\/html/);

        expect(response.text).toContain("Minha Agenda");
        expect(response.text).toContain('id="formCompromisso"');
        expect(response.text).toContain('id="formTarefa"');
    });

    test("GET /agenda/style.css deve disponibilizar o CSS", async () => {
        const response = await request(app)
            .get("/agenda/style.css");

        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toMatch(/text\/css/);
        expect(response.text).toContain(".cabecalho");
    });

    test("GET /agenda/app.js deve disponibilizar o JavaScript", async () => {
        const response = await request(app)
            .get("/agenda/app.js");

        expect(response.statusCode).toBe(200);

        expect(response.headers["content-type"]).toMatch(/javascript/);

        expect(response.text).toContain("carregarCronograma");
        expect(response.text).toContain("formCompromisso");
    });

    test("GET /agenda/arquivo-inexistente deve retornar 404", async () => {
        const response = await request(app)
            .get("/agenda/arquivo-inexistente");

        expect(response.statusCode).toBe(404);
    });

});
