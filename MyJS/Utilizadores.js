$(document).ready(function () {
    class Utilizador {
        constructor(username, nome, email, contacto, imagemPerfil) {
            this.username = username;
            this.nome = nome;
            this.email = email;
            this.contacto = contacto;
            this.imagemPerfil = imagemPerfil;
        }
    }

    class Locador {
        constructor(username, nome, email, contacto, imagemPerfil) {
            this.username = username;
            this.nome = nome;
            this.email = email;
            this.contacto = contacto;
            this.imagemPerfil = imagemPerfil;
            this.listaImoveis = [];
        }
    }

    var utilizadores = {
        "locador" : new Locador("locador", "João Pinto Marques", "joaopmarques@xpto.pt", "912345678", ""),
        "locatario" : new Utilizador("locatario", "Vasco António Ramos", "vascoaramos@xpto.pt", "", "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100"),
        "locatario1" : new Utilizador("locatario1", "Tomás Oliveira Costa", "xptos@xpto.pt", "", "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100")
    };
    if (localStorage.getItem("utilizadores") == null) {
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores)); //meter as cenas no localStorage com o JSON... por objetos (pois em teoria o localStorage gosta de guardar as cenas em string ,assim com o metodos Json obrigas o gajo a guardar os objetos)
    } 
});