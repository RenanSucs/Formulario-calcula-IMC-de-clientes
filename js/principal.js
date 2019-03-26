var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;

var altura = paciente.querySelector(".info-altura").textContent;

var imc = paciente.querySelector(".info-imc");

var result = peso / (altura * altura);

imc.textContent = result; 

