$(document).ready(function () {
    class Imovel {
        constructor(titulo, descricao, detalhes, morada, precos, comodidades, fotografias) {
            this.estado = "Não Validado";        // estado: Não Validado / Validado
            this.titulo = titulo;
            this.descricao = descricao;
            this.detalhes = detalhes;
            this.morada = morada;
            this.precos = precos;
            this.comodidades = comodidades;
            this.fotografias = fotografias;
        }

    }
    var imoveis = {
        "Casa dos Patios": new Imovel("Casa dos Pátios",
            "Integralmente remodelada em 2016, a Casa Pátios, com tipologia T1, insere-se no coração da zona histórica de Aveiro, no típico Bairro da Beira-Mar, fazendo as delícias de qualquer viajante.",
            ["2", "1", "Privativo", "Incluidas"],
            "Bairro da Beira-Mar",
            ["220", "10"],
            "",
            ["https://a0.muscache.com/im/pictures/1cf83b60-618b-4b0b-a0e6-eaeeb4ffc6a2.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/5b15bcc1-a087-4a30-87e8-2c146e1df731.jpg?aki_policy=x_large"]),

        "Trendy Flat": new Imovel("Trendy Flat",
            "Com uma varanda típica, fica localizado mesmo no centro da cidade, numa rua pedonal e bastante tranquila para crianças e adultos.",
            ["2", "1", "Privativo", "Incluidas"],
            ["Rua", "Freguesia", "Conchelho", "Distrito", "Codigo Postal", "Nº Porta"],
            ["210", "10"],
            ["Internet", "Secador", "Aquecimento"],
            ["https://a0.muscache.com/im/pictures/41ff3021-383e-40a4-93ad-662ca04da752.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/fcce391a-5726-4781-9bab-8fa476bcca5d.jpg?aki_policy=x_large"]),

        "Casa Natura": new Imovel("Casa Natura",
            "Casa Natura localiza-se no bairro mais bonito e típico de Aveiro, o Bairro da Beira Mar. Quartos simples e limpos, ideal para viajantes que procuram alojamento despretensioso com ambiente relaxado e familiar.",
            ["2", "1", "Privativo", "Incluidas"],
            "Bairro da Beira Mar",
            ["180", "10"],
            "",
            ["https://a0.muscache.com/im/pictures/960f54e8-09cf-4901-a804-1baac7986e60.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/b6f7549e-5056-4b75-8419-6e491ddd8e70.jpg?aki_policy=xx_large"]),


        "Albergue dos molicos": new Imovel("Albergue dos moliços",
            "Apartamento completamente novo no centro da cidade, a 100 metros dos canais da Ria e do pitoresco Bairro da Beira Mar, zona histórica da cidade. Situa-se ainda a 100mts do centro comercial.",
            ["2", "1", "Privativo", "Incluidas"],
            "Zona Centro",
            ["165", "10"],
            "",
            ["https://a0.muscache.com/im/pictures/7fd39b84-cea5-4cba-8b9e-a944491a6b4f.jpg?aki_policy=x_large"]),

        "Marnoto City": new Imovel("Marnoto City",
            "O meu espaço fica perto de vida noturna, atividades para famílias, e transportes públicos. Vai adorar o meu espaço por causa do bairro típico onde se situa, a cama confortável, e o aconchego.",
            ["2", "1", "Privativo", "Incluidas"],
            "Bairro da Beira-Mar",
            ["215", "10"],
            "",
            ["https://a0.muscache.com/im/pictures/809df5b0-5887-44de-9bd6-9d220b31c1fe.jpg?aki_policy=xx_large"]),

        "Aparatamento 25": new Imovel("Apartamento 25",
            "A cozy flat for two in the city center (Praça do Peixe). If you want to enjoy Aveiro's old town and simulate how it's living in the city, you should consider being our guest",
            ["2", "1", "Privativo", "Incluidas"],
            "Praça do Peixe",
            ["160", "10"],
            "",
            ["https://a0.muscache.com/im/pictures/402de3d4-7e0f-4922-8d7f-6dc591a1053c.jpg?aki_policy=x_large"]),

        "Casa VistaRia": new Imovel("Casa VistaRia",
            "É uma Suite com WC privativo, no centro histórico e artístico de Aveiro, é um espaço de charme, confortável, luminoso e moderno.",
            ["2", "1", "Privativo", "Incluidas"],
            "Centro Aveiro",
            ["220", "10"],
            "",
            []),

        "RiaArte Quarto": new Imovel("RiaArte Quarto",
            "As comodidades modernas aliam-se a um charme vintage no Quarto da RiaArte, um de 4 quartos privados disponíveis, dedicados cada um a uma arte.",
            ["2", "1", "Privativo", "Incluidas"],
            "Bairro da Beira-Mar",
            ["160", "10"],
            "",
            ["https://a0.muscache.com/im/pictures/41d8cb1d-6453-4d54-86b2-6dc3b6181266.jpg?aki_policy=x_large", "https://a0.muscache.com/im/pictures/f1471e3c-beff-414a-bbef-61f30638d6ae.jpg?aki_policy=xx_large"]),

        "Albergue dos Aluvioes": new Imovel("Albergue dos Aluviões",
            "A entrada para a casa é feita para um jardim interior, que embora se encontre com leves trabalhos de melhoramento, pode proporcionar momentos agradáveis.",
            ["2", "1", "Privativo", "Incluidas"],
            "Bairro da Beira-Mar",
            ["180", "10"],
            "",
            []),

        "Relax Soft": new Imovel("Relax Loft",
            "Apartamento tranquilo, perto de tudo, acessos autoestrada, estação de comboios, autocarros à porta, lavandaria self-service.",
            ["2", "1", "Privativo", "Incluidas"],
            "Bairro da Beira-Mar",
            ["145", "10"],
            "",
            ["https://a0.muscache.com/im/pictures/82172ddc-ba43-4483-b2d0-75d6ee6672a7.jpg?aki_policy=xx_large", "https://a0.muscache.com/im/pictures/beb29ecd-f6a9-4be4-bc13-ab895d7c4e2a.jpg?aki_policy=x_large"]),
    };



    utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

    Object.keys(imoveis).forEach(function (key) {
        imoveis[key].estado = "Validado";
    });
    if (localStorage.getItem("imoveis") == null) {
        localStorage.setItem("imoveis", JSON.stringify(imoveis)); //meter as cenas no localStorage com o JSON... por objetos (pois em teoria o localStorage gosta de guardar as cenas em string ,assim com o metodos Json obrigas o gajo a guardar os objetos)
    }
    console.log(utilizadores);
    if (utilizadores["locador"].listaImoveis.length == 0) {
        Object.keys(imoveis).forEach(function (key) {
            utilizadores["locador"].listaImoveis.push(imoveis[key]);
        });
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
    }

    $("#cancel").click(function () {
        window.location.assign("locador.html");
    });

    $("#submit").click(function () {
        var comodidades = [];
        $.each($(".checkbox"), function (index, value) {
            if ($("#" + value.id).is(":checked"))
                comodidades.push(value.id);
        });
        var imov = new Imovel($("#titulo").val(), $("#descricao").val(), [$("#pessoas").val(), $("#quartos").val(), $("#WC").val(), $("#despesas").val()],
            [$("#nomeRua").val(), $("#freguesia").val(), $("#concelho").val(), $("#distrito").val(), $("#codigoPostal").val(), $("#porta").val()], [$("#precoMensal").val(), $("#taxaLimpeza").val()], comodidades, "");
        imoveis[$("#titulo").val()] = imov;
        utilizadores["locador"].listaImoveis.push(imov);
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
        localStorage.setItem("imoveis", JSON.stringify(imoveis));
        window.location.assign("locadorOsMeusImoveis.html");
    });
});