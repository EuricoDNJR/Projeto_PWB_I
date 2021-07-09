

var quantidade_de_atividades, feitas;

function atualizando_feitas_qnt_atividades(){
    var tb = document.getElementById("table");

    index = this.rowsIndex;
    const checkboxes = document.querySelectorAll('input[name="feito"]:checked');;

    let colors = [];

    checkboxes.forEach((checkbox) => {
        colors.push(checkbox.value);
    });

    quantidade_de_atividades = tb.rows.length - 1;
    feitas = colors.length;

}

var data,config;
var chart;

function atualizando_data_config() {

    atualizando_feitas_qnt_atividades();

    data = {
        labels: [
            'Feitas',
            'Não Feitas'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [feitas, quantidade_de_atividades-feitas],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(229, 229, 229)'
            
          ],
          hoverOffset: 4
        }]
      };
    config = {
        type: 'doughnut',
        data: data,
      };
}

function grafico_de_pizza() {
    atualizando_data_config();
    chart = new Chart(
        document.getElementById('graficoDePizza'),
        config
    );
}

function atualizando_grafico(){

    atualizando_feitas_qnt_atividades();

    atualizando_data_config();

    chart.data = data;

    chart.update();
}