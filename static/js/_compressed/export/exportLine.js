$("#exportHtml").click(function(){if(""==$("textarea[name=usrcsv]").val())alert("You need to enter the data!");else{var e=$("textarea[name=usrcsv]").val().replace(/[ \t]+/g,","),t=Math.random().toString(36).substr(2,6),a=Math.random().toString(36).substr(2,5);if(""==$("input[name=mtitle]").val())i="Line Chart";else var i=$("input[name=mtitle]").val();if(""==$("input[name=xaxis]").val())l="";else var l=$("input[name=xaxis]").val();if(""==$("input[name=yaxis]").val())n="Value";else var n=$("input[name=yaxis]").val();if($("#select-datalebels").is(":checked"))r=!0;else var r=!1;if($("#switchrc").is(":checked"))s=!0;else var s=!1;if($("#selSpline").is(":checked"))o="spline";else var o="line";if(""==$("input[name=preurl]").val())c="https://scholar.google.com/scholar?hl=en&q=";else var c=$("input[name=preurl]").val();var p='<pre id="'+a+'" style="display:none;">\n'+e+'\n</pre>\n<div id="'+t+'"></div>\n<script>\n$(function(){var t=$("#'+a+'").html().replace(/[ \t]+/g,",");Highcharts.chart("'+t+'",{chart:{type:"'+o+'",zoomType:"xy",style:{fontFamily:"Arial"}},xAxis:{title:{text:"'+l+'"}},yAxis:{title:{text:"'+n+'"},labels:{format:"{value}"}},data:{csv:t,switchRowsAndColumns:'+s+'},plotOptions:{spline:{cursor:"pointer",point:{events:{click:function(){var l="'+c+'"+this.series.name;window.open(l)}}}},series:{dataLabels:{enabled:'+r+',format:"{point.y:.2f}"}}},title:{text:"'+i+'"},legend:{enabled:!0},credits:{enabled:!1},tooltip:{formatter:function(){return this.series.name+"<br/>'+n+': "+Highcharts.numberFormat(this.y,2)}}})});<\/script>';alert(p)}});
