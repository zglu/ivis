$("#exportHtml").click(function() {
  if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
  } else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	var divid = Math.random().toString(36).substr(2, 6);
	var preid = Math.random().toString(36).substr(2, 5);
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Dot Plot'
	} else {
	var mtitle = $('input[name=mtitle]').val();
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
    if ($('input[name=pcolor]').val() == "") {
	var pcolor = '';
	var cByPoint = true;
	} else {
	var pcolor = $('input[name=pcolor]').val();
	var cByPoint = false;
	};
	var newCode = '<pre id="'+ preid + '" style="display:none;">\n' + usrcsv + '\n' + '</pre>\n' + '<div id="' + divid + '"></div>\n' + '<script>\n' +'$(function(){var t=$("#'+ preid + '").html().replace(/[ \t]+/g,",");Highcharts.chart("' + divid + '",{chart:{type:"scatter",zoomType:"xy",style:{fontFamily:"Arial"}},yAxis:{title:{text:"' + ytitle + '"},labels:{format:"{value}"}},data:{csv:t,switchRowsAndColumns:!1},plotOptions:{scatter:{dataLabels:{enabled:' + showLabels +',format:"{point.y:.2f}"},marker:{fillColor:"' + pcolor + '",radius:3,symbol:"circle"},cursor:"pointer",point:{events:{click:function(){var l="https://scholar.google.com/scholar?hl=en&q="+this.options.name;window.open(l)}}},turboThreshold:0}},title:{text:"' + mtitle + '"},legend:{enabled:!1},credits:{enabled:!1},series:[{colorByPoint:' + cByPoint + '}],tooltip:{borderColor:"#666",formatter:function(){return this.series.name+"<br/>' + ytitle + ': "+Highcharts.numberFormat(this.y,2)}}})});' + '</script>';
	alert(newCode);
  };
});
