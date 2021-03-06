+++
title = "Interactive Heatmap"
+++
<div>
<script src="/js/hc-heatmap.js"></script>
<p> The input for making a heatmap is a three-value array for each data point (x coordinat, y coordinate, value), separated by <strong>single</strong> comma, tab, or space.</p>
<span class="csv-toggle"><em><mark>+</mark> Sample data for heatmap</em></span>
<span class="csv-example" style="width: 100%">
<pre>
x,y,value
0,0,10
0,1,19
0,2,8
0,3,24
0,4,67
1,0,92
1,1,58
1,2,78
1,3,117
1,4,48
2,0,35
2,1,15
2,2,123
2,3,64
2,4,52
3,0,72
3,1,132
3,2,114
3,3,19
3,4,16
4,0,38
4,1,5
4,2,8
4,3,117
4,4,115
5,0,88
5,1,32
5,2,12
5,3,6
5,4,120
6,0,13
6,1,44
6,2,88
6,3,98
6,4,96
7,0,31
7,1,1
7,2,82
7,3,32
7,4,30
8,0,85
8,1,97
8,2,123
8,3,64
8,4,84
9,0,47
9,1,114
9,2,31
9,3,48
9,4,91
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

<h2>Make an Interactive Heatmap</h2>

<form>
<p>1. Set details for your chart (all optional):<br>
<input type="text" name="mtitle">&nbsp;&nbsp;<strong>Chart Title</strong> (default: "Heatmap"):<br>
<input type="text" name="yaxis">&nbsp;&nbsp;<strong>Name of y-axis</strong> (default: "")<br>
<input type="text" name="mincolor">&nbsp;&nbsp;<strong>Color for min value</strong> (should use <strong>Hex</strong> color code; default: "#fff")<br> 
<input type="text" name="maxcolor">&nbsp;&nbsp;<strong>Color for max value</strong> (should use <strong>Hex</strong> color code; default: "#000")<br> 
<strong>Show data labels?</strong> (point value) <input type="checkbox" id="select-datalebels" style="height: 1.2em;">
</p>
<p>2. Please paste your data below:<br>
<textarea rows="10" cols="60" name="usrcsv"></textarea><br>
</p>
</form>
<button id="makeChart">Make Chart</button>
<button id="exportHtml">Export HTML</button>
<br>
<div id="container" style="width: 90%; margin: 0 auto"></div>
<script src="/js/heatmap.js"></script>
<script src='/js/export/exportHeatmap.js'></script>
</div>
