
const dataAgenda = document.getElementById("dataAgenda");
const btnConsultar = document.getElementById("btnConsultar");

const listaCompromissos = document.getElementById("listaCompromissos");
const listaTarefas = document.getElementById("listaTarefas");
const mensagemSistema = document.getElementById("mensagemSistema");

const formCompromisso = document.getElementById("formCompromisso");
const formTarefa = document.getElementById("formTarefa");

const cancelarCompromisso = document.getElementById("cancelarCompromisso");
const cancelarTarefa = document.getElementById("cancelarTarefa");

let compromissosAtuais = [];
let tarefasAtuais = [];

// Exibe uma mensagem de sucesso ou de erro.
function mostrarMensagem(mensagem, erro = false) {
    mensagemSistema.textContent = mensagem;
    mensagemSistema.classList.toggle("erro", erro);
}

// Retorna a data local no formato AAAA-MM-DD.
function obterDataAtual() {
    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

// Envia uma requisicao para a API.
async function solicitar(url, metodo = "GET", dados = null) {
    const opcoes = {
        method: metodo,
        headers: {}
    };

    if (dados !== null) {
        opcoes.headers["Content-Type"] = "application/json";
        opcoes.body = JSON.stringify(dados);
    }

    const resposta = await fetch(url, opcoes);
    const texto = await resposta.text();

    let resultado = null;

    if (texto) {
        try {
            resultado = JSON.parse(texto);
        } catch {
            throw new Error("A API retornou uma resposta invalida.");
        }
    }

    if (!resposta.ok) {
        throw new Error(
            resultado?.erro ||
            `Erro na requisicao (HTTP ${resposta.status}).`
        );
    }

    return resultado;
}

// Cria uma mensagem para listas sem atividades.
function mostrarListaVazia(elemento, mensagem) {
    elemento.replaceChildren();

    const paragrafo = document.createElement("p");
    paragrafo.className = "mensagem-vazia";
    paragrafo.textContent = mensagem;

    elemento.appendChild(paragrafo);
}

// Cria uma linha de informacao do cartao.
function criarInformacao(rotulo, valor) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = `${rotulo}: ${valor}`;
    return paragrafo;
}

// Cria um botao com uma acao.
function criarBotao(texto, acao, classe = "") {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.textContent = texto;

    if (classe) {
        botao.className = classe;
    }

    botao.addEventListener("click", acao);

    return botao;
}

// Apresenta os compromissos na interface.
function renderizarCompromissos(compromissos) {
    listaCompromissos.replaceChildren();

    if (compromissos.length === 0) {
        mostrarListaVazia(
            listaCompromissos,
            "Nenhum compromisso nesta data."
        );
        return;
    }

    compromissos.forEach(compromisso => {
        const cartao = document.createElement("article");
        cartao.className = "item-atividade";

        const titulo = document.createElement("h3");
        titulo.textContent = compromisso.nome;

        const horario = criarInformacao(
            "Horario",
            compromisso.horario
        );

        const descricao = criarInformacao(
            "Descricao",
            compromisso.descricao
        );

        const acoes = document.createElement("div");
        acoes.className = "acoes-atividade";

        const editar = criarBotao("Editar", () => {
            editarCompromisso(compromisso);
        });

        const excluir = criarBotao(
            "Excluir",
            () => excluirCompromisso(compromisso.id),
            "botao-excluir"
        );

        acoes.append(editar, excluir);
        cartao.append(titulo, horario, descricao, acoes);

        listaCompromissos.appendChild(cartao);
    });
}

// Apresenta as tarefas na interface.
function renderizarTarefas(tarefas) {
    listaTarefas.replaceChildren();

    if (tarefas.length === 0) {
        mostrarListaVazia(
            listaTarefas,
            "Nenhuma tarefa nesta data."
        );
        return;
    }

    tarefas.forEach(tarefa => {
        const cartao = document.createElement("article");
        cartao.className = "item-atividade tarefa";

        const titulo = document.createElement("h3");
        titulo.textContent = tarefa.titulo;

        const descricao = criarInformacao(
            "Descricao",
            tarefa.descricao
        );

        const status = criarInformacao(
            "Status",
            tarefa.status
        );

        const acoes = document.createElement("div");
        acoes.className = "acoes-atividade";

        const editar = criarBotao("Editar", () => {
            editarTarefa(tarefa);
        });

        const excluir = criarBotao(
            "Excluir",
            () => excluirTarefa(tarefa.id),
            "botao-excluir"
        );

        acoes.append(editar, excluir);
        cartao.append(titulo, descricao, status, acoes);

        listaTarefas.appendChild(cartao);
    });
}

// Consulta o cronograma da data selecionada.
async function carregarCronograma() {
    const data = dataAgenda.value;

    if (!data) {
        mostrarMensagem("Selecione uma data.", true);
        return;
    }

    try {
        const cronograma = await solicitar(
            `/api/cronograma?data=${encodeURIComponent(data)}`
        );

        compromissosAtuais = cronograma.compromissos;
        tarefasAtuais = cronograma.tarefas;

        renderizarCompromissos(compromissosAtuais);
        renderizarTarefas(tarefasAtuais);

    } catch (erro) {
        compromissosAtuais = [];
        tarefasAtuais = [];

        mostrarListaVazia(
            listaCompromissos,
            "Nao foi possivel carregar os compromissos."
        );

        mostrarListaVazia(
            listaTarefas,
            "Nao foi possivel carregar as tarefas."
        );

        mostrarMensagem(erro.message, true);
    }
}

// Volta o formulario de compromisso ao modo cadastro.
function limparFormularioCompromisso() {
    formCompromisso.reset();

    document.getElementById("compromissoId").value = "";
    document.getElementById("dataCompromisso").value =
        dataAgenda.value;

    document.getElementById("tituloFormCompromisso").textContent =
        "Novo compromisso";

    cancelarCompromisso.hidden = true;
}

// Volta o formulario de tarefa ao modo cadastro.
function limparFormularioTarefa() {
    formTarefa.reset();

    document.getElementById("tarefaId").value = "";
    document.getElementById("prazoTarefa").value =
        dataAgenda.value;

    document.getElementById("tituloFormTarefa").textContent =
        "Nova tarefa";

    cancelarTarefa.hidden = true;
}

// Preenche o formulario com um compromisso existente.
function editarCompromisso(compromisso) {
    document.getElementById("compromissoId").value =
        compromisso.id;

    document.getElementById("nomeCompromisso").value =
        compromisso.nome;

    document.getElementById("dataCompromisso").value =
        compromisso.data;

    document.getElementById("horarioCompromisso").value =
        compromisso.horario;

    document.getElementById("descricaoCompromisso").value =
        compromisso.descricao;

    document.getElementById("tituloFormCompromisso").textContent =
        "Editar compromisso";

    cancelarCompromisso.hidden = false;

    formCompromisso.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Preenche o formulario com uma tarefa existente.
function editarTarefa(tarefa) {
    document.getElementById("tarefaId").value = tarefa.id;
    document.getElementById("tituloTarefa").value = tarefa.titulo;
    document.getElementById("prazoTarefa").value = tarefa.prazo;
    document.getElementById("descricaoTarefa").value =
        tarefa.descricao;
    document.getElementById("statusTarefa").value = tarefa.status;

    document.getElementById("tituloFormTarefa").textContent =
        "Editar tarefa";

    cancelarTarefa.hidden = false;

    formTarefa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Salva um compromisso novo ou atualizado.
formCompromisso.addEventListener("submit", async evento => {
    evento.preventDefault();

    const id = document.getElementById("compromissoId").value;

    const dados = {
        nome: document.getElementById("nomeCompromisso").value,
        data: document.getElementById("dataCompromisso").value,
        horario: document.getElementById("horarioCompromisso").value,
        descricao: document.getElementById("descricaoCompromisso").value
    };

    const botaoSalvar = formCompromisso.querySelector(
        'button[type="submit"]'
    );

    botaoSalvar.disabled = true;

    try {
        if (id) {
            await solicitar(
                `/api/compromissos/${id}`,
                "PUT",
                dados
            );
        } else {
            await solicitar(
                "/api/compromissos",
                "POST",
                dados
            );
        }

        dataAgenda.value = dados.data;

        limparFormularioCompromisso();
        await carregarCronograma();

        mostrarMensagem(
            id
                ? "Compromisso atualizado com sucesso."
                : "Compromisso cadastrado com sucesso."
        );

    } catch (erro) {
        mostrarMensagem(erro.message, true);
    } finally {
        botaoSalvar.disabled = false;
    }
});

// Salva uma tarefa nova ou atualizada.
formTarefa.addEventListener("submit", async evento => {
    evento.preventDefault();

    const id = document.getElementById("tarefaId").value;

    const dados = {
        titulo: document.getElementById("tituloTarefa").value,
        prazo: document.getElementById("prazoTarefa").value,
        descricao: document.getElementById("descricaoTarefa").value,
        status: document.getElementById("statusTarefa").value
    };

    const botaoSalvar = formTarefa.querySelector(
        'button[type="submit"]'
    );

    botaoSalvar.disabled = true;

    try {
        if (id) {
            await solicitar(`/api/tarefas/${id}`, "PUT", dados);
        } else {
            await solicitar("/api/tarefas", "POST", dados);
        }

        dataAgenda.value = dados.prazo;

        limparFormularioTarefa();
        await carregarCronograma();

        mostrarMensagem(
            id
                ? "Tarefa atualizada com sucesso."
                : "Tarefa cadastrada com sucesso."
        );

    } catch (erro) {
        mostrarMensagem(erro.message, true);
    } finally {
        botaoSalvar.disabled = false;
    }
});

// Exclui um compromisso mediante confirmacao.
async function excluirCompromisso(id) {
    if (!window.confirm("Deseja excluir este compromisso?")) {
        return;
    }

    try {
        await solicitar(`/api/compromissos/${id}`, "DELETE");

        limparFormularioCompromisso();
        await carregarCronograma();

        mostrarMensagem("Compromisso excluido com sucesso.");

    } catch (erro) {
        mostrarMensagem(erro.message, true);
    }
}

// Exclui uma tarefa mediante confirmacao.
async function excluirTarefa(id) {
    if (!window.confirm("Deseja excluir esta tarefa?")) {
        return;
    }

    try {
        await solicitar(`/api/tarefas/${id}`, "DELETE");

        limparFormularioTarefa();
        await carregarCronograma();

        mostrarMensagem("Tarefa excluida com sucesso.");

    } catch (erro) {
        mostrarMensagem(erro.message, true);
    }
}

// Eventos de consulta e cancelamento.
btnConsultar.addEventListener("click", carregarCronograma);

dataAgenda.addEventListener("change", () => {
    carregarCronograma();
});

cancelarCompromisso.addEventListener(
    "click",
    limparFormularioCompromisso
);

cancelarTarefa.addEventListener(
    "click",
    limparFormularioTarefa
);

// Inicializacao da pagina.
dataAgenda.value = obterDataAtual();

limparFormularioCompromisso();
limparFormularioTarefa();

carregarCronograma();
