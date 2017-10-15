$(function () {
  $.get('/data/pca3d.csv', function(data){
    Highcharts.chart('3dpca', {
     chart: {
         type: 'scatter',
         zoomType: 'xyz',
	options3d:{
	  enabled: true,
	  alpha: 10,
	  beta: 30,
	  depth: 250,
	  margin: 100,
	  viewDistance: 5,
	  fitToPlot: false
	}
       },
     xAxis: {
	    title: {
	        text: "PC1"
	},
       },
    yAxis:{
	    title: {
	    text: "PC2"
	},
       },
       data: {
         csv: data,
         seriesMapping: [{x: 1, y: 2, z: 3, name: 0}]
       },
       plotOptions: {
	 scatter: {
	     marker: {
		radius: 3,
		symbol: 'circle',
	     },
	     cursor: 'pointer',
	     turboThreshold: 0
	 },
	series:{
	    dataLabels: {
		enabled: true,
		format: '{point.name}'
	    }
	}
       },
    title: {
         text: '3D Princinple Component Analysis'
    },
    subtitle: {
	    text: "Fictitious data. Issue found for reading Z data."
	},
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
    },
    series: [{
	colorByPoint: true,
    }],
    tooltip: {
         formatter: function () {
            return this.point.name + '<br/>' +
            'PC1: ' + Highcharts.numberFormat(this.point.x,2) + '<br>' +
            'PC2: ' + Highcharts.numberFormat(this.point.y,2) + '<br>' +
            'PC3: ' + Highcharts.numberFormat(this.point.z,2);
         }
    }
    });
  });
});

