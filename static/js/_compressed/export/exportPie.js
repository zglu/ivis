$("#exportHtml").click(function(){if(""==$("textarea[name=usrcsv]").val())alert("You need to enter the data!");else{var t=$("textarea[name=usrcsv]").val().replace(/[ \t]+/g,","),e=Math.random().toString(36).substr(2,6),a=Math.random().toString(36).substr(2,5);if(""==$("input[name=mtitle]").val())n="Pie Chart";else var n=$("input[name=mtitle]").val();if(""==$("input[name=preurl]").val())l="https://scholar.google.com/scholar?hl=en&q=";else var l=$("input[name=preurl]").val();if($("#select-3d").is(":checked"))i=!0;else var i=!1;var r='<pre id="'+a+'" style="display:none;">\n'+t+'\n</pre>\n<div id="'+e+'"></div>\n<script>\n$(function(){var t=$("#'+a+'").html().replace(/[ \t]+/g,",");Highcharts.chart("'+e+'",{chart:{type:"pie",style:{fontFamily:"Arial"},options3d:{enabled:'+i+',alpha:45,beta:0}},data:{csv:t},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",depth:45,dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.y:.2f}"},point:{events:{click:function(){var l="'+l+'"+this.options.name;window.open(l)}}}}},tooltip:{pointFormat:"<b>{point.percentage:.1f}%</b>"},title:{text:"'+n+'"},legend:{enabled:!1},credits:{enabled:!1}})});<\/script>';alert(r)}});
