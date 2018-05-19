$(document).ready(function () {
    var utilizadores = {};
    $.each(JSON.parse(localStorage.getItem("utilizadores")), function (index, value) { //basicamente aqui tas a ir buscar as cenas ao storage mas precisas daquela merda do JSON... para conseguires retirar os objetos e nao a string
        utilizadores[index] = value;
    });

    $("#imagemPerfil").attr("src", utilizadores["locatario"].imagemPerfil);
    console.log(utilizadores["locatario"]);

    $("#username").text(utilizadores["locatario"].username);
    $("#nome").text(utilizadores["locatario"].nome);
    $("#email").text(utilizadores["locatario"].email);

    if (utilizadores["locatario"].contacto == "") {
        $("#contactoRow").css("display", "none");
        console.log("ola");
    } else {
        $("#contacto").text(utilizadores["locatario"].contacto);
    }
});