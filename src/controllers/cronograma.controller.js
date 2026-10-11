
const compromissosService = require("../services/compromissos.service");
const tarefasService = require("../services/tarefas.service");

const { dataValida } = require("../utils/validacoes");

function consultar(req, res) {
    const { data } = req.query;

    if (!dataValida(data)) {
        return res.status(400).json({
            erro: "Informe uma data valida no formato AAAA-MM-DD."
        });
    }

    const compromissos = compromissosService.listarCompromissos(data);
    const tarefas = tarefasService.listarTarefas(data);

    return res.status(200).json({
        data,
        compromissos,
        tarefas
    });
}

module.exports = {
    consultar
};
