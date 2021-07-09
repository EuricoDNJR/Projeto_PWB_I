var tb, index;

function cadAtividade(){
    tb = document.getElementById("table");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellAtividade = linha.insertCell(0);
    var cellInicia = linha.insertCell(1);
    var cellFInaliza = linha.insertCell(2);
    var cellData = linha.insertCell(3);

    atividade = document.getElementById("nome_da_atividad").value;
    inicia = document.getElementById("inicio_atividade").value;
    finaliza = document.getElementById("fim_atividade").value;
    data_in = document.getElementById("data_dia").value;

    cellAtividade.innerHTML = atividade;
    cellInicia.innerHTML = inicia;
    cellFInaliza.innerHTML = finaliza;
    cellData.innerHTML = data_in;

    preenchCamposForm();

}

function alPessoa(){

    atividade = document.getElementById("nome_da_atividad").value;
    inicia = document.getElementById("inicio_atividade").value;
    finaliza = document.getElementById("fim_atividade").value;
    data_in = document.getElementById("data_dia").value;

    tb.rows[index].cells[0].innerHTML = atividade;
    tb.rows[index].cells[1].innerHTML = inicia;
    tb.rows[index].cells[2].innerHTML = finaliza;
    tb.rows[index].cells[3].innerHTML = data_in;

}

function preenchCamposForm(){
    for(var i = 0; i < tb.rows.length; i++){
        tb.rows[i].onclick = function(){
            index = this.rowIndex;
            document.getElementById("nome_da_atividad").value = tb.rows[index].cells[0].innerText;
            document.getElementById("inicio_atividade").value = tb.rows[index].cells[1].innerText;
            document.getElementById("fim_atividade").value = tb.rows[index].cells[2].innerText;
            document.getElementById("data_dia").value = tb.rows[index].cells[3].innerText;
        } 
    }
}

function delRegistro(){
    for(var i = 0; i < tb.rows.length; i++){
        if (index == i){
            tb.deleteRow(index);
            return;
        }
    }
}