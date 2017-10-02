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
<input type="text" name="pcolor">&nbsp;&nbsp;<strong>Point color</strong> (default: color by point)<br> 
<input type="text" name="preurl" placeholder="e.g., https://google.com/">&nbsp;&nbsp;<strong>Point link prefix</strong> (default to <a href="https://scholar.google.com">Google Scholar</a>)<br>
<strong>Show data labels?</strong> (point names) <input type="checkbox" id="select-datalebels" style="height: 1.2em;">
</p>
<p>2. Please paste your data below:<br>
<textarea rows="10" cols="60" name="usrcsv"></textarea><br>
</p>
</form>
<button id="makeChart">Make Chart</button>
<button id="exportHtml">Export HTML</button>
<br>
<div id="container" style="width: 90%; margin: 0 auto"></div>
<script src="/js/3dscatter.js"></script>
<script src='/js/export/exportXYZ.js'></script>
</div>
