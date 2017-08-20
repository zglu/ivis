+++
title = "Interactive 2D Scatter Chart"
+++
<div>
<p>2D scatter (XY plot ) is quite useful when you want to compare paired data series. For instance you can make a Volcano or MA plot to visualise differentially expressed genes from RNAseq analysis, to visualise correlations between two samples, or to visualise sample distances via Princinple Component Analysis (PCA), or simply to make a standard curve. </p>

<p>An extra feature provided here is that you can link any data point to an external resource, for instance to link the gene in the volcano plot to databases containing information about that gene (for instance <a href="http://www.genedb.org/Homepage" target="_blank">GeneDB</a> or <a href="http://parasite.wormbase.org/index.html" target="_blank">WormBase Parasite</a>, or any other website for your gene id), which saves you a lot of typing effort.</p> 

<p>The input data should have three columns (Name, X, Y) separated by <strong>single</strong> comma, tab, or space.</p>

<span class="csv-toggle"><em><mark>+</mark> Sample data for 2D scatter plot</em></span>
<span class="csv-example" style="width: 100%">
<pre>
abbr,rnaseq,qpcr
EIF4G,8.1893866427,20.52
letem1,8.1110748739,20.54
cpeb1,7.8047932438,20.8
sox,3.3651057956,25.77
dia,7.7812636831,20.89
meg13,2.3063875263,25.62
twik,5.0690183395,23.39
vwa,3.9461749014,23.71
rad50,1.7702763544,27.57
melk,6.4454665873,21.82
hmgcs,6.3408736592,21.85
lin9,5.3906761823,23.75
psm,8.8806077568,19.76
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

<h2>Make an Interactive 2D Scatter Plot</h2>

<form>
<p>1. Set details for your chart (all optional):<br>
<input type="text" name="mtitle">&nbsp;&nbsp;<strong>Chart Title</strong> (default: "2D-Scatter"):<br> 
<input type="text" name="xaxis">&nbsp;&nbsp;<strong>Name of x-axis</strong> (default: "X")<br>
<input type="text" name="yaxis">&nbsp;&nbsp;<strong>Name of y-axis</strong> (default: "Y")<br> 
<input type="text" name="pcolor">&nbsp;&nbsp;<strong>Point color</strong> (default: "#333")<br> 
<input type="text" name="preurl" placeholder="e.g., https://google.com/">&nbsp;&nbsp;<strong>Point link prefix</strong> (default to <a href="https://scholar.google.com">Google Scholar</a>)<br>
<strong>Show data labels?</strong> (point names) <input type="checkbox" id="select-datalebels" style="height: 1.2em;"><br><br>
For volcano or MA plot: if you wish to add lines on the X and Y axis, specify the line color and positions below (you can add one or two line for each axis, by default no lines):<br>
<em><strong>Color</strong></em>: <input type="text" name="lineColor" style="width: 10%">; <em><strong>X</strong></em>: <input type="text" name="X1" style="width: 5%"> - <input type="text" name="X2" style="width: 5%">; <em><strong>Y</em></strong>: <input type="text" name="Y1" style="width: 5%"> - <input type="text" name="Y2" style="width: 5%"><br>
<em>Example: Color: blue or #ff0000; X: 1 & -1; Y: 0.01 & -0.01</em>
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
</script>
</div>
