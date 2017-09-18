$(function () {
  $('#makeChart').click(function(){
    if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
	} else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	};
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Dot Plot'
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=yaxis]').val() == "") {
	var ytitle = 'Value'
	} else {
	var ytitle = $('input[name=yaxis]').val();
	};
    if ($("#select-datalebels").is(":checked")) {
	var showLabels = true;
       } else {
	var showLabels = false;
       };
    if ($('input[name=pcolor]').val() == "") {
	var pcolor = '';
	var cByPoint = true;
	} else {
	var pcolor = $('input[name=pcolor]').val();
	var cByPoint = false;
	};

    Highcharts.chart('container', {
     chart: {
         type: 'scatter',
         zoomType: 'xy',
	     style: {
	        fontFamily: 'Arial'
	    }
       },
    yAxis:{
	    title: {
	    text: ytitle
	},
        labels: {
            format: '{value}'
        },
       },
       data: {
         csv: usrcsv,
       },
       plotOptions: {
	 scatter: {
	    dataLabels: {
		enabled: showLabels,
		format: '{point.y:.2f}'
	    },
	     marker:{
		symbol: 'circle',
		radius: 3,
		fillColor: pcolor
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
    series: [{
	colorByPoint: cByPoint,
    }],
    tooltip: {
	 borderColor: pcolor,
         formatter: function () {
            return this.series.name + '<br/>' +
            Highcharts.numberFormat(this.y,2);
         }
    }
    });
  });
});
