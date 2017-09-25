$(function () {
  $('#makeChart').click(function(){
    if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
	} else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	};
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Bar/Column Chart'
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=yaxis]').val() == "") {
	var ytitle = 'Value'
	} else {
	var ytitle = $('input[name=yaxis]').val();
	};
    if ($("#switchrc").is(":checked")) {
	var rcSwitch = true;
       } else {
	var rcSwitch = false;
       };
   	var ctype = $('#bar-col').val();
    if ($("#stackcol").is(":checked")) {
	var colStack = 'normal';
       } else {
	var colStack = false;
       };
    Highcharts.chart('container', {
     chart: {
         type: ctype,
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
	 switchRowsAndColumns: rcSwitch
    },
    title: {
         text: mtitle
    },
    legend: {
	    enabled: true
    },
    credits: {
	    enabled: false
    },
    plotOptions: {
	 column: {
	     stacking: colStack
	 },
	bar: {
	    stacking: colStack
	}
    },
    tooltip: {
         formatter: function () {
            return this.series.name + '<br/>' + '<strong>' + Highcharts.numberFormat(this.y,2) + '</strong>';
         }
    }
    });
  });
});
