angular
  .module('starBusWeb', [
  'nvd3',
  'ngMaterial'])
  .controller('chartLineCtrl', function($scope){

      $scope.options = {
            chart: {
                type: 'lineChart',
                height: 500,
                width: 750,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                showLegend: false,
                duration: 650,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Horário'
                },
                yAxis: {
                    axisLabel: 'Média de Lotação por Ônibus',
                    tickFormat: function(d){
                        return d3.format('.0f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Gráfico: Índice de Lotação por Horário - Linha Vila Bandeirante',
                className: 'starbus__content--title'
            }

        };

        $scope.data = [{
          key: "Gráfico: Índice de Lotação - Ônibus",
          values: [
              { "x" : 7 , "y" : 12 },
              { "x" : 8 , "y" : 3 },
              { "x" : 9 , "y" : 35 },
              { "x" : 10 , "y" : 48 },
              { "x" : 11 , "y" : 12 },
              { "x" : 12 , "y" : 15 },
              { "x" : 13 , "y" : 15 },
              { "x" : 14 , "y" : 21 },
              { "x" : 15 , "y" : 12 },
              { "x" : 16 , "y" : 3 },
              { "x" : 17 , "y" : 35 },
              { "x" : 18 , "y" : 48 },
              { "x" : 19 , "y" : 12 },
              { "x" : 20 , "y" : 15 },
              { "x" : 21 , "y" : 15 },
              { "x" : 22 , "y" : 21 }
            ],
          color: '#ff7f0e',

        }];

    })
