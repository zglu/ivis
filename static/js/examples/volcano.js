$(function () {
  $.get('/data/volcano2.csv', function(data){
    Highcharts.chart('volcano', {
     chart: {
         type: 'scatter',
         zoomType: 'xy',
       },
     xAxis: {
	    title: {
	        text: "log2FC"
	},
	plotLines: [{
	    color: 'red',
	    value: 1,
	    width: 1,
	    dashStyle: 'longdashdot'
	}],
	plotLines: [{
	    color: 'red',
	    value: -1,
	    width: 1,
	    dashStyle: 'dashdot',
	    label:{text:'2-fold'},
	    zIndex: 5
	}, {
	    color: 'red',
	    value: 1,
	    width: 1,
	    dashStyle: 'dashdot',
	    label:{text: '2-fold'},
	    zIndex: 5
	}]
       },
    yAxis:{
	    title: {
	    text: "-log10FDR"
	},
	plotLines: [{
	    color: 'red',
	    value: 2,
	    width: 1,
	    dashStyle: 'dashdot',
	    label:{text:'FDR: 0.01'},
	    zIndex: 5
	}]
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
		fillColor: this.x > 2 ? "red" : "grey"
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
         text: 'Differential Gene Expression'
    },
    subtitle: {
	    text: "4800 points (Source: Lu et al (2016) Sci Rep). Try clicking on the points!"
	},
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
    },
    tooltip: {
         formatter: function () {
            return 'ID: ' + this.point.name + '<br/>' +
            'log2FC: ' + Highcharts.numberFormat(this.x,2) + '<br>' +
            '-log10FDR: ' + Highcharts.numberFormat(this.y,2);
         }
    }
    });
  });
});

