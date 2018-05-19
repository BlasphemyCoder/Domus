$(document).ready(function () {
    imoveis = JSON.parse(localStorage.getItem("imoveis"));
    var url = window.location.href.split("#")[1];
    console.log(url);
    url = url.split("_").join(" ");
    console.log(url);

    //imoveis[url] Aceder propriedades
    var titulo = url;
    var descricao = imoveis[url].descricao;
    var detalhes = imoveis[url].detalhes;
    var precos = imoveis[url].precos;
    var morada = imoveis[url].morada;
    var comodidades = imoveis[url].comodidades;
    var fotografias = imoveis[url].fotografias;
    console.log(comodidades);
    //Internet,Maquina Lavar Roupa,Ar condicionado,Secador,TvCabo, Intercomunicador, Elevador,Maquina Lavar louça
    var wifi = 0, mlr = 0, ac = 0, seca = 0, tv = 0, ic = 0, eleva = 0, mll = 0;

    if (fotografias.length > 0) {
        var fotofinal = fotografias[0];
    }
    //podemos fazer onerror
    else {
        var fotofinal = "https://static.noticiasaominuto.com/stockimages/1920/naom_5af3f98772d76.jpg";
    }
    //Criar verificaçoes para comidades
    for (i = 0; i < comodidades.length; i++) {
        var linha = comodidades[i];
        console.log(i);
        if (linha == "Internet") {
            $("#Internet").removeAttr("hidden");
        }
        if (linha == "TVCabo") {
            $("#TvCabo").removeAttr("hidden");
        }
        if (linha == "MaquinaLavarLouca") {
            $("#MaquinaLavarLouca").removeAttr("hidden");
        }
        if (linha == "Aquecimento") {
            $("#Aquecimento").removeAttr("hidden");
        }
        if (linha == "MaquinaLavarRoupa") {
            $("#MaquinaLavarRoupa").removeAttr("hidden");
        }
        if (linha == "Intercomunicador") {
            $("#Intercomunicador").removeAttr("hidden");
        }
        if (linha == "Secador") {
            $("#Secador").removeAttr("hidden");
        }
        if (linha == "Elevador") {
            $("#Elevador").removeAttr("hidden");
        }
    }

    //Nao haver comodidades, esconder
    if (comodidades.length <= 0) {
        $("#comodi").hide();
    }

    //
    $("#slideImages").append('<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
        '<div id="imagensInner" style="max-height:500px;" class="carousel-inner">' +
        '</div>' +
        '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' +
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Previous</span>' +
        '</a>' +
        '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Next</span>' +
        '</a>' +
        '</div>');

    for (i = 0; i < fotografias.length; i++) {
        if (fotografias.length == 0) {
            $("#slideImagens").hide();
        }
        else {
            if (i == 0) {
                $("#imagensInner").append(
                    `<div class="carousel-item active">
          <img class="d-block w-100" src="`+ fotografias[0] + `" alt="Slide">
          </div>`);
            }
            else {
                $("#imagensInner").append(
                    `<div class="carousel-item">
            <img class="d-block w-100" src="`+ fotografias[i] + `" alt="Slide">
            </div>`);
            }
        }
    }

    //Retornar Preços e info basica , Preco im[4][0], infoBasica --> im[2]
    $("#precos").append('<p><i class="fa fa-dollar"></i> Preço: ' + precos[0] + '€<br>' +
        '<i class="fa fa-dollar"></i> Despesas: ' + detalhes[3] + '<br>' +
        '<i class="fa fa-dollar"></i> Taxa Limpeza: ' + precos[1] + '€<br>')

    //Retornar BasicInfo
    $("#infoBasica").append('<p><i class="fa fa-users"></i> Nº de Residentes: ' + detalhes[0] + '<br>' +
        '<i class="fa fa-bed"></i> Camas: ' + detalhes[1] + '<br>' +
        '<i class="fa fa-shower"></i> WC: ' + detalhes[2] + '<br>')

    console.log(morada);
    //Retornar morada
    $("#morada").append('<p></i> Morada: ' + morada[0] + morada[5] + '<br>' +
        ' Zona: ' + detalhes[1] + morada[2] + morada[3] + '<br>' +
        ' Codigo Postal: ' + morada[4] + '<br>')

    //Retornar Descriçao
    $("#titulo").text(url);
    $("#descricao").text(descricao);
    $("#img1").attr("src", fotografias[0]);
    $("#img2").attr("src", fotografias[1]);
});
