$("#exportHtml").click(function() {
  if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
  } else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	var divid = Math.random().toString(36).substr(2, 6);
	var preid = Math.random().toString(36).substr(2, 5);
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Pie Chart'
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=preurl]').val() == "") {
	var preurl = 'https://scholar.google.com/scholar?hl=en&q='
	} else {
	var preurl = $('input[name=preurl]').val();
	};
    if ($("#select-3d").is(":checked")) {
	var sel3d = true;
       } else {
	var sel3d = false;
       };
	var newCode = '<pre id="'+ preid + '" style="display:none;">\n' + usrcsv + '\n' + '</pre>\n' + '<div id="' + divid + '"></div>\n' + '<script>\n' +'$(function(){var t=$("#'+ preid + '").html().replace(/[ \t]+/g,",");Highcharts.chart("' + divid + '",{chart:{type:"pie",style:{fontFamily:"Arial"},options3d:{enabled:' + sel3d + ',alpha:45,beta:0}},data:{csv:t},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",depth:45,dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.y:.2f}"},point:{events:{click:function(){var l="' + preurl + '"+this.options.name;window.open(l)}}}}},tooltip:{pointFormat:"<b>{point.percentage:.1f}%</b>"},title:{text:"' + mtitle + '"},legend:{enabled:!1},credits:{enabled:!1}})});' + '</script>';
	alert(newCode);
  };
});
