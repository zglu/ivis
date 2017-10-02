$("#exportHtml").click(function() {
  if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
  } else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	var divid = Math.random().toString(36).substr(2, 6);
	var preid = Math.random().toString(36).substr(2, 5);
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Heatmap';
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=yaxis]').val() == "") {
	var ytitle = ''
	} else {
	var ytitle = $('input[name=yaxis]').val();
	};
    if ($('input[name=mincolor]').val() == "") {
	var mincolor = '#fff'
	} else {
	var mincolor = $('input[name=mincolor]').val();
	};
    if ($('input[name=maxcolor]').val() == "") {
	var maxcolor = '#000'
	} else {
	var maxcolor = $('input[name=maxcolor]').val();
	};
    if ($("#select-datalebels").is(":checked")) {
	var showLabels = true;
       } else {
	var showLabels = false;
       };
	var newCode = '<pre id="'+ preid + '" style="display:none;">\n' + usrcsv + '\n' + '</pre>\n' + '<script src="https://code.highcharts.com/modules/heatmap.js"></script>\n' + '<div id="' + divid + '"></div>\n' + '<script>\n' +'$(function(){var t=$("#'+ preid + '").html().replace(/[ \t]+/g,",");Highcharts.chart("' + divid + '",{chart:{type:"heatmap",inverted:!1,style:{fontFamily:"Arial"}},data:{csv:t},plotOptions:{heatmap:{dataLabels:{enabled:' + showLabels + ',format:"{point.value:.2f}"},turboThreshold:0}},colorAxis:{minColor:"' + mincolor + '",maxColor:"' + maxcolor + '"},title:{text:"' + mtitle + '"},yAxis:{title:{text:"' + ytitle + '"}},legend:{enabled:!1},credits:{enabled:!1},legend:{align:"right",layout:"vertical",margin:0,verticalAlign:"middle",symbolHeight:220},exporting:{enabled:!0},series:[{tooltip:{headerFormat:"",pointFormat:"({point.x}, {point.y}): <b>{point.value}</b>"}}]})});' + '</script>';
	alert(newCode);
  };
});
