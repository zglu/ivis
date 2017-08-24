$(function () {
  var chart6 = new Highcharts.Chart({
    chart: {
        type: 'column',
        renderTo: 'chart7',
        zoomType: 'xy',
    },
    title: {
        text: 'Gene Expression Throughout Life Stages'
    },

    subtitle: {
        text: 'Fictitious data'
    },

    yAxis: {
        title: {
            text: 'Expression Level'
        }
    },

    xAxis: {
        categories: ['Egg', 'Miracidium', 'Sporocyst', 'Cercaria', 'Schistosomula' ,'Adult']
    },

    legend: {
        enabled: true,
    },

    tooltip: {
         formatter: function () {
            return this.series.name + ' in ' + this.x + ': ' + Highcharts.numberFormat(this.y,2);
         }
    },

	credits:{enabled: false},

    plotOptions: {
        spline: {
            marker: {enabled: true},
            linewidth: 3
        }
    },

    series: [{
        name: 'Gene1',
	dataLabels: {
	    enabled: true,
	    format: '{point.y:.2f}'
	},
        data: [483.85,0.108833389519651,0.31812,0,0.0893065,12.4936]
    }, {
        name: 'Gene2',
	dataLabels: {
	    enabled: true,
	    format: '{point.y:.2f}'
	},
        data: [65.4565236604215,65.5151,60.723,193.6435,97.2711,538.535845127712]
    }, {
        name: 'Gene3',
	dataLabels: {
	    enabled: true,
	    format: '{point.y:.2f}'
	},
        data: [152.686,341.411501966,219.035786545859,135.492,97.1497278592115,12.345]
    }, {
        name: 'Gene4',
	dataLabels: {
	    enabled: true,
	    format: '{point.y:.2f}'
	},
        data: [5.65879,0,559.76,216.54,39.8743,0.26035]
    }]
  });
});

