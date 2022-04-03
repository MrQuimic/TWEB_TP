
google.charts.load('current', {'packages':['corechart', 'bar']});

google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['Tipo', 'Numero de profissionais'],
        ['Dirigentes',              1],
        ['Médicos',                 6],
        ['Enfermeiros',             6],
        ['Secretários Clínicos',    4],
        ['Assistentes Operacionais',3],
        ['Internos',                2]
    ]);

    if (darkm1 === "darkmode"){    
        var options = {
            title: 'Colaboradores [Dados Gerais]', 
            backgroundColor: {fill:'transparent'},           
            legend: { 
                textStyle: { color: 'white' }
            },
            titleTextStyle: { color: '#FFF' },
            bar: {groupWidth: "30%"},
            is3D: true,
            chartArea: {
                backgroundColor: '#b6b6b6',
                width: '75%', height: "80%"
            },
            //percentEnabled:	true, 
            shadowEnabled: true,	
            shadowColor: 'white',
            shadowOffset: 2
        };
    }else{   
        var options = {title: 'Colaboradores [Dados Gerais]', 
            backgroundColor: {fill:'#fff'},           
            legend: { 
                position: 'left', 
                maxLines: 20, 
                color: 'white'
            },
            bar: { groupWidth: "30%" },
            is3D: true,
            chartArea: {
                backgroundColor: '#b6b6b6',
                width: '75%', height: "70%"
            },
            //percentEnabled:	true, 
            shadowEnabled: true,	
            shadowColor: 'white',
            shadowOffset: 2 
            };
        }
  
    var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

    chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Tipo de Servico',             'Numero'],
        ['Consulta Programada',            50000],
        ['Consulta Aguda',                 70000],
        ['Consulta Domicilio',             30000],
        ['Atividades nao Presenciais',     10000],
        ['Cuidados de enfermagem',         20500],
    ]);
    
    if (darkm1 === "darkmode"){    
   
        var options = {
            title: 'Média do número de ocorrências de cada serviço prestado (por ano)', 
            backgroundColor: {fill:'transparent'},           
            legend: { 
                textStyle: { color: 'white' }
            },
            titleTextStyle: { color: '#FFF' },
            bar: { groupWidth: "30%" },
            is3D: true,
            chartArea: {
                backgroundColor: '#b6b6b6',
                width: '75%', height: "70%"
            },
            //percentEnabled:	true, 
            shadowEnabled: true,	
            shadowColor: 'white',
            shadowOffset: 2
        };
        }else{   
            var options = {title: 'Média do número de ocorrências de cada serviço prestado (por ano)', 
            backgroundColor: {fill:'white'},           
            legend: { position: 'left', maxLines: 20, 
            color: 'white'},
            bar: { groupWidth: "30%" },
            is3D: true,
            chartArea: {
                backgroundColor: '#b6b6b6',
                width: '75%', height: "70%"
              },
              //percentEnabled:	true, 
              shadowEnabled: true,	
              shadowColor: 'white',
              shadowOffset: 2
        
        };
            }
    
    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {

    var data = google.visualization.arrayToDataTable([
        ['Tipo Marcação',          'Numero'],
        ['Telefone',                75000],
        ['Presencial',              40000],
        ['Email',                   15000],
        ['Site (Formulário)',       20000]
    ]);
    
    if (darkm1 === "darkmode"){    
    
        var options = {
        title: 'Média do número de cada tipo de marcação de consultas (por ano)',                
        backgroundColor: {fill:'transparent'},           
        legend: { 
            textStyle: { color: 'white' }
        },
        titleTextStyle: { color: '#FFF' },
        bar: { groupWidth: "30%" },
        is3D: true,
        chartArea: {
            backgroundColor: '#b6b6b6',
             width: '80%', height: "70%"
          },
        //percentEnabled:	true, 
          shadowEnabled: true,	
          shadowColor: 'white',
          shadowOffset: 2

        };
        }else{   
            var options = {title: 'Média do número de cada tipo de marcação de consultas (por ano)', 
            backgroundColor: {fill:'#fff'},
            legend: { position: 'left', maxLines: 20, 
            color: 'white'},
            bar: { groupWidth: "30%" },
            is3D: true,
            chartArea: {
                backgroundColor: '#b6b6b6',
                 width: '80%', height: "70%"
              },
              //percentEnabled:	true, 
              shadowEnabled: true,	
              shadowColor: 'white',
              shadowOffset: 2        
            };
        } 
            
    var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
    
    chart.draw(data, options);
}


google.charts.setOnLoadCallback(drawChart5);

function drawChart5() {
    var data = google.visualization.arrayToDataTable([
        ['TipoConsulta',        'Agendadas', 'Realizadas'],
        ['Consultas Médicas',         41600,        41150],
        ['Consultas Enfermagem',      37890,        36100]
    ]);

    if (darkm1 === "darkmode"){    
        var options = {
            title: 'Média de Consultas Agendadas e Realizadas', 
            legend: { 
                position: 'left',
                textStyle: { color: 'white' }
            },
            bar: { groupWidth: "30%" },
            backgroundColor: {fill:'#b6b6b6'}, 
            is3D: false,
            textStyle: {color: 'white'},
            titleTextStyle: { color: '#FFF' },
            hAxis: {
                textStyle: {color: "#FFFFFF"},
                gridlines: {color: "#FFFFFF"}},
            vAxis: {
                textStyle: {color: "#FFFFFF"},
                gridlines: {color: "#FFFFFF"}},
            chartArea: {
                backgroundColor: 'transparent',
                width: '80%', 
                height: '75%',           
                right:500
            },
            titlePosition: 'in', 
            axisTitlesPosition: 'in',
            hAxis: {
                showTextEvery: '1', 
                textPosition: 'out'
            }, 
            vAxis: {textPosition: 'out'},
            backgroundColor: {fill: 'transparent'},
            percentEnabled:	true, 
            shadowEnabled: true,	
            shadowColor: 'white',
            shadowOffset: 2,
        };
    }else{   
        var options = {
            title: 'Média de Consultas Agendadas e Realizadas', 
            legend: {
            color: 'white'},
            legend: { 
                position: 'left'
            },
            bar: { groupWidth: "30%" },
            backgroundColor: {fill:'#fff'}, 
            is3D: true,
            chartArea: {
                backgroundColor: '#fff',
                width: '30%', height: "70%"
            },
            backgroundColor: {
                fill: 'transparent',
            },
            percentEnabled:	true, 
            shadowEnabled: true,	
            shadowColor: 'white',
            shadowOffset: 2,
            
        };
        } 
    


    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.setOnLoadCallback(drawChart4);
function drawChart4() {
    var data = google.visualization.arrayToDataTable([
      ['Idades', 'Feminino', 'Masculino'],
      ['<25', 125, 114],
      ['[25, 45]', 312, 295],
      ['[45,65]', 521, 531],
      ['>65', 660, 620]
    ]);

    if (darkm1 === "darkmode"){        
        var options = {
            title: 'Idades dos Utentes', 
            backgroundColor: {fill:'transparent'},           
            legend: { 
                position: 'left',
                textStyle: { color: 'white' }
            },
            titleTextStyle: { color: '#FFF' },
            hAxis: {
                textStyle: {color: "#FFFFFF"},
                gridlines: {color: "#FFFFFF"}},
            vAxis: {
                textStyle: {color: "#FFFFFF"},
                gridlines: {color: "#FFFFFF"}
                },
            bar: { groupWidth: "50%"},
            is3D: false,
            chartArea: {
                backgroundColor: 'transparent',
                width: '80%', 
                height: '75%',           
                right:500
            },
            titlePosition: 'in', 
            axisTitlesPosition: 'in',
            hAxis: {
                showTextEvery: '1', 
                textPosition: 'out'
            }, 
            vAxis: {textPosition: 'out'},
              backgroundColor: {
                fill: 'transparent',
              },
              percentEnabled: true, 
              shadowEnabled: true,	
              shadowColor: 'white',
              shadowOffset: 2,
        };
    }else{   
        var options = {
            title: 'Idades dos Utentes', 
            bar: { groupWidth: "30%" },
            is3D: true,
            chartArea: {
                backgroundColor: '#fff',
                width: '30%', 
                height: "70%"
                },
                legend: { 
                    position: 'left'
                },
            backgroundColor: {fill: '#fff',},
            percentEnabled:	true, 
            shadowEnabled: true,	
            shadowColor: 'white',
            shadowOffset: 2         
        };
    } 

    var chart = new google.charts.Bar(document.getElementById('columnchart_material1'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.setOnLoadCallback(drawChart6);
function drawChart6() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Taxa de Mortalidade Perinatal', 'Taxa de Mortalidade Neonatal'],
        ['2000',  6.2, 3.4],
        ['2001',  5.6, 2.9],
        ['2002',  6.0, 3.4],
        ['2003',  5.1, 2.7],
        ['2004',  4.4, 2.6],
        ['2005',  4.3, 2.2],
        ['2006',  4.6, 2.1],
        ['2007',  4.4, 2.1],
        ['2008',  4.0, 2.1],
        ['2009',  4.6, 2.5],
        ['2010',  3.5, 1.7],
        ['2011',  3.9, 2.4],
        ['2012',  4.2, 2.2], 
        ['2013',  3.4, 1.9],
        ['2014',  4.1, 2.1],
        ['2015',  3.9, 2.0],
        ['2016',  3.9, 2.3],
        ['2017',  3.3, 1.8],
        ['2018',  4.2, 2.2],
        ['2019',  3.5, 1.9]
    ]);

    if (darkm1 === "darkmode"){    
        var options = {       
            title: 'Taxa de Mortalidade Perinatal e Neonatal após o ano 2000',
            curveType: 'function',
            backgroundColor: {fill:'transparent'},
            legend: { 
                position: 'bottom',
                textStyle: { color: 'white' }
            },
            titleTextStyle: { color: '#FFF' },
            hAxis: { format: 'percent' }, 
            titleTextStyle: { color: '#FFF' },
            hAxis: {
                textStyle: {color: "#FFFFFF"},
                gridlines: {color: "#FFFFFF"}},
            vAxis: {
                textStyle: {color: "#FFFFFF"},
                gridlines: {color: "#FFFFFF"}},
            is3D: true,
            chartArea: {
                backgroundColor: 'transparent',
                width: '90%', height: "70%"
            },
            percentEnabled:	true, 
            shadowEnabled: true,	
            shadowColor: 'white',
            shadowOffset: 2,
        };
    }else{   
        var options = {        
            title: 'Taxa de Mortalidade Perinatal e Neonatal após o ano 2000',
            curveType: 'function',
            legend: { position: 'bottom' },
            hAxis: { 
            format: 'percent' }, 
            backgroundColor: {fill:'#fff'}, 
            is3D: true,
            chartArea: {
                backgroundColor: '#fff',
                width: '90%', height: "70%"
            },
            percentEnabled:	true, 
            shadowEnabled: true,	
            shadowColor: 'white',
            shadowOffset: 2
        };
    } 

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart1'));

    chart.draw(data, options);
}

window.addEventListener('resize', function(event){
    location.reload();
});