var user = document.getElementById("user");
var password = document.getElementById("password");
var result = document.querySelector(".result");
var btn = document.getElementById("btn-login");

//Funcao para validar o login quando for clicado no botao de entrar
btn.addEventListener('click', function(){
    if(user.value == "user" && password.value === "1234"){
        result.innerHTML = `<p style="color: lightgreen;">Usuário encontrado!</p>`
    }
    else{
        result.innerHTML = `<p style="color: red;">Senha ou usuário incorreto!</p>`
    }
})

