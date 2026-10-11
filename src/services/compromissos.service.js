
let compromissos = [];
let proximoId = 1;

function criarCompromisso(dados) {
    const compromisso = {
        id: proximoId++,
        nome: dados.nome.trim(),
        data: dados.data,
        horario: dados.horario,
        descricao: dados.descricao.trim()
    };

    compromissos.push(compromisso);

    return compromisso;
}

function listarCompromissos(data) {
    if (data) {
        return compromissos.filter(
            compromisso => compromisso.data === data
        );
    }

    return compromissos;
}

function buscarCompromissoPorId(id) {
    return compromissos.find(
        compromisso => compromisso.id === Number(id)
    );
}

function atualizarCompromisso(id, dados) {
    const compromisso = buscarCompromissoPorId(id);

    if (!compromisso) {
        return null;
    }

    compromisso.nome = dados.nome.trim();
    compromisso.data = dados.data;
    compromisso.horario = dados.horario;
    compromisso.descricao = dados.descricao.trim();

    return compromisso;
}

function excluirCompromisso(id) {
    const indice = compromissos.findIndex(
        compromisso => compromisso.id === Number(id)
    );

    if (indice === -1) {
        return false;
    }

    compromissos.splice(indice, 1);

    return true;
}

module.exports = {
    criarCompromisso,
    listarCompromissos,
    buscarCompromissoPorId,
    atualizarCompromisso,
    excluirCompromisso
};
