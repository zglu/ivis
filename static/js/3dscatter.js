$(function () {
  $('#makeChart').click(function(){
    if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
	} else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	};
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = '3D Scatter';
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=pcolor]').val() == "") {
	var pcolor = '#333'
	} else {
	var pcolor = $('input[name=pcolor]').val();
	};
    if ($('input[name=xaxis]').val() == "") {
	var xtitle = 'X'
	} else {
	var xtitle = $('input[name=xaxis]').val();
	};
    if ($('input[name=yaxis]').val() == "") {
	var ytitle = 'Y'
	} else {
	var ytitle = $('input[name=yaxis]').val();
	};
    if ($('input[name=zaxis]').val() == "") {
	var ztitle = 'Z'
	} else {
	var ztitle = $('input[name=zaxis]').val();
	};
    if ($('input[name=preurl]').val() == "") {
	var preurl = 'https://scholar.google.com/scholar?hl=en&q='
	} else {
	var preurl = $('input[name=preurl]').val();
	};
    if ($("#select-datalebels").is(":checked")) {
	var showLabels = true;
       } else {
	var showLabels = false;
       };
    Highcharts.chart('container', {
     chart: {
         type: 'scatter',
	 zoomType: 'xyz',
	options3d:{
	  enabled: true,
	  alpha: 10,
	  beta: 30,
	  depth: 250,
	  viewDistance: 5,
	  fitToPlot: false
	}
       },
     xAxis: {
	    title: {
	        text: xtitle
	},
       },
    yAxis:{
	    title: {
	    text: ytitle
	},
        labels: {
            format: '{value}'
        },
       },
    zAxis: {
	title: {
	  text: ztitle 
	}
    },
       data: {
         csv: usrcsv,
	 seriesMapping: [{x: 1, y: 2, z: 3, name: 0}]
       },
       plotOptions: {
	 scatter: {
	    dataLabels: {
		enabled: showLabels,
		format: '{point.name}'
	    },
	     marker: {
		fillColor: pcolor,
		radius: 3,
		symbol: 'circle'
	     },
	     cursor: 'pointer',
	     point: {
	        events: {
	            click: function () {
			var goURL = preurl + this.options.name;
	                window.open(goURL);
	            }
	        }
	     },
	     turboThreshold: 0
	 }
       },
    title: {
         text: mtitle
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
            xtitle + ': ' + Highcharts.numberFormat(this.x,2) + '<br>' +
            ytitle + ': ' + Highcharts.numberFormat(this.y,2) + '<br>' +
	    ztitle + ': ' + Highcharts.numberFormat(this.z,2);
         }
    }
    });
  });
});
