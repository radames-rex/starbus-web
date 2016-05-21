'use strict';

(function () {

	var ChartLineCtrl = function($rootScope, $scope, $timeout, ChartLineFactory, chartData, moment){
    console.log("oi");
    $scope.options = {
        chart: {
            type: 'multiChart',
            height: 450,
            margin : {
                top: 30,
                right: 60,
                bottom: 50,
                left: 70
            },
            color: d3.scale.category10().range(),
            //useInteractiveGuideline: true,
            duration: 500,
            xAxis: {
                tickFormat: function(d){
                    return d3.format(',f')(d);
                }
            },
            yAxis1: {
                tickFormat: function(d){
                    return d3.format(',.1f')(d);
                }
            },
            yAxis2: {
                tickFormat: function(d){
                    return d3.format(',.1f')(d);
                }
            }
        }
    };


    $scope.data = generateData();

    function generateData(){
        var testdata = stream_layers(7,10+Math.random()*100,.1).map(function(data, i) {
            return {
                key: 'Stream' + i,
                values: data.map(function(a){a.y = a.y * (i <= 1 ? -1 : 1); return a})
            };
        });

        testdata[0].type = "area"
        testdata[0].yAxis = 1
        testdata[1].type = "area"
        testdata[1].yAxis = 1
        testdata[2].type = "line"
        testdata[2].yAxis = 1
        testdata[3].type = "line"
        testdata[3].yAxis = 2
        testdata[4].type = "bar"
        testdata[4].yAxis = 2
        testdata[5].type = "bar"
        testdata[5].yAxis = 2
        testdata[6].type = "bar"
        testdata[6].yAxis = 2

        return testdata;
    }
  }

	ChartLineCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'ChartLineFactory', 'chartData', 'moment'];

	angular
	  .module('starBusWeb')
	  .controller('ChartLineCtrl', ChartLineCtrl);

})();
