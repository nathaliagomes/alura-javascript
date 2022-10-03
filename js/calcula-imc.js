//trago a linha do título e altero o conteúdo dele
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//querySelectorAll trás um array com todos os pacientes com a classe "paciente"
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    //percorro cada valor do meu array, ou seja, cada paciente
    var paciente = pacientes[i];

    //trago a coluna que corresponde ao peso e o conteúdo dela
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //trago a coluna que corresponde a altura e o conteúdo dela
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //trago a coluna que corresponde ao imc
    var tdIMC = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    //se o peso for inválido, preenche o campo com a mensagem "peso inválido"
    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    //se a altura for inválida, preenche o campo com a mensagem "altura inválida"
    if (!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    //se ambos são válidos, calcula imc
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdIMC.textContent = imc;
    }
}

//funcao que valida o peso
function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

//funçao que valida a altura
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }

}

//função que calcula o imc
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}