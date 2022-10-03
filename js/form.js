//ao clicar no botão "adicionar" as informações cadastradas devem ser inseridas na tabela de pacientes
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function () {

    //evitando o comportamento padrão do button de enviar os dados e atualizar a página
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria a tr e as td do paciente
    var pacienteTr = montaTr(paciente);

    //adiciono o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
});

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

//função que cria a tr
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //uso appendChild para os td serem filhos da tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
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