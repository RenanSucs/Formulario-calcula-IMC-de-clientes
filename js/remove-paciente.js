var tabelaPacientes = document.querySelector("#tabela-pacientes");

tabelaPacientes.addEventListener("dblclick", function(e){
    e.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        e.target.parentNode.remove();
    },500);
});

/*var pacientes = document.querySelectorAll(".paciente")

pacientes.forEach(function removePacientes(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
});*/