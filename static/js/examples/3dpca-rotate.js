$(function () {
  $.get('/data/pca3d.csv', function(data){
    var chart = new Highcharts.Chart({
     chart: {
         type: 'scatter',
	 renderTo: 'container',
	options3d:{
	  enabled: true,
	  alpha: 10,
	  beta: 30,
	  depth: 250,
	  margin: 100,
	  viewDistance: 5,
	  fitToPlot: false,
        frame: {
          bottom: {
            size: 1,
            color: 'rgba(0,0,0,0.02)'
          },
          back: {
            size: 1,
            color: 'rgba(0,0,0,0.04)'
          },
          side: {
            size: 1,
            color: 'rgba(0,0,0,0.06)'
          }
        }

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
    zAxis: {
	title: {
	    text: "PC3"
	},
	showFirstlabel: false
       },
    data: {
      csv: data,
      seriesMapping: [{x: 1, y: 2, z: 3, name: 0}]
    },
    plotOptions: {
	scatter: {
	   dataLabels: {
		enabled: true,
		format: '{point.name}'
	    },
	     marker: {
		radius: 3,
		symbol: 'circle',
	     },
	     cursor: 'pointer',
	     turboThreshold: 0
	 }
    },
    title: {
         text: '3D Princinple Component Analysis'
    },
    subtitle: {
	    text: "Drag your mouse to rotate. Credits to Torstein Hønsi."
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

  // Add mouse events for rotation
  $(chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
    eStart = chart.pointer.normalize(eStart);

    var posX = eStart.pageX,
      posY = eStart.pageY,
      alpha = chart.options.chart.options3d.alpha,
      beta = chart.options.chart.options3d.beta,
      newAlpha,
      newBeta,
      sensitivity = 5; // lower is more sensitive

    $(document).on({
      'mousemove.hc touchdrag.hc': function(e) {
        // Run beta
        newBeta = beta + (posX - e.pageX) / sensitivity;
        chart.options.chart.options3d.beta = newBeta;

        // Run alpha
        newAlpha = alpha + (e.pageY - posY) / sensitivity;
        chart.options.chart.options3d.alpha = newAlpha;

        chart.redraw(false);
      },
      'mouseup touchend': function() {
        $(document).off('.hc');
      }
    });
  });

 });
});

