$(function () {
  $('#makeChart').click(function(){
    if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
	} else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	};
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = '2D-Scatter';
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
    if ($("#select-datalebels").is(":checked")) {
	var showLabels = true;
       } else {
	var showLabels = false;
       };
    if ($('input[name=preurl]').val() == "") {
	var preurl = 'https://scholar.google.com/scholar?hl=en&q='
	} else {
	var preurl = $('input[name=preurl]').val();
	};
    if ($('input[name=lineColor]').val() == "") {
	var lineColor = 'white'
	} else {
	var lineColor = $('input[name=lineColor]').val();
	};
    if ($('input[name=X1]').val() == "") {
	var X1 = 0
	} else {
	var X1 = $('input[name=X1]').val();
	};
    if ($('input[name=X2]').val() == "") {
	var X2 = 0
	} else {
	var X2 = $('input[name=X2]').val();
	};
    if ($('input[name=Y1]').val() == "") {
	var Y1 = 0
	} else {
	var Y1 = $('input[name=Y1]').val();
	};
    if ($('input[name=Y2]').val() == "") {
	var Y2 = 0
	} else {
	var Y2 = $('input[name=Y2]').val();
	};

    Highcharts.chart('container', {
     chart: {
         type: 'scatter',
         zoomType: 'xy',
	     style: {
	        fontFamily: 'Arial'
	    }
       },
     xAxis: {
	    title: {
	        text: xtitle
	},
	plotLines: [{
	    color: lineColor,
	    value: X1,
	    width: 1,
	    dashStyle: 'dashdot',
	    zIndex: 5
	}, {
	    color: lineColor,
	    value: X2,
	    width: 1,
	    dashStyle: 'dashdot',
	    zIndex: 5
	}]
       },
    yAxis:{
	title: {
	    text: ytitle
	},
        labels: {
            format: '{value}'
        },
	plotLines: [{
	    color: lineColor,
	    value: Y1,
	    width: 1,
	    dashStyle: 'dashdot',
	    zIndex: 5
	}, {
	    color: lineColor,
	    value: Y2,
	    width: 1,
	    dashStyle: 'dashdot',
	    zIndex: 5
	}]
       },
       data: {
         csv: usrcsv,
         seriesMapping: [{x: 1, y: 2, name: 0}]
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
            ytitle + ': ' + Highcharts.numberFormat(this.y,2);
         }
    }
    });
  });
});
