$("#exportHtml").click(function() {
  if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
  } else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	var divid = Math.random().toString(36).substr(2, 6);
	var preid = Math.random().toString(36).substr(2, 5);
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Line Chart'
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=xaxis]').val() == "") {
	var xtitle = ''
	} else {
	var xtitle = $('input[name=xaxis]').val();
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
    if ($("#switchrc").is(":checked")) {
	var rcSwitch = true;
       } else {
	var rcSwitch = false;
       };
    if ($("#selSpline").is(":checked")) {
	var lineType = 'spline';
       } else {
	var lineType = 'line';
       };
    if ($('input[name=preurl]').val() == "") {
	var preurl = 'https://scholar.google.com/scholar?hl=en&q='
	} else {
	var preurl = $('input[name=preurl]').val();
	};
	var newCode = '<pre id="'+ preid + '" style="display:none;">\n' + usrcsv + '\n' + '</pre>\n' + '<div id="' + divid + '"></div>\n' + '<script>\n' +'$(function(){var t=$("#'+ preid + '").html().replace(/[ \t]+/g,",");Highcharts.chart("' + divid + '",{chart:{type:"' + lineType + '",zoomType:"xy",style:{fontFamily:"Arial"}},xAxis:{title:{text:"' + xtitle + '"}},yAxis:{title:{text:"' + ytitle + '"},labels:{format:"{value}"}},data:{csv:t,switchRowsAndColumns:' + rcSwitch + '},plotOptions:{line:{cursor:"pointer",point:{events:{click:function(){var l="' + preurl + '"+this.series.name;window.open(l)}}}},spline:{cursor:"pointer",point:{events:{click:function(){var l="' + preurl + '"+this.series.name;window.open(l)}}}},series:{dataLabels:{enabled:' + showLabels + ',format:"{point.y:.2f}"}}},title:{text:"' + mtitle + '"},legend:{enabled:!0},credits:{enabled:!1},tooltip:{formatter:function(){return this.series.name+"<br/>' + ytitle + ': "+Highcharts.numberFormat(this.y,2)}}})});' + '</script>';
	alert(newCode);
  };
});
