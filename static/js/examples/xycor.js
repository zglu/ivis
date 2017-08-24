$(function () {
  $.get('/data/correlation.csv', function(data){
    Highcharts.chart('correlation', {
     chart: {
         type: 'scatter',
         zoomType: 'xy',
       },
     xAxis: {
	    title: {
	        text: "Replicate 1"
	},
       },
    yAxis:{
	    title: {
	    text: "Replicate 2"
	},
       },
       data: {
         csv: data,
         seriesMapping: [{x: 1, y: 2, name: 0}]
       },
       plotOptions: {
	 scatter: {
	     marker: {
		radius: 3,
		symbol: 'circle',
		fillColor: '#ff7373'
	     },
	     cursor: 'pointer',
	     point: {
	        events: {
	            click: function () {
	                var goURL = 'http://www.genedb.org/gene/' + this.options.name;
			window.open(goURL);
	            }
	        }
	     },
	     turboThreshold: 0
	 }
       },
    title: {
         text: 'Correlation between biological replicates'
    },
    subtitle: {
	    text: "2000 points (Source: Lu et al (2016) Sci Rep)"
	},
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
    },
    tooltip: {
         formatter: function () {
            return this.point.name + '<br/>' +
            'Replicate1: ' + Highcharts.numberFormat(this.x,2) + '<br>' +
            'Replicate2: ' + Highcharts.numberFormat(this.y,2);
         }
    }
    });
  });
});

