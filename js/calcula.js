var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//IMC 
var pacientes = document.querySelectorAll(".paciente");

for( var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var imcTd = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        pesoEhValido = false;
        imcTd.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
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

function validaPeso(peso){
    if(peso > 0 && peso <= 100){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <=3.00){
        return true;
    }else{
        return false;
    }
}


   