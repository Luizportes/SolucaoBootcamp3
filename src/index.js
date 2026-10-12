
const express = require("express");
const path = require("node:path");

const compromissosRoutes = require("./routes/compromissos.routes");
const tarefasRoutes = require("./routes/tarefas.routes");
const cronogramaRoutes = require("./routes/cronograma.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Interface visual da agenda
app.use(
    "/agenda",
    express.static(path.join(__dirname, "../public"))
);

// Rota original da API
app.get("/", (req, res) => {
    res.json({
        message: "API SolucaoBootcamp3 funcionando!"
    });
});

// Rotas da API
app.use("/api/compromissos", compromissosRoutes);
app.use("/api/tarefas", tarefasRoutes);
app.use("/api/cronograma", cronogramaRoutes);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor executando na porta ${PORT}`);
    });
}

module.exports = app;
