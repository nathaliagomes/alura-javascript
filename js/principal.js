//trago a linha do título e altero o conteúdo dele
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//querySelectorAll trás um array com todos os pacientes com a classe "paciente"
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    //percorro cada valor do meu array, ou seja, cada paciente
    var paciente = pacientes[i];

    //trago a coluna que corresponde ao peso e o conteúdo dela
    tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //trago a coluna que corresponde a altura e o conteúdo dela
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //trago a coluna que corresponde ao imc
    var tdIMC = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    //verifico se o peso é válido
    if (peso < 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    //verifico se a altura é válida
    if (altura < 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    //se ambos são válidos, calculo o imc, adiciono na coluna do imc e arredondo o resultado
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }
}

//criado um formulário de castrado no html, preciso que ao clicar no botão "adicionar" as informações cadastradas sejam inseridas na tabela de pacientes
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function () {

    //primeiro, preciso evitar o comportamento padrão do button de enviar os dados e atualizar a página
    event.preventDefault();

    //depois, trago todos os dados do meu form
    var form = document.querySelector("#form-adiciona");

    //acesso os valores de cada campo do form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //crio um elemento tr, ou seja, a nova linha na tabela
    var pacienteTr = document.createElement("tr");

    //crio os elementos td, ou seja, as colunas do form
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //uso appendChild para os td serem filhos da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //adiciono essa tr com todos os td na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});