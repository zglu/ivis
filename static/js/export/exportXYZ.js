$("#exportHtml").click(function() {
  if ($('textarea[name=usrcsv]').val() == "") {
	alert("You need to enter the data!")
  } else {
	var usrinput = $('textarea[name=usrcsv]').val();
	var usrcsv = usrinput.replace(/[ \t]+/g, ",");
	var divid = Math.random().toString(36).substr(2, 6);
	var preid = Math.random().toString(36).substr(2, 5);
    if ($('input[name=mtitle]').val() == "") {
	var mtitle = '3D Scatter';
	} else {
	var mtitle = $('input[name=mtitle]').val();
	};
    if ($('input[name=pcolor]').val() == "") {
	var pcolor = '';
	var cByPoint = true;
	} else {
	var pcolor = $('input[name=pcolor]').val();
	var cByPoint = false;
	};
    if ($('input[name=xaxis]').val() == "") {
	var xtitle = 'X'
	} else {
	var xtitle = $('input[name=xaxis]').val();
	};
    if ($('input[name=yaxis]').val() == "") {
	var ytitle = 'Y'
	} else {
	var ytitle = $('input[name=yaxis]').val();
	};
    if ($('input[name=zaxis]').val() == "") {
	var ztitle = 'Z'
	} else {
	var ztitle = $('input[name=zaxis]').val();
	};
    if ($('input[name=preurl]').val() == "") {
	var preurl = 'https://scholar.google.com/scholar?hl=en&q='
	} else {
	var preurl = $('input[name=preurl]').val();
	};
    if ($("#select-datalebels").is(":checked")) {
	var showLabels = true;
       } else {
	var showLabels = false;
       };
	var newCode = '<pre id="' + preid + '" style="display:none;">\n' + usrcsv + '\n' + '</pre>\n' + '<div id="' + divid + '"></div>\n' + '<script>\n' +'$(function(){var t=$("#' + preid + '").html().replace(/[ \t]+/g,",");var chart=new Highcharts.chart({chart:{renderTo:"' + divid + '",type:"scatter",options3d:{enabled:!0,alpha:10,beta:30,depth:250,viewDistance:5,fitToPlot:!1}},xAxis:{title:{text:"' + xtitle + '"}},yAxis:{title:{text:"' + ytitle + '"},labels:{format:"{value}"}},zAxis:{title:{text:"' + ztitle + '"}},data:{csv:t,seriesMapping:[{x:1,y:2,z:3,name:0}]},plotOptions:{scatter:{dataLabels:{enabled:' + showLabels + ',format:"{point.name}"},marker:{radius:3,fillColor:"' + pcolor + '",symbol:"circle"},cursor:"pointer",point:{events:{click:function(){var l="' + preurl + '"+this.options.name;window.open(l)}}},turboThreshold:0}},title:{text:"' + mtitle + '"},legend:{enabled:!1},credits:{enabled:!1},series:[{colorByPoint:' + cByPoint + '}],tooltip:{formatter:function(){return this.point.name+"<br/>'+ xtitle+ ': "+Highcharts.numberFormat(this.point.x,2)+"<br>' + ytitle + ': "+Highcharts.numberFormat(this.point.y,2)+"<br>' + ztitle + ': "+Highcharts.numberFormat(this.point.z,2)}}});$(chart.container).on("mousedown.hc touchstart.hc",function(t){var e,o,a=(t=chart.pointer.normalize(t)).pageX,r=t.pageY,i=chart.options.chart.options3d.alpha,n=chart.options.chart.options3d.beta;$(document).on({"mousemove.hc touchdrag.hc":function(t){o=n+(a-t.pageX)/5,chart.options.chart.options3d.beta=o,e=i+(t.pageY-r)/5,chart.options.chart.options3d.alpha=e,chart.redraw(!1)},"mouseup touchend":function(){$(document).off(".hc")}})})});' + '</script>';
	alert(newCode);
  };
});
