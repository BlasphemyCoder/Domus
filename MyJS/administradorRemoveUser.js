$(document).ready(function () {
    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
    $.each(utilizadores, function (index, value) {
        $("#tbody").append(
            `<tr>
            <td><img style="height:30px;" src="`+ value.imagemPerfil + `" onerror="this.src = 'https://openclipart.org/download/247319/abstract-user-flat-3.svg'"></img></td>
            <td>`+ value.username + `</td>
            <td>`+ value.email + `</td>
            <td><button id="delete_`+ value.username+`" class="btn btn-danger"><i class="fas fa-times"></i></button></td></tr>`
        );
    });

    $(".btn-danger").click(function () {
        console.log(this.id.split("_")[1]);
        delete utilizadores[this.id.split("_")[1]];
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
        window.location.assign("administradorRemoveUser.html");
    });
});