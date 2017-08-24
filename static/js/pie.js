$(function () {
  $('#makeChart').click(function(){
    if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
	} else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	};
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Pie Chart'
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=preurl]').val() == "") {
	var preurl = 'https://scholar.google.com/scholar?hl=en&q='
	} else {
	var preurl = $('input[name=preurl]').val();
	};
    if ($("#select-3d").is(":checked")) {
	var sel3d = true;
       } else {
	var sel3d = false;
       };
   Highcharts.chart('container', {
     chart: {
         type: 'pie',
	 style: {
	        fontFamily: 'Arial'
	 },
         options3d: {
             enabled: sel3d,
             alpha: 45,
             beta: 0
         }
    },
    data: {
         csv: usrcsv,
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 45,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y:.2f}'
            },
	     point: {
	        events: {
	            click: function () {
			var goURL = preurl + this.options.name;
	                window.open(goURL);
	            }
	        }
	     },
        }
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
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
    });
  });
});
