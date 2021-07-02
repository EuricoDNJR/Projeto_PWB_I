function cadastra() {

    var email = document.getElementById("email").value;
    var nome_de_usuario = document.getElementById("nome_de_usuario").value;
    var senha = document.getElementById("senha").value;

    localStorage.setItem("email", email);
    localStorage.setItem("nome_de_usuario", nome_de_usuario);
    localStorage.setItem("senha", senha);
}

function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var email_salvo = localStorage.getItem("email");
    var senha_salva = localStorage.getItem("senha");

    if (email === email_salvo) {
        if (senha === senha_salva) {
            alert("Logado!");
        } else {
            alert("Senha errada!");
        }
    } else {
        alert("Email incorreto!");
    }
}