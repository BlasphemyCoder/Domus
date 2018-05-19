$(document).ready(function () {
    locat = JSON.parse(localStorage.getItem("utilizadores"))["locador"];
    console.log(locat);

    $.each(locat.listaImoveis, function (index, value) {
        //value.estado = "Não Validado";
        if (locat.listaImoveis.length == 0) {
            $(".table").hide();
            $("#1").append(
                '<h3 class="text-danger">Ainda não tem imóveis.</h3>'
            );
        }
        else {
            if (value.estado == "Não Validado") {
                $("#tbody").append(
                    `<tr>
            <td>`+ value.titulo + `</td>
            <td>`+ value.estado + `</td>
            <td><a href="#" class="disabled btn btn-primary"><i class="fas fa-edit"></i></a></td>
            <td><a href="#" class="btn btn-danger disabled"><i class="fas fa-times"></i></a></td></tr>`
                );
            }
            else {
                $("#tbody").append(
                    `<tr>
            <td>`+ value.titulo + `</td>
            <td>`+ value.estado + `</td>
            <td><a href="#" class="btn btn-primary"><i class="fas fa-edit"></i></a></td>
            <td><a href="#"class="btn btn-danger"><i class="fas fa-times"></i></a></td></tr>`
                );
            }
        }
    });


});