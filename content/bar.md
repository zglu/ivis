+++
title = "Interactive Bar / Column Chart"
+++
<div>
<p>You can use <strong>single</strong> comma-, tab-, or space-separated values as input. Be sure to include a header in your data.</p>

<span class="csv-toggle"><em><mark>+</mark> Sample data for bar/column chart</em></span>
<span class="csv-example" style="width: 100%">
<pre>
Region,1800,1900,1999,2050
World,978,1650,6008,9725
Asia,635,947,3700,5267
Africa,107,133,783,2478
Europe,203,408,675,734
Latin,16,38,167,603
North,2,26,172,351
Oceania,2,6,30,57
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
<h2>Make an Interactive (Grouped) Bar/Column Chart</h2>

<form>
<p>1. Set details for your chart (all optional):<br>
<input type="text" name="mtitle">&nbsp;&nbsp;<strong>Chart Title</strong> (default: "Bar/Column Chart"):<br> 
<input type="text" name="yaxis">&nbsp;&nbsp;<strong>Name of y-axis</strong> (default: "Value")<br> 
<strong>Switch Rows and Columns?</strong> <input type="checkbox" id="switchrc" style="height: 1.2em;">&nbsp;&nbsp;<strong>Stacked?</strong> <input type="checkbox" id="stackcol" style="height: 1.2em;">
</p>
<p>2. Please paste your data (with header) below:<br>
<textarea rows="10" cols="60" name="usrcsv"></textarea>
</p>
<p>3. Select a chart type
<select id="bar-col">
    <option value="bar">Bar</option>
    <option value="column" selected="selected">Column</option>
</select></p>
</form>
<p><button id="makeChart">Make Chart</button>
<button id="exportHtml">Export HTML</button></p>
<br>
<div id="container" style="width: 90%; margin: 0 auto"></div>
<script src="/js/barcolumn.js"></script>
<script src='/js/export/exportBar.js'></script>
</div>
