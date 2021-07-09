var tb, index

function cadPessoa(){

    tb = document.getElementById("table");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas)

    var cellAtividade = linha.insertCell(0);
    var cellInicia = linha.insertCell(1);
    var cellFInaliza = linha.insertCell(2);
    var cellTempoTotal = linha.insertCell(3);
    var cellPontos = linha.insertCell(4);
    var cellDataDeTermino = linha.insertCell(5);

    cellAtividade.innerHTML = "Revisão de conteudo de Arquitetura";
    cellInicia.innerHTML = "10:30";
    cellFInaliza.innerHTML = "11:30";
    cellTempoTotal.innerHTML = "1:00";
    cellPontos.innerHTML = "2";
    cellDataDeTermino.innerHTML = "07/07/2021";

}

function alPessoa(Atividade,Inicia,Finaliza,TempoTotal,Pontos,DataDeTermino){
    
    tb.rows[index].cells[1].innerHTML = Atividade;
    tb.rows[index].cells[2].innerHTML = Inicia;
    tb.rows[index].cells[3].innerHTML = Finaliza;
    tb.rows[index].cells[4].innerHTML = TempoTotal;
    tb.rows[index].cells[5].innerHTML = Pontos;
    tb.rows[index].cells[6].innerHTML = DataDeTermino;

}

function preencheCamposForm() {
    for(var i = 0; i < tb.rows.length; i++){
        tb.rows[i].onclick = function(){
            index = this.rowsIndex;
        }
        
    }
}

function delRegistro(){
    for(var i = 0; i < tb.rows.length; i++){
        if(index == i){
            tb.deleteRow(index);
            return;
        }
    }
}