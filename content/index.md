+++
title = "IVIS: Interactive VISualisation of your data"
+++

<script src="/js/wordart.min.js" async defer></script>

<center><div style="width: 45%;" data-wordart-src="/data/cloud.json"></div></center>

IVIS is an open-source chart editor for interactive visualisation. It uses [jQuery](https://jquery.com) and [HighCharts](https://highcharts.com) as the backbone. It works purely on the client side, and all data will be processed locally only.

Project Homepage: https://github.com/zglu/ivis

## Make Your Own Interactive Chart

You can generate various types of intreactive charts using IVIS with your own data:

- <strong>[Dot / Scatter](/dot)</strong> plot: X as names and Y holding one or more values
- <strong>[2D Scatter (XY Plot)](/2dscatter)</strong> using X-Y paird values, such as volcano plot, MA plot, 2D PCA, correlation chart, and standard curve
- <strong>[Bar / Column](/bar)</strong> chart: single or grouped data
- <strong>[Line](/line)</strong> chart: multiple series can be plotted
- <strong>[Pie](/pie)</strong> chart: in 2D or 3D
- <strong>[Heatmap](/heatmap)</strong>: quick overview of many data points

How to interact with the chart:

- There are <strong>tooltips</strong> showing X, Y and/or series name whenever you move your mouse over the data
- You can <strong>zoom</strong> in at any area to see details, the X/Y scales will change accordingly
- Each data point can be <strong>linked</strong> to any external file or webpage, which saves you a huge amount of manual query effort 
- You can <strong>hide / show</strong> certain series
- You can <strong>print</strong> or <strong>download</strong> the chart in various formats, including PDF, PNG, JPEG and SVG at publication resolution
- You can <strong>configure</strong> the editor to fit your own needs (requires knowledge in JavaScript and HTML/CSS)   
- The chart is <strong>responsive</strong>, you can even make your chart on your mobile phone or tablet

To start with, you can use the sample data for each chart type. The chart will have the popular [ggplot2](http://ggplot2.org) style (them by [Joshua Kunst](http://jkunst.com/highcharts-themes-collection/)).

<p style="font-size: 1.2em">==> Check out the <strong><a href="/examples">examples</a></strong>.</p>

### Input data

IVIS directly takes user input data (just copy and paste into the input box). Data can be comma-, tab-, or space-separated values, and the <strong>header</strong> is required. There is also a function to swape the rows and columns for charting. 

### Point link prefix

When you visualise large dataset (e.g., RNA-seq differential expression analysis), very often you will have just IDs in the data. When there are some interesting patterns in the chart, you migh want to get more information about that ID from various databases, for instance GeneDB, WormBase, Ensembl, or GenBank. You can customise the link according to your needs. Here are some examples:

~~~~~~
http://www.genedb.org/gene/
http://parasite.wormbase.org/Schistosoma_mansoni_prjea36577/Gene/Summary?g=
http://www.ensembl.org/Multi/Search/Results?q=
https://www.ncbi.nlm.nih.gov/cdd/?term=
~~~~~~ 

## Credits

- [Highcharts](https://highcharts.com)
- [jQuery](https://jquery.com)
- [Hugo](https://gohugo.io)
- [Hugo NewsPrint theme](https://themes.gohugo.io/newsprint/)
- [GitHub](https://github.com)
- [Netlify](https://netlify.com)
- [WordArt](https://wordart.com)

## Find it useful?

<p>If you find that IVIS can faciliate your data analysis and visualisation, please cite:<br>
<span style="width:100%; word-wrap:break-word; font-size: 0.8em; font-family: Courier">Lu Z, Zhang Y (2017) Facilitated analysis of large data sets by interactive visualisation. <em>bioRxiv</em> 178616; doi: https://doi.org/10.1101/178616</span>
</p>
