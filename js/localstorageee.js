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
            //window.location.href = "/Home_logada.html";
            window.open("../Home_logada/Home_Logada.html");
            alert("Logado");
        } else {
            alert("Senha errada!");
        }
    } else {
        alert("Email incorreto!");
    }
}

function show_name() {
    var nome_de_usuario_salvo = localStorage.getItem("nome_de_usuario");
    const nome_de_usuario_tag = document.getElementById("nome_de_usuario_tag");
    nome_de_usuario_tag.textContent = "Olá " + nome_de_usuario_salvo + "!";
}