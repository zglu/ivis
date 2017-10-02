$("#exportHtml").click(function() {
  if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
  } else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	var divid = Math.random().toString(36).substr(2, 6);
	var preid = Math.random().toString(36).substr(2, 5);
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = 'Bar/Column Chart'
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=yaxis]').val() == "") {
	var ytitle = 'Value'
	} else {
	var ytitle = $('input[name=yaxis]').val();
	};
    if ($("#switchrc").is(":checked")) {
	var rcSwitch = true;
       } else {
	var rcSwitch = false;
       };
   	var ctype = $('#bar-col').val();
    if ($("#stackcol").is(":checked")) {
	var colStack = true;
       } else {
	var colStack = false;
       };
	var newCode = '<pre id="'+ preid + '" style="display:none;">\n' + usrcsv + '\n' + '</pre>\n' + '<div id="' + divid + '"></div>\n' + '<script>\n' +'$(function(){var t=$("#'+ preid + '").html().replace(/[ \t]+/g,",");Highcharts.chart("' + divid + '",{chart:{type:"' + ctype + '",zoomType:"xy",style:{fontFamily:"Arial"}},yAxis:{title:{text:"' + ytitle + '"},labels:{format:"{value}"}},data:{csv:t,switchRowsAndColumns:' + rcSwitch + '},title:{text:"' + mtitle + '"},legend:{enabled:!0},credits:{enabled:!1},plotOptions:{column:{stacking:' + colStack + '},bar:{stacking:' + colStack + '}},tooltip:{formatter:function(){return this.series.name+"<br/><strong>"+Highcharts.numberFormat(this.y,2)+"</strong>"}}})});' + '</script>';
	alert(newCode);
  };
});
