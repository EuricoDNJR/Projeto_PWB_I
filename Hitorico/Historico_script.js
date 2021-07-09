var tb, index, qtdLinhas;
var atividade,inicia,finaliza,total,pontos,data_in;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
      if (i === 3)
        await sleep(2000);
      console.log(i);
    }
  }
  
  demo();

function cadPessoa(atividade,inicia,finaliza,total,data_in){
    
    var linha = tb.insertRow();

    var cellAtividade = linha.insertCell(0);
    var cellInicia = linha.insertCell(1);
    var cellFInaliza = linha.insertCell(2);
    var cellTempoTotal = linha.insertCell(3);
    var cellData_inDeTermino = linha.insertCell(4);

    cellAtividade.innerHTML = atividade;
    cellInicia.innerHTML = inicia;
    cellFInaliza.innerHTML = finaliza;
    cellTempoTotal.innerHTML = total;
    cellData_inDeTermino.innerHTML = data_in;

}

function historico(){
    
    tb = document.getElementById("table");

    var linesNumber = tb.rows.length;

    var data = document.getElementById("senhoridade").value;

    for(var i = 0; i < linesNumber-1; i++){
        tb.deleteRow(1);
    }

    atividade = ["Revisão de conteudo de Arquitetura","Exercicio Fisico","Estudar Para PWeb","Prova de POO"];
    inicia = ["10:30", "09:10", "17:35", "15:23"];
    finaliza = ["11:30","09:40","19:10","17:23"];
    total = ["1:00", "00:30", "1:35", "2:00"];
    data_in = ["07/07/2021","06/07/2021","05/07/2021","04/07/2021"];

    for(var i = 0; i < data; i++){
        cadPessoa(atividade[i],inicia[i],finaliza[i],total[i],data_in[i]);
    }
    
}