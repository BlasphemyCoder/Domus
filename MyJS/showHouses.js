$(document).ready(function () {
    imoveis = JSON.parse(localStorage.getItem("imoveis")); //basicamente aqui tas a ir buscar as cenas ao storage mas precisas daquela merda do JSON... para conseguires retirar os objetos e nao a string
    console.log("ola");
    console.log(imoveis);
    var count = 0;
    $.each(imoveis, function (index, value) {
        if (value.estado == "Validado") {
            $(".grid").append(
                `<div class="product border border-primary">
                    <div class="product__info">
                        <h3 class="product__title text-primary">`+ index + `</h3 >` +
                `<div style="height: 140px" id="aviso` + count + `"><h7 class="text-default">Não existem imagens</h7></div>
                    <div style="height: 140px" id="carouselExampleControls` + count + `" class="carousel slide" data-ride="carousel` + count +`">
                            <div class="carousel-inner" id="imagens`+ count +`"></div>
                            <a class="carousel-control-prev" href="#carouselExampleControls`+ count +`" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls`+ count +`" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>`
                +
                `<span class="product__price highlight">` + value.precos[0] + ` €</span>
                    <a href="imovelDetailNaoLogado.html#`+ index.split(" ").join("_").normalize('NFD').replace(/[\u0300-\u036f]/g, "")+`" class="action action--button btn btn-primary action--buy"><i class="fas fa-search-plus"></i><span class="action__text">Show More</span></a>
                </div>
                <label style="display:none" class="action action--compare-add"><input class="check-hidden" style="display:none" type="checkbox" /><i style="display:none" class="fa fa-plus"></i><i style="display:none" class="fa fa-check"></i><span class="action__text action__text--invisible">Add to compare</span></label>
            </div>`
            );
            console.log(value.fotografias.length)
            if (value.fotografias.length == 0) {
                $("#aviso" + count).show();
                $("#carouselExampleControls" + count).hide();
            }
            else {
                $("#aviso" + count).hide();
                var count2 = 0;
                $.each(value.fotografias, function (index, value) {
                    if (index == 0) {
                        $("#imagens" + count).append(
                            `<div class="carousel-item active">
                            <img id="imagem`+ count2 +`" class="product__image d-block w-100" src="`+ value + `" alt="Slide`+count+1+`">
                        </div>`);
                    }
                    else {
                        $("#imagens" + count).append(
                            `<div class="carousel-item">
                            <img id="imagem`+ count2 +`" class="product__image d-block w-100" src="`+ value + `" alt="Slide` + count + 1 +`">
                        </div>`);
                    }
                    count2++;

                });
            }
            count++;
        }
    });


});