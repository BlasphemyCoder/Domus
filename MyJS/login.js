$(document).ready(function () {
    $("#myLogin").click(function () {
        var utilizador = $("#inputUsername").val();
        if (utilizador == "locador" || utilizador == "locatario" || utilizador == "admin") {
            localStorage.setItem('flagUser', utilizador);  // nao sei o que é !!!! ver depois....
            if (utilizador == "admin") {
                //alert("ola");
                window.location.assign('administrador.html');
            }
            else if (utilizador == "locador") {
                //alert("ola1");
                window.location.assign('locador.html');
            }

            else
                window.location.assign("locatario.html")
        }
        else {
            alert("Login Inválido!")
        }
    });
});