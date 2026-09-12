const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "API SolucaoBootcamp3 funcionando!"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});