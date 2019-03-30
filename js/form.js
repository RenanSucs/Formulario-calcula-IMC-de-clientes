var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(e){
    e.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var errors = validaPaciente(paciente);

    if(errors.length > 0){
        exibeMensagensDeErro(errors);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
};

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente){
    var errors = [];

    if (paciente.nome.length == 0){
        errors.push("O nome não pode ser em branco");
    }

    if(paciente.gordura.length == 0){
        errors.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        errors.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        errors.push("A altura não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        errors.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        errors.push("Altura é inválida");
    }

    return errors;
}

function exibeMensagensDeErro(errors){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    errors.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}