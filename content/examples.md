+++
title = "Examples"
+++
<div>
<script src="https://code.highcharts.com/highcharts-3d.js"></script>
<script src="https://code.highcharts.com/modules/heatmap.js"></script>
<h2>Dot / Scatter Chart</h2>
<center><div id="chart8" style="width: 85%;"></div></center>
<script>
$(function () {
  var chart8 = new Highcharts.Chart({
    chart: {
        type: 'scatter',
        renderTo: 'chart8',
        zoomType: 'xy',
    },
    title: {
        text: 'Results in Different Experiments'
    },

    subtitle: {
        text: 'With null values'
    },

    yAxis: {
        title: {
            text: 'Values'
        }
    },

    xAxis: {
        categories: ['Exp1', 'Exp2', 'Exp3', 'Exp4', 'Exp5' ,'Exp6']
    },

    legend: {
        enabled: false,
    },

    tooltip: {
         formatter: function () {
            return this.series.name + ' in ' + this.x + ': ' + Highcharts.numberFormat(this.y,2);
         }
    },

	credits:{enabled: false},

    plotOptions: {
        scatter: {
	    dataLabels: {
		enabled: true,
		format: '{point.y:.2f}'
	    },
            marker: {enabled: true},
            linewidth: 3
        }
    },

    series: [{
        name: 'Target1',
        data: [83.85,null,112.31812,95.12,null,62.4936]
    }, {
        name: 'Target2',
        data: [65.4565236604215,65.5151,60.723,null,77.2711,48.535845127712]
    }, {
        name: 'Target3',
        data: [null,141.411501966,119.035786545859,135.492,97.1497278592115,null]
    }]
  });
});
</script>

<center><figure>
<img src="/images/gene-chr.png" width="93%">
</figure></center>

<h2>2D Scatter</h2>
<div id="volcano" style="width: 85%; margin: 0 auto"></div>
<script>
$(function () {
  $.get('/data/volcano2.csv', function(data){
    Highcharts.chart('volcano', {
     chart: {
         type: 'scatter',
         zoomType: 'xy',
       },
     xAxis: {
	    title: {
	        text: "log2FC"
	},
	plotLines: [{
	    color: 'red',
	    value: 1,
	    width: 1,
	    dashStyle: 'longdashdot'
	}],
	plotLines: [{
	    color: 'red',
	    value: -1,
	    width: 1,
	    dashStyle: 'dashdot',
	    label:{text:'2-fold'},
	    zIndex: 5
	}, {
	    color: 'red',
	    value: 1,
	    width: 1,
	    dashStyle: 'dashdot',
	    label:{text: '2-fold'},
	    zIndex: 5
	}]
       },
    yAxis:{
	    title: {
	    text: "-log10FDR"
	},
	plotLines: [{
	    color: 'red',
	    value: 2,
	    width: 1,
	    dashStyle: 'dashdot',
	    label:{text:'FDR: 0.01'},
	    zIndex: 5
	}]
       },
       data: {
         csv: data,
         seriesMapping: [{x: 1, y: 2, name: 0}]
       },
       plotOptions: {
	 scatter: {
	     marker: {
		radius: 3,
		symbol: 'circle',
		fillColor: this.x > 2 ? "red" : "grey"
	     },
	     cursor: 'pointer',
	     point: {
	        events: {
	            click: function () {
	                var goURL = 'http://www.genedb.org/gene/' + this.options.name;
			window.open(goURL);
	            }
	        }
	     },
	     turboThreshold: 0
	 }
       },
    title: {
         text: 'Differential Gene Expression'
    },
    subtitle: {
	    text: "4800 points (Source: Lu et al (2016) Sci Rep). Try clicking on the points!"
	},
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
    },
    tooltip: {
         formatter: function () {
            return 'ID: ' + this.point.name + '<br/>' +
            'log2FC: ' + Highcharts.numberFormat(this.x,2) + '<br>' +
            '-log10FDR: ' + Highcharts.numberFormat(this.y,2);
         }
    }
    });
  });
});
</script>

<div id="correlation" style="width: 85%; margin: 0 auto"></div>
<script>
$(function () {
  $.get('/data/correlation.csv', function(data){
    Highcharts.chart('correlation', {
     chart: {
         type: 'scatter',
         zoomType: 'xy',
       },
     xAxis: {
	    title: {
	        text: "Replicate 1"
	},
       },
    yAxis:{
	    title: {
	    text: "Replicate 2"
	},
       },
       data: {
         csv: data,
         seriesMapping: [{x: 1, y: 2, name: 0}]
       },
       plotOptions: {
	 scatter: {
	     marker: {
		radius: 3,
		symbol: 'circle',
		fillColor: '#ff7373'
	     },
	     cursor: 'pointer',
	     point: {
	        events: {
	            click: function () {
	                var goURL = 'http://www.genedb.org/gene/' + this.options.name;
			window.open(goURL);
	            }
	        }
	     },
	     turboThreshold: 0
	 }
       },
    title: {
         text: 'Correlation between biological replicates'
    },
    subtitle: {
	    text: "2000 points (Source: Lu et al (2016) Sci Rep)"
	},
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
    },
    tooltip: {
         formatter: function () {
            return this.point.name + '<br/>' +
            'Replicate1: ' + Highcharts.numberFormat(this.x,2) + '<br>' +
            'Replicate2: ' + Highcharts.numberFormat(this.y,2);
         }
    }
    });
  });
});
</script>

<h2>3D Scatter</h2>
<div id="3dpca" style="width: 85%; margin: 0 auto"></div>
<script>
$(function () {
  $.get('/data/pca3d.csv', function(data){
    Highcharts.chart('3dpca', {
     chart: {
         type: 'scatter',
         zoomType: 'xyz',
	options3d:{
	  enabled: true,
	  alpha: 10,
	  beta: 30,
	  depth: 250,
	  margin: 100,
	  viewDistance: 5,
	  fitToPlot: false
	}
       },
     xAxis: {
	    title: {
	        text: "PC1"
	},
       },
    yAxis:{
	    title: {
	    text: "PC2"
	},
       },
       data: {
         csv: data,
         seriesMapping: [{x: 1, y: 2, z: 3, name: 0}]
       },
       plotOptions: {
	 scatter: {
	    dataLabels: {
		enabled: true,
		format: '{point.name}'
	    },
	     marker: {
		radius: 3,
		symbol: 'circle',
	     },
	     cursor: 'pointer',
	     turboThreshold: 0
	 }
       },
    title: {
         text: '3D Princinple Component Analysis'
    },
    subtitle: {
	    text: "Fictitious data. Issue found for reading Z data."
	},
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
    },
    series: [{
	colorByPoint: true,
    }],
    tooltip: {
         formatter: function () {
            return this.point.name + '<br/>' +
            'PC1: ' + Highcharts.numberFormat(this.x,2) + '<br>' +
            'PC2: ' + Highcharts.numberFormat(this.y,2) + '<br>' +
            'PC3: ' + Highcharts.numberFormat(this.z,2);
         }
    }
    });
  });
});
</script>


<h2>Line Chart</h2>

<center><div id="chart6" style="width: 85%;"></div></center>
<script>
$(function () {
  var chart6 = new Highcharts.Chart({
    chart: {
        type: 'spline',
        renderTo: 'chart6',
        zoomType: 'xy',
    },
    title: {
        text: 'Gene Expression Throughout Life Stages'
    },

    subtitle: {
        text: 'Fictitious data'
    },

    yAxis: {
        title: {
            text: 'Expression Level'
        }
    },

    xAxis: {
        categories: ['Egg', 'Miracidium', 'Sporocyst', 'Cercaria', 'Schistosomula' ,'Adult']
    },

    legend: {
        enabled: true,
    },

    tooltip: {
         formatter: function () {
            return this.series.name + ' in ' + this.x + ': ' + Highcharts.numberFormat(this.y,2);
         }
    },

	credits:{enabled: false},

    plotOptions: {
        spline: {
            marker: {enabled: true},
            linewidth: 3
        }
    },

    series: [{
        name: 'Gene1',
        data: [483.85,0.108833389519651,0.31812,0,0.0893065,12.4936]
    }, {
        name: 'Gene2',
        data: [65.4565236604215,65.5151,60.723,193.6435,97.2711,538.535845127712]
    }, {
        name: 'Gene3',
        data: [152.686,341.411501966,219.035786545859,135.492,97.1497278592115,12.345]
    }, {
        name: 'Gene4',
        data: [5.65879,0,559.76,216.54,39.8743,0.26035]
    }]
  });
});
</script>

<h2>Bar / Column Chart</h2>
<center><div id="chart7" style="width: 85%;"></div></center>
<script>
$(function () {
  var chart6 = new Highcharts.Chart({
    chart: {
        type: 'column',
        renderTo: 'chart7',
        zoomType: 'xy',
    },
    title: {
        text: 'Gene Expression Throughout Life Stages'
    },

    subtitle: {
        text: 'Fictitious data'
    },

    yAxis: {
        title: {
            text: 'Expression Level'
        }
    },

    xAxis: {
        categories: ['Egg', 'Miracidium', 'Sporocyst', 'Cercaria', 'Schistosomula' ,'Adult']
    },

    legend: {
        enabled: true,
    },

    tooltip: {
         formatter: function () {
            return this.series.name + ' in ' + this.x + ': ' + Highcharts.numberFormat(this.y,2);
         }
    },

	credits:{enabled: false},

    plotOptions: {
        spline: {
            marker: {enabled: true},
            linewidth: 3
        }
    },

    series: [{
        name: 'Gene1',
	dataLabels: {
	    enabled: true,
	    format: '{point.y:.2f}'
	},
        data: [483.85,0.108833389519651,0.31812,0,0.0893065,12.4936]
    }, {
        name: 'Gene2',
	dataLabels: {
	    enabled: true,
	    format: '{point.y:.2f}'
	},
        data: [65.4565236604215,65.5151,60.723,193.6435,97.2711,538.535845127712]
    }, {
        name: 'Gene3',
	dataLabels: {
	    enabled: true,
	    format: '{point.y:.2f}'
	},
        data: [152.686,341.411501966,219.035786545859,135.492,97.1497278592115,12.345]
    }, {
        name: 'Gene4',
	dataLabels: {
	    enabled: true,
	    format: '{point.y:.2f}'
	},
        data: [5.65879,0,559.76,216.54,39.8743,0.26035]
    }]
  });
});
</script>

<h2>Pie Chart</h2>
<center><div id="chart5" style="width: 78%;"></div></center>
<script>
$(function () {
  var chart5 = new Highcharts.Chart({
    chart: {
      renderTo: 'chart5',
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      }
    },
    title: {
      text: 'Protein Domains'
    },
    subtitle: {
      text: 'Fictitious data. Try clicking on the pie!'
    },
    credits: {
      enabled: false
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor:'pointer',
	depth: 45,
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y}'
        },
	     point: {
	        events: {
	            click: function () {
	                var goURL = 'https://www.ncbi.nlm.nih.gov/cdd/?term=' + this.options.name;
			window.open(goURL);
	            }
	        }
	     },
      }
    },
    series: [{
      name:'CDD',
      colorByPoint: true,
      data:[{
        name: 'WD40',
        y: 322,
        drilldown: null
      }, {
        name: 'ANK',
        y: 158,
        drilldown: null
      }, {
        name: 'MFS',
        y: 115,
        drilldown: null
      }, {
        name: 'PDZ_signaling',
        y: 103,
        drilldown: null
      }, {
        name: 'homeodomain',
        y: 81,
        drilldown: null
      }, {
        name: 'Ig',
        y: 71,
        drilldown: null
      }, {
        name: 'Efh',
        y: 63,
        drilldown: null
      }, {
        name: 'HELICc',
        y: 54,
        drilldown: null
      }, {
        name: 'Cadherin_repeat',
        y: 55,
        drilldown: null
      }, {
        name: 'CH',
        y: 54,
        drilldown: null
      }, {
        name: 'EGF_CA',
        y: 52,
        drilldown: null
      }, {
        name: 'DEADc',
        y: 50,
        drilldown: null
      }, {
        name: 'The rest',
        y: 728,
        sliced: true,
        drilldown: 'therest'
      }]
    }],
   drilldown: {
       series: [{
         id: 'therest',
         data: [
           ['HLH',49],
           ['7tmA_FMRFamide_R-like', 46],
           ['FERM_B-lobe', 41],
           ['DnaJ', 40],
           ["RRM_SF", 26],
           ['FH', 25],
           ["LamG", 23],
           ['7tm_classA_rhodopsin-like', 23],
           ['CYCLIN', 20],
           ['PTKc', 16],
           ["SH2_Tensin_like", 16],
           ["EGF_Lam", 13],
           ["7tmA_NPYR-like", 8],
           ['SOX-TCF_HMG-box',12],
           ['Others', 69]
         ]
       }]
    }
  });
});
</script>

<h2>Heatmap</h2>
<div id="heat" style="width: 85%; margin: 0 auto"></div>
<script>
$(function () {
  $.get('/data/heatmap.csv', function(data){
    Highcharts.chart('heat', {
     chart: {
         type: 'heatmap',
	 backgroundColor: '#FFFFFF',
	 inverted: false
       },
   xAxis: {
	    title: {
	        text: "X"
	},
       },
    yAxis:{
	    title: {
	    text: "Y"
	},
       },
       data: {
         csv: data,
       },
     title: {
         text: 'Heatmap'
    },
    subtitle: {
	    text: "Data Source: http://jsfiddle.net/k7pjcy5t/1/"
	},
    legend: {
	    enabled: false
    },
    credits: {
	    enabled: false
    },
    colorAxis: {
        minColor: '#FFFFFF',
        maxColor: '#66cccc'
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'middle',
        symbolHeight: 220
    },
    exporting: {
	enabled: true
    },
    series: [{
         tooltip: {
            headerFormat: '',
            pointFormat: '({point.x}, {point.y}): <b>{point.value}</b>'
         }
    }]
    });
  });
});
</script>


</div>
