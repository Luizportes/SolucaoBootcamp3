
function textoValido(valor) {
    return (
        typeof valor === "string" &&
        valor.trim().length > 0
    );
}

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

function horarioValido(horario) {
    if (typeof horario !== "string") {
        return false;
    }

    if (!/^\d{2}:\d{2}$/.test(horario)) {
        return false;
    }

    const [horas, minutos] = horario.split(":").map(Number);

    return (
        horas >= 0 &&
        horas <= 23 &&
        minutos >= 0 &&
        minutos <= 59
    );
}

function statusValido(status) {
    const statusPermitidos = [
        "pendente",
        "em andamento",
        "concluida"
    ];

    return (
        typeof status === "string" &&
        statusPermitidos.includes(status.trim())
    );
}

function idValido(id) {
    if (typeof id !== "string") {
        return false;
    }

    if (!/^[1-9]\d*$/.test(id)) {
        return false;
    }

    return Number.isSafeInteger(Number(id));
}

module.exports = {
    textoValido,
    dataValida,
    horarioValido,
    statusValido,
    idValido
};
