$(document).ready(function () {
    var utilizadores = {};
    $.each(JSON.parse(localStorage.getItem("utilizadores")), function (index, value) { //basicamente aqui tas a ir buscar as cenas ao storage mas precisas daquela merda do JSON... para conseguires retirar os objetos e nao a string
        utilizadores[index] = value;
    });

    $("#imagemPerfil").attr("src", utilizadores["locador"].imagemPerfil);
    console.log(utilizadores["locador"]);

    $("#username").text(utilizadores["locador"].username);
    $("#nome").text(utilizadores["locador"].nome);
    $("#email").text(utilizadores["locador"].email);

    if (utilizadores["locador"].contacto == "") {
        $("#contactoRow").css("display", "none");
        console.log("ola");
    } else {
        $("#contacto").text(utilizadores["locador"].contacto);
    }
});