
function grafico_de_barras() {
    const labels = [
        '05/07',
        '06/07',
        '07/07',
        '08/07',
        '09/07',
        '10/07',
        '11/08'
    ];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Atividades Feitas',
            data: [15 ,11 ,10, 15, 7, 20, 13],
            backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)',
            'rgb(54, 162, 235)'
            ],
            borderColor: [
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };

    chart_barra = new Chart(
        document.getElementById('graficoDeBarras'),
        config
    );
}

function grafico_de_pizza() {
    const data = {
        labels: [
            'Total de Feitas',
            'Total de não Feitas'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [50, 300],
          backgroundColor: [
            'rgb(229, 229, 229)',
            'rgb(54, 162, 235)'
            
          ],
          hoverOffset: 4
        }]
      };
    const config = {
        type: 'doughnut',
        data: data,
      };
    chart_barra = new Chart(
        document.getElementById('graficoDePizza'),
        config
    );
}

var opcoes = document.getElementById('grafico_de_linhas')
var labels = [
    '07/07',
    '08/07',
    '09/07',
    '10/07',
    '11/08'
];
var data = {
    labels: labels,
    datasets: [{
        label: 'Atividade Feiras no Dia',
        backgroundColor: '#007FFF',
        borderColor: '#007FFF',
        color: '#007FFF',
        data: [10, 15, 7, 20, 13]
    }]
};
var config = {
    type: 'line',
    data,
    options: {}
};

var chart

function grafico_linhas() {
    chart = new Chart(
        document.getElementById('grafico_de_linhas'),
        config
    );
}

function Adicionar_Dados(){

    var label = ['Carro'];
    var data = [20];

    

    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });

    chart.update();
}

function Remover_Dados() {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function updateConfigAsNewObject() {
    
    var quant_dias = document.getElementById('data_graficos_de_linhas').value;
    if(quant_dias === '1'){
        var labels = [
            '07/07',
            '08/07',
            '09/07',
            '10/07',
            '11/08'
        ];
        var data = {
            labels: labels,
            datasets: [{
                label: 'Atividade Feiras no Dia',
                backgroundColor: '#007FFF',
                borderColor: '#007FFF',
                color: '#007FFF',
                data: [10, 15, 7, 20, 13]
            }]
        };

    }else if(quant_dias === '2'){
        var labels = [
            '06/07',
            '07/07',
            '08/07',
            '09/07',
            '10/07',
            '11/08'
        ];
        var data = {
            labels: labels,
            datasets: [{
                label: 'Atividade Feiras no Dia',
                backgroundColor: '#007FFF',
                borderColor: '#007FFF',
                color: '#007FFF',
                data: [11,10, 15, 7, 20, 13]
            }]
        };

    }else if(quant_dias === '3'){
        var labels = [
            '05/07',
            '06/07',
            '07/07',
            '08/07',
            '09/07',
            '10/07',
            '11/08'
        ];
        var data = {
            labels: labels,
            datasets: [{
                label: 'Atividade Feiras no Dia',
                backgroundColor: '#007FFF',
                borderColor: '#007FFF',
                color: '#007FFF',
                data: [15 ,11 ,10, 15, 7, 20, 13]
            }]
        };

    }

    chart.data = data;

    chart.update();

}







