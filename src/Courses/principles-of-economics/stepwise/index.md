---
tags: principles-of-economics
thumbnail: /assets/img/StepWiseSupplyDemandGraph.png
title: Stepwise Supply and Demand
description: Graph customizable stepwise supply and demand curves
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();

myCalculator.setGraphs({'engine':'desmos','idDiv':'StepWiseSupplyDemandGraph','height':'650px','width':'100','left':'-25','right':'150','bottom':'-15','top':'100','copy':true,'showGrid':false,'expressions':false,'keypad':false,'zoomFit':true,'settingsMenu':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'Q(units)       ','yAxisLabel':'P($)'});

//try the limit
myCalculator.addDynamicLabel({ 'idDiv': 'DemandBucket', 'title': 'Demand', 'func': 'f', 'latex': "(20,30)", 'color': 'rgb(225,29,72)','direction':'down', 'showLabel': true, 'label': 'demand', 'pointStyle': Desmos.Styles.OPEN, 'limit': '6', 'listGraphs': [0] });
myCalculator.addDynamicLabel({ 'idDiv': 'SupplyBucket', 'title': 'Supply', 'func': 'g', 'latex': "(10,40)", 'color': 'rgb(79,70,229)', 'showLabel': true, 'label': 'supply', 'pointStyle': Desmos.Styles.OPEN, 'limit': '6', 'listGraphs': [0] });

myCalculator.line();


// you will start the desmos stepwise algorithm
myCalculator.addExpression({ 'idDiv': 'N_D', 'func': 'n_{d}', 'latex': "n_{d}=\\operatorname{length}\\left(d\\right)",'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'N_S', 'func': 'n_{s}', 'latex': "n_{s}=\\operatorname{length}\\left(s\\right)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'uniqueDemand', 'func': 'd', 'latex': "d=\\operatorname{unique}\\left(f\\right)",'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'uniqueSupply', 'func': 's', 'latex': "s=\\operatorname{unique}\\left(g\\right)", 'listGraphs': [0] });

//Polygon
myCalculator.addExpression({ 'idDiv': 'PolygonSupply', 'latex': "\\operatorname{polygon}\\left(L_{js}\\right)", 'color': '#318CE7', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'PolygonDemand', 'latex': "\\operatorname{polygon}\\left(L_{jd}\\right)", 'color': '#9966CC', 'listGraphs': [0] });

//Demand functions
myCalculator.addExpression({ 'idDiv': 'LengthOfD', 'func': 'L_{d}', 'latex': "L_{d}=\\left[\\left(d\\left[i\\right].x,d\\left[i\\right].y\\right)\\operatorname{for}\\ i=\\left[1...n_{d}\\right]\\right]", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOf2D', 'func': 'L_{2d}', 'latex': "L_{2d}=\\left[\\left(d\\left[i\\right].x,d\\left[i+1\\right].y\\right)\\ \\operatorname{for}\\ i=\\left[1...n_{d}-1\\right]\\right]", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOfCD', 'func': 'L_{cd}', 'latex': "L_{cd}=\\left[\\left\\{\\operatorname{mod}\\left(j,2\\right)=1:L_{d}\\left[\\operatorname{floor}\\left(\\frac{j}{2}+1\\right)\\right],L_{2d}\\left[\\frac{j}{2}\\right]\\right\\}\\ \\operatorname{for}\\ j=\\left[1...2n_{d}-1\\right]\\right]", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOfRD', 'func': 'L_{rd}', 'latex': "L_{rd}=\\operatorname{unique}\\left(\\left[\\left\\{\\operatorname{mod}\\left(k,2\\right)=1:L_{d}\\left[\\frac{j}{2}\\right],L_{2d}\\left[\\operatorname{ceil}\\left(\\frac{j}{2}\\right)-1\\right]\\right\\}\\ \\operatorname{for}\\ k=\\left[1...2n_{d}\\right],j=\\left[2n_{d}...1\\right]\\right]\\right)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOf3D', 'func': 'L_{3d}', 'latex': "L_{3d}=\\left[\\left(0,L_{d}\\left[1\\right].y\\right)\\right]", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOf4D', 'func': 'L_{4d}', 'latex': "L_{4d}=\\left[\\left(L_{d}\\left[n_{d}\\right].x,0\\right)\\right]", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOfJD', 'func': 'L_{jd}', 'latex': "L_{jd}=\\operatorname{join}\\left(L_{3d},L_{cd},L_{4d},L_{rd}\\right)", 'listGraphs': [0] });

//Supply functions
myCalculator.addExpression({ 'idDiv': 'LengthOfS', 'func': 'L_{s}', 'latex': "L_{s}=\\left[\\left(s\\left[i\\right].x,s\\left[i\\right].y\\right)\\operatorname{for}\\ i=\\left[1...n_{s}\\right]\\right]", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOf2S', 'func': 'L_{2s}', 'latex': "L_{2s}=\\left[\\left(s\\left[i+1\\right].x,s\\left[i\\right].y\\right)\\ \\operatorname{for}\\ i=\\left[1...n_{s}-1\\right]\\right]", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOfCS', 'func': 'L_{cs}', 'latex': "L_{cs}=\\left[\\left\\{\\operatorname{mod}\\left(j,2\\right)=1:L_{s}\\left[\\operatorname{floor}\\left(\\frac{j}{2}+1\\right)\\right],L_{2s}\\left[\\frac{j}{2}\\right]\\right\\}\\ \\operatorname{for}\\ j=\\left[1...2n_{s}-1\\right]\\right]", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOfRS', 'func': 'L_{rs}', 'latex': "L_{rs}=\\operatorname{unique}\\left(\\left[\\left\\{\\operatorname{mod}\\left(l,2\\right)=1:L_{s}\\left[\\frac{j}{2}\\right],L_{2s}\\left[\\operatorname{ceil}\\left(\\frac{j}{2}\\right)-1\\right]\\right\\}\\ \\operatorname{for}\\ l=\\left[1...2n_{s}\\right],j=\\left[2n_{s}...1\\right]\\right]\\right)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOf3S', 'func': 'L_{3s}', 'latex': "L_{3s}=\\operatorname{unique}\\left(\\left[\\left(L_{s}\\left[1\\right].x,0\\right)\\right]\\right)", 'constraint':"\\left\\{Q\\ge0\\right\\}", 'constraint':"\\left\\{Q\\ge0\\right\\}", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'LengthOfJS', 'func': 'L_{js}', 'latex': "L_{js}=\\operatorname{join}\\left(L_{3s},L_{cs},L_{rs}\\right)", 'listGraphs': [0] });

myCalculator.addExpression({ 'idDiv': 'y', 'func': 'y', 'latex': "y=L_{s}\\left[n_{s}\\right].y\\left\\{x>=L_{s}\\left[n_{s}\\right].x\\right\\}", 'constraint': "\\left\\{Q\\ge0\\right\\}", 'color': '#318CE7', 'listGraphs': [0] });

//-----------------------

// myCalculator.addExpression({'idDiv':'getFirstP','latex':"b=P\\left[1\\right]",'hidden':true,'listGraphs':[0]});
// myCalculator.setValue({'idDiv':'getMyFirstPrice','latex':'b','decimal':'0','listGraphs':[0]});


// Page 1: Introduction
myCalculator.setInstructions({
    'title': 'Getting Started',
    'content': 'Welcome to the Stepwise Supply and Demand Calculator.'
});

// Page 2: Using the Calculator
myCalculator.setInstructions({
    'title': 'Using the Calculator',
    'content': "Define the market by inputting the supply and demand values. The stepwise values is displayed. "
});

// Page 3: Advanced Features
myCalculator.setInstructions({
    'title': 'Advanced Features',
    'content': "Explore the supply and demand curve through clicking the switch."
    //\\exp{DPrices} %%\\sqrt{\\frac{r}{2}}%%"
});

// Page 4: Troubleshooting
myCalculator.setInstructions({
    'title': 'Troubleshooting',
    'content': 'If issues arise, confirm that your quantity and price inputs are properly entered.'
});

// Update bounds of the graph
myCalculator.setCreators({ 'title': 'Developer', 'name': 'Joy', 'school': "BC'27" });

//Change bounds to the maximum 
// myCalculator.addExpression({ 'idDiv': 'BountdTop', 'latex': "B_{t}=\\max(P)", 'listGraphs': [0] });
// myCalculator.addExpression({ 'idDiv': 'BountdRight', 'latex': 'B_{r}=\\max(Q)', 'listGraphs': [0] });
// myCalculator.setBounds({ 'top': 'B_{t}', 'right': 'B_{r}', 'tolerance': '1.3', 'mtolerance': '1.3', 'listGraphs': [0] });
</script>
