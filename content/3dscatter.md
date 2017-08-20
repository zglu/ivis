+++
title = "Interactive 3D Scatter Chart"
+++
<div>
<script src="https://code.highcharts.com/highcharts-3d.js"></script>

<p>The input data should have four columns (Name, X, Y, Z) separated by <strong>single</strong> comma, tab, or space.</p>

<span class="csv-toggle"><em><mark>+</mark> Sample data for 3D scatter plot</em></span>
<span class="csv-example" style="width: 100%">
<pre>
sample,PC1,PC2,PC3
Sample1,-31.4534045435624,-160.626661959301,10.2426003304401
Sample7,-9.32440754725288,-181.058717813969,13.7886983885638
Sample5,-22.8512750816893,-168.655168798508,9.9695636614561
Sample4,59.7935318197938,-147.887643997376,30.8070320720662
Sample3,74.7006255717812,-163.3207731976,29.6578288733601
Sample6,72.9336491138579,-156.208984003811,29.7628555084715
Sample2,504.314098335396,100.851235355056,-193.872808522173
Sample8,162.493425095799,18.1563057817875,66.2931572761216
Sample9,182.240261217124,-2.99548220961154,65.7061740178395
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

<h2>Make an Interactive 3D Scatter Chart</h2>

<form>
<p>1. Set details for your chart (all optional):<br>
<input type="text" name="mtitle">&nbsp;&nbsp;<strong>Chart Title</strong> (default "3D Scatter"):<br> 
<input type="text" name="xaxis">&nbsp;&nbsp;<strong>Name of x-axis</strong> (default: "X")<br>
<input type="text" name="yaxis">&nbsp;&nbsp;<strong>Name of y-axis</strong> (default: "Y")<br> 
<input type="text" name="zaxis">&nbsp;&nbsp;<strong>Name of z-axis</strong> (default: "Z")<br> 
<input type="text" name="pcolor">&nbsp;&nbsp;<strong>Point color</strong> (default: "#333")<br> 
<input type="text" name="preurl" placeholder="e.g., https://google.com/">&nbsp;&nbsp;<strong>Point link prefix</strong> (default to <a href="https://scholar.google.com">Google Scholar</a>)<br>
<strong>Show data labels?</strong> (point names) <input type="checkbox" id="select-datalebels" style="height: 1.2em;">
</p>
<p>2. Please paste your data below:<br>
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
</script>
</div>
