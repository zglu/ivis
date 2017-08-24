$(function () {
  $.get('/data/heatmap.csv', function(data){
    Highcharts.chart('heat', {
     chart: {
         type: 'heatmap',
	 backgroundColor: '#FFFFFF',
	 inverted: false
       },
   xAxis: {
	    title: {
	        text: "X"
	},
       },
    yAxis:{
	    title: {
	    text: "Y"
	},
       },
       data: {
         csv: data,
       },
     title: {
         text: 'Heatmap'
    },
    subtitle: {
	    text: "Data Source: http://jsfiddle.net/k7pjcy5t/1/"
	},
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
    },
    colorAxis: {
        minColor: '#FFFFFF',
        maxColor: '#66cccc'
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'middle',
        symbolHeight: 220
    },
    exporting: {
	enabled: true
    },
    series: [{
         tooltip: {
            headerFormat: '',
            pointFormat: '({point.x}, {point.y}): <b>{point.value}</b>'
         }
    }]
    });
  });
});

