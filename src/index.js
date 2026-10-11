
const express = require("express");

const compromissosRoutes = require("./routes/compromissos.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "API SolucaoBootcamp3 funcionando!"
    });
});

app.use("/api/compromissos", compromissosRoutes);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor executando na porta ${PORT}`);
    });
}

module.exports = app;
