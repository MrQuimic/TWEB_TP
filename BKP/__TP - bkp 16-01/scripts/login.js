if (loginok == "sim") {
    //alert(usercoockie);
    document.getElementById("login_u").style.display = 'none';
    document.getElementById("registro_u").style.display = 'none';
    document.getElementById("logoutbtn").style.display = 'block';
    document.getElementById("logged_in").style.display = 'block';
} else {
    document.getElementById("login_u").style.display = 'block';
    document.getElementById("registro_u").style.display = 'block';
    document.getElementById("logoutbtn").style.display = 'none';
    document.getElementById("resettbtn").style.display = 'none';
    document.getElementById("logged_in").style.display = 'none';
}

function defineEvents() {
    let loginbtn = document.getElementById("loginbtn");
    let form = document.getElementById("login");
    let registro_btn = document.getElementById("registro_btn");
    let form2 = document.getElementById("registro");
    let resettbtn = document.getElementById("resettbtn");
    let logoutbtn = document.getElementById("logoutbtn");

    loginbtn.addEventListener("click", function() {
        if (form.checkValidity()) {
            login();
        }
    });

    logoutbtn.addEventListener("click", function() {
        //alert("Até à próxima caro utilizador: " + usercoockie);
        localStorage.setItem('loga', '0');
        localStorage.setItem('currentusera', "0");
        location.reload();
    });

    registro_btn.addEventListener("click", function() {
        let user1 = localStorage.getItem("user1");
        let user2 = localStorage.getItem("user2");
        let user3 = localStorage.getItem("user3");
        //alert (user1);
        if (user3 != 0) {
            alert("Base de dados cheia (Maximo 3 utilisadores na versão demo). Terá de se logar com um utilisador existente para fazer reset à base de dados --> os cookies do navegador!");
        }
        if (user_name.value == "admin" || user_name.value == localStorage.getItem("user1") || user_name.value == localStorage.getItem("user2") || user_name.value == localStorage.getItem("user3")) {
            alert("Utilizador já existe na base de dados");
        } else {
            //alert (user_name.value);
            if (form2.checkValidity()) {
                registro();
            }
        }
    });

    resettbtn.addEventListener("click", function() {
        registrosclear();
    });

    function login() {;
        let user1 = localStorage.getItem("user1");
        let user2 = localStorage.getItem("user2");
        let user3 = localStorage.getItem("user3");
        let password1 = localStorage.getItem("password1");
        let password2 = localStorage.getItem("password2");
        let password3 = localStorage.getItem("password3");
        //alert(password1);
        let username = document.getElementById("login").username;
        let password = document.getElementById("login").password;

        if ((username.value == user1 && password.value == password1) || (username.value == user2 && password.value == password2) || (username.value == user3 && password.value == password3) || (username.value == "admin" && password.value == "1")) {
            localStorage.setItem('currentusera', username.value);
            let currentusera = localStorage.getItem('currentusera');
            //alert(currentusera);
            localStorage.setItem('loga', 'sim');
            let loga = localStorage.getItem('loga');
            //alert("login effectuado com sucesso");
            location.reload();
        } else {
            failed.classList.remove("invisible");
        }
    }

    function registro() {

        let user1 = localStorage.getItem("user1");
        let user2 = localStorage.getItem("user2");
        let user3 = localStorage.getItem("user3");

        if (user1 == 0 && user2 == 0 && user3 == 0) {
            novousern = 1;
            //alert(novousern);
        }
        if (user1 != 0 && user2 == 0 && user3 == 0) {
            novousern = 2;
            //alert(novousern);
        }
        if (user1 != 0 && user2 != 0 && user3 == 0) {
            novousern = 3;
            //alert(novousern);
        }
        //alert("A sua base de dados está cheia por favor - faça reset");
        if (novousern < 4) {
            novouser = "user" + novousern;
            novapass = "password" + novousern;
            novoemail = "email" + novousern;
            if (passworda.value == passwordb.value) {
                //alert(novapass);
                localStorage.setItem("user" + novousern, user_name.value);
                localStorage.setItem("password" + novousern, passworda.value);
                localStorage.setItem("email" + novousern, email.value);
                let user1 = localStorage.getItem("user" + novousern);
                let password1 = localStorage.getItem("password" + novousern);
                let email1 = localStorage.getItem("email" + novousern);
                //alert (passworda.value);
                localStorage.setItem('currentusera', user1);
                let currentusera = localStorage.getItem('currentusera');
                //alert(currentusera);
                localStorage.setItem('loga', 'sim');
                let loga = localStorage.getItem('loga');
                alert("Registro effectuado com sucesso - Login utilizador temporário, por favor confirme o seu email para ter o accesso completo!");
                location.reload();
            }
        }

    }

}

function RegistoForm() {
    //window.alert("Dados inseridos corretamente!");
    document.getElementById('registro').style.display = 'none';
    document.getElementById("sucessoregisto").style.display = 'block';
}

function registrosclear() {
    for (let i = 1; i < 4; i++) {
        localStorage.setItem("user" + i, 0);
        localStorage.setItem("password" + i, 0);
        localStorage.setItem("email" + i, 0);
    }
    var user1 = localStorage.getItem("user1");
    var user2 = localStorage.getItem("user2");
    var user3 = localStorage.getItem("user3");
    alert("A base de dados está limpa!");
}
/*
localStorage.setItem('names_length', names.length);
localStorage.setItem('names_0', names[0]);
localStorage.setItem('names_1', names[1]);
localStorage.setItem('names_' + n, names[n]);
*/

defineEvents();