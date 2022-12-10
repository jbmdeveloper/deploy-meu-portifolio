//Função que aplica o estilo à opção selecionada e remove a selecionada anteriormente
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Fazemos o menu desaparecer assim que uma opção for selecionada
    //em modo responsivo
    var x = document.getElementById("nav");
    x.className = "";
}

//função que mostra menu responsivo
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Eu detecto a rolagem para aplicar a animação da barra de habilidade
window.onscroll = function() { efectoHabilidades() };

//função que aplica a animação da barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}