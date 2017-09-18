+++
title = "Interactive Dot Plot"
+++
<div>
<p>You can use <strong>single</strong> comma-, tab-, or space-separated values as input. Be sure to include a header in your data, otherwise you will lose the first raw. You can have unequal amount of values for different rows.</p>

<span class="csv-toggle"><em><mark>+</mark> Sample data for dot plot</em></span>
<span class="csv-example" style="width: 100%">
<pre>
sample,val1,val2,val3,val4,val5
Sample1,68.4116,63.4477
Sample2,83.8857,null,35.98
Sample3,36.3316,53.7919
Sample4,127.9545,139.091,112
Sample5,46.3158,62.5731
Sample6,28.11099,59.6798,45,66,39
Sample7,22.7083,36.0417
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
<h2>Make an Interactive Dot Plot</h2>

<form>
<p>1. Set details for your chart (all optional):<br>
<input type="text" name="mtitle">&nbsp;&nbsp;<strong>Chart Title</strong> (default: "Dot Plot"):<br> 
<input type="text" name="yaxis">&nbsp;&nbsp;<strong>Name of y-axis</strong> (default: "Value")<br> 
<input type="text" name="pcolor">&nbsp;&nbsp;<strong>Point color</strong> (default: color by point)<br> 
<strong>Show data labels?</strong> (y values) <input type="checkbox" id="select-datalebels" style="height: 1.2em;">
</p>
<p>2. Please paste your data (with header) below:<br>
<textarea rows="10" cols="60" name="usrcsv"></textarea><br>
</p></form>
<button id="makeChart">Make Chart</button>
<br>
<div id="container" style="width: 90%; margin: 0 auto"></div>
<script src="/js/dotscatter.js"></script>
</div>
