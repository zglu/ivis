+++
title = "Interactive Line Chart"
+++
<div>
<p>You can use <strong>single</strong> comma-, tab-, or space-separated values as input. Be sure to include a header in your data, otherwise the first row will not be plotted.</p>

<span class="csv-toggle"><em><mark>+</mark> Sample data for line chart</em></span>
<span class="csv-example" style="width: 100%">
<pre>
gene_ID bM sM bT sT bF sF bO sO
Smp_000020 34.86 27.66 36.66 38.67 44.02 27.64 49.88 58.08
Smp_000030 246.13 233.80 173.86 190.92 275.60 214.61 304.78 241.16
Smp_000040 197.80 206.38 154.58 166.17 207.27 196.46 115.56 116.15
</pre></span>
<script>
function main() {
  $('.csv-example').hide();
  $('.csv-toggle').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle(400);
  });
}
$(document).ready(main);
</script>

<hr style="border: 1px dashed #008800">
<h2>Make an Interactive (Multi-Series) Line Chart</h2>

<form>
<p>1. Set details for your chart (all optional):<br>
<input type="text" name="mtitle">&nbsp;&nbsp;<strong>Chart Title</strong> (default: "Line Chart"):<br> 
<input type="text" name="xaxis">&nbsp;&nbsp;<strong>Name of x-axis</strong> (default: "")<br>
<input type="text" name="yaxis">&nbsp;&nbsp;<strong>Name of y-axis</strong> (default: "Value")<br> 
<input type="text" name="preurl"placeholder="e.g., https://google.com/" >&nbsp;&nbsp;<strong>Point link prefix</strong> (default to <a href="https://scholar.google.com">Google Scholar</a>)<br>
<strong>Show data labels?</strong> (y values) <input type="checkbox" id="select-datalebels" style="height: 1.2em;">&nbsp;&nbsp;&nbsp;&nbsp;<strong>Switch Rows and Columns?</strong> <input type="checkbox" id="switchrc" style="height: 1.2em;">
</p>
<p>2. Please paste your data (with header) below:<br>
<textarea rows="10" cols="60" name="usrcsv"></textarea><br>
</p>
</form>
<button id="makeChart">Make Chart</button>
<br>

<div id="container" style="width: 90%; margin: 0 auto"></div>
<script>
$(function () {
  $('#makeChart').click(function(){
    if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
	} else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	};
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Line Chart'
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=xaxis]').val() == "") {
	var xtitle = ''
	} else {
	var xtitle = $('input[name=xaxis]').val();
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
    if ($("#switchrc").is(":checked")) {
	var rcSwitch = true;
       } else {
	var rcSwitch = false;
       };
    if ($('input[name=preurl]').val() == "") {
	var preurl = 'https://scholar.google.com/scholar?hl=en&q='
	} else {
	var preurl = $('input[name=preurl]').val();
	};
    Highcharts.chart('container', {
     chart: {
         type: 'spline',
         zoomType: 'xy',
	     style: {
	        fontFamily: 'Arial'
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
       data: {
         csv: usrcsv,
	 switchRowsAndColumns: rcSwitch
       },
       plotOptions: {
	 spline: {
	    dataLabels: {
		enabled: showLabels,
		format: '{point.y:.2f}'
	    },
	     cursor: 'pointer',
	     point: {
	        events: {
	            click: function () {
			var goURL = preurl + this.series.name;
	                window.open(goURL);
	            }
	        }
	     },
	 }
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
    tooltip: {
         formatter: function () {
            return this.series.name + '<br/>' +
            ytitle + ': ' + Highcharts.numberFormat(this.y,2);
         }
    }
    });
  });
});
</script>

</div>
