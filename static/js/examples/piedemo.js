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

