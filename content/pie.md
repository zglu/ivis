+++
title = "Interactive Pie Chart"
+++
<div>
<script src="https://code.highcharts.com/highcharts-3d.js"></script>
<p>You can use <strong>single</strong> comma-, tab-, or space-separated values as input. Be sure to include a header in your data. If you have percentage values, be sure to convert them into float numbers first. The chart will calculate and display the proportion (in %) of each part.</p>
<span class="csv-toggle"><em><mark>+</mark> Sample data for pie plot</em></span>
<span class="csv-example" style="width: 100%">
<pre>
sample,value
Sample1,68.4116
Sample2,83.8857
Sample3,36.3316
Sample4,127.9545
Sample5,46.3158
Sample6,28.11099
Sample7,22.7083
Sample8,11.8136
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
<h2>Make an Interactive Pie Chart</h2>

<form>
<p>1. Set details for your chart (all optional):<br>
<input type="text" name="mtitle">&nbsp;&nbsp;<strong>Chart Title</strong> (default: "Pie Chart"):<br> 
<input type="text" name="preurl" placeholder="e.g., https://google.com/">&nbsp;&nbsp;<strong>Point link prefix</strong> (default to <a href="https://scholar.google.com">Google Scholar</a>)<br>
<strong>Chart in 3D?</strong> <input type="checkbox" id="select-3d" style="height: 1.2em;">
</p>
<p>2. Please paste your data (with header) below:<br>
<textarea rows="10" cols="60" name="usrcsv"></textarea><br>
<p>
</form>
<button id="makeChart">Make Chart</button>
<br>
<div id="container" style="width: 90%; margin: 0 auto"></div>
<script src="/js/pie.js"></script>
</div>
