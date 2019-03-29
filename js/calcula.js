var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//IMC 
var pacientes = document.querySelectorAll(".paciente");

for( var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var imcTd = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso > 100){
        pesoEhValido = false;
        imcTd.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        alturaEhValida = false;
        imcTd.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        imcTd.textContent = imc;
    }
}


function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


   