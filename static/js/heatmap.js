$(function () {
  $('#makeChart').click(function(){
    if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
	} else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	};
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Heatmap';
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=yaxis]').val() == "") {
	var ytitle = ''
	} else {
	var ytitle = $('input[name=yaxis]').val();
	};
    if ($('input[name=mincolor]').val() == "") {
	var mincolor = '#fff'
	} else {
	var mincolor = $('input[name=mincolor]').val();
	};
    if ($('input[name=maxcolor]').val() == "") {
	var maxcolor = '#000'
	} else {
	var maxcolor = $('input[name=maxcolor]').val();
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
 Highcharts.chart('container', {
     chart: {
         type: 'heatmap',
	 inverted: false,
	  style: {
	     fontFamily: 'Arial'
	  }
       },
       data: {
         csv: usrcsv,
       },
       plotOptions: {
	 heatmap: {
	    dataLabels: {
		enabled: showLabels,
		format: '{point.value:.2f}'
	    },
	    turboThreshold: 0
	 }
       },
    colorAxis: {
        minColor: mincolor,
        maxColor: maxcolor
    },
    title: {
         text: mtitle
    },
    yAxis:{
	 title: {
	    text: ytitle
	}
    },
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
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
