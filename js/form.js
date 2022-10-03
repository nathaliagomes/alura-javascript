//ao clicar no botão "adicionar" as informações cadastradas devem ser inseridas na tabela de pacientes
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function () {

    //evita o comportamento padrão do button de enviar os dados e atualizar a página
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //extrai informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria a tr e as td do paciente
    var pacienteTr = montaTr(paciente);

    //verifica se o paciente tem dados válidos
    var erros = validaPacientes(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    //adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

    //limpa as mensagens de erro
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

//funçao que cria uma listagem de erros
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//funçao que extrai os dados cadastrados no form e guarda no objeto "paciente"
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

//funçao que adiciona as mensagens de erro no array "erros"
function validaPacientes(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) erros.push("O peso é inválido");

    if (!validaAltura(paciente.altura)) erros.push("A altura é inválida");

    if (paciente.gordura.length == 0) {
        erros.push("A % de gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}

//função que cria a tr
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //uso appendChild para os td serem filhos da tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//funçao que cria a td com sua respectiva classe
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

