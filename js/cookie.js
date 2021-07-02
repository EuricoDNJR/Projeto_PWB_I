// Cria um novo cookie
// Parâmetro 1 é o nome do cookie
// Parâmetro 2 é o valor do cookie
function cria_cookie(nome, valor) {
        // Cria uma data 01/01/2020
        var data = new Date(2022,0,01);
        // Converte a data para GMT
        data = data.toGMTString();
        // Codifica o valor do cookie para evitar problemas
        valor = encodeURI(valor);
        // Cria o novo cookie
        document.cookie = nome + '=' + valor + '; expires=' + data + '; path=/';
    }

// Apaga o cookie
// Envie o nome do cookie como parâmetro
function apaga_cookie(nome){
    // Cria uma data no passado 01/01/2010
    var data = new Date(2010,0,01);
    // Converte a data para GMT
    data = data.toGMTString();
    // Tenta modificar o valor do cookie para a data expirada
    // Assim ele será apagado
    document.cookie = nome + '=; expires=' + data + '; path=/';
}

// Obtém o valor de um cookie
// Envie o nome do cookie como parâmetro
function valor_cookie(nome_cookie) {
    // Adiciona o sinal de = na frente do nome do cookie
    var cname = ' ' + nome_cookie + '=';
    
    // Obtém todos os cookies do documento
    var cookies = document.cookie;
        
    // Verifica se seu cookie existe
    if (cookies.indexOf(cname) == -1) {
        return false;
    }
        
    // Remove a parte que não interessa dos cookies
    cookies = cookies.substr(cookies.indexOf(cname), cookies.length);

    // Obtém o valor do cookie até o ;
    if (cookies.indexOf(';') != -1) {
        cookies = cookies.substr(0, cookies.indexOf(';'));
    }
        
    // Remove o nome do cookie e o sinal de =
    cookies = cookies.split('=')[1];
        
    // Retorna apenas o valor do cookie
    return decodeURI(cookies);
}

function cadastra() {

    var email = document.getElementById("email").value;
    var nome_de_usuario = document.getElementById("nome_de_usuario").value;
    var senha = document.getElementById("senha").value;

    cria_cookie("email", email);
    cria_cookie("nome_de_usuario", nome_de_usuario);
    cria_cookie("senha", senha);
}

function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var email_salvo = valor_cookie("email");
    var senha_salva = valor_cookie("senha");

    console.log(email);
    console.log(senha);

    console.log(email_salvo);
    console.log(senha_salva);

    if (email === email_salvo) {
        if (senha === senha_salva) {
            console.log("logado!");
        }
    } else {
        console.log("senha ou email incorretos!");
    }
}