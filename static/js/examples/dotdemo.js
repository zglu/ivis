$(function () {
  var chart8 = new Highcharts.Chart({
    chart: {
        type: 'scatter',
        renderTo: 'chart8',
        zoomType: 'xy',
    },
    title: {
        text: 'Results in Different Experiments'
    },

    subtitle: {
        text: 'With null values'
    },

    yAxis: {
        title: {
            text: 'Values'
        }
    },

    xAxis: {
        categories: ['Exp1', 'Exp2', 'Exp3', 'Exp4', 'Exp5' ,'Exp6']
    },

    legend: {
        enabled: false,
    },

    tooltip: {
         formatter: function () {
            return this.series.name + ' in ' + this.x + ': ' + Highcharts.numberFormat(this.y,2);
         }
    },

	credits:{enabled: false},

    plotOptions: {
        scatter: {
	    dataLabels: {
		enabled: true,
		format: '{point.y:.2f}'
	    },
            marker: {enabled: true},
            linewidth: 3
        }
    },

    series: [{
        name: 'Target1',
        data: [83.85,null,112.31812,95.12,null,62.4936]
    }, {
        name: 'Target2',
        data: [65.4565236604215,65.5151,60.723,null,77.2711,48.535845127712]
    }, {
        name: 'Target3',
        data: [null,141.411501966,119.035786545859,135.492,97.1497278592115,null]
    }]
  });
});

