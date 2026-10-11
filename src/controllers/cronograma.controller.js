
const compromissosService = require("../services/compromissos.service");
const tarefasService = require("../services/tarefas.service");

function dataValida(data) {
    if (typeof data !== "string") {
        return false;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
        return false;
    }

    const [ano, mes, dia] = data.split("-").map(Number);

    if (ano < 1) {
        return false;
    }

    const dataVerificada = new Date(Date.UTC(ano, mes - 1, dia));

    dataVerificada.setUTCFullYear(ano);

    return (
        dataVerificada.getUTCFullYear() === ano &&
        dataVerificada.getUTCMonth() === mes - 1 &&
        dataVerificada.getUTCDate() === dia
    );
}

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
