---
tags: principles-of-economics
thumbnail: /assets/img/InterventionsGraph.png
title: Supply and Demand
description: 10-16 words max here... don't repeat title words.
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();

myCalculator.setGraphs({ 'engine': 'desmos', 'idDiv': 'SupplyDemandGraph', 'height': '650px', 'width': '100', 'left': '-100', 'right': '1100', 'bottom': '-10', 'top': '600', 'copy': true, 'expressions': false, 'zoomFit': true, 'showXAxis': true, 'showYAxis': true, 'xAxisLabel': 'Quantity', 'yAxisLabel': 'Price' });

//static
myCalculator.addExpression({ 'idDiv': 'DemandFunctionStatic', 'latex': "y=-\\frac{50}{100}\\cdot x+300", 'color': '#be185d', 'hidden': false, 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'SupplyFunctionStatic', 'latex': "y=\\frac{50}{100}\\cdot x+100", 'color': '#7e22ce', 'hidden': false, 'listGraphs': [0] });

//define demand curve using sliders
myCalculator.addSliderInput({ 'idDiv': 'DemandCurveInterceptSlider', 'title': 'Shift in the Demand Curve', 'latex': 'D_{c}', 'min': '0', 'max': '500', 'step': '1', 'defaultValue': '300', 'simpleMode': true, 'legendText': ["Inward shift", " ", "Outward shift"], 'listGraphs': [0] });
myCalculator.addSliderInput({ 'idDiv': 'DemandCurveSlopeSlider', 'title': 'Slope of the Demand Curve', 'latex': 'D_{m}', 'min': '0', 'max': '1000', 'step': '0.01', 'defaultValue': '50', 'simpleMode': true, 'legendText': ["More elastic", " ", "Less elastic"], 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'DemandFunction', 'latex': "P_d(Q) = -D_{m}/100*Q + D_{c}", 'color': '#be185d', 'lineStyle': Desmos.Styles.DASHED, 'hidden': false, 'listGraphs': [0] });

myCalculator.line();
//define supply curve using sliders
myCalculator.addSliderInput({ 'idDiv': 'SupplyCurveInterceptSlider', 'title': 'Shift in the Supply Curve', 'latex': 'S_{c}', 'min': '-100', 'max': '200', 'step': '1', 'defaultValue': '100', 'simpleMode': true, 'legendText': ["Outward shift", " ", "Inward shift"], 'listGraphs': [0] });
myCalculator.addSliderInput({ 'idDiv': 'SupplyCurveSlopeSlider', 'title': 'Slope of the Supply Curve', 'latex': 'S_{m}', 'min': '0', 'max': '1000', 'step': '0.01', 'defaultValue': '50', 'simpleMode': true, 'legendText': ["More elastic", " ", "Less elastic"], 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'SupplyFunction', 'latex': "P_s(Q) = S_{m}/100*Q + S_{c}", 'color': '#7e22ce', 'lineStyle': Desmos.Styles.DASHED, 'hidden': false, 'listGraphs': [0] });

//find equilibrium quantity and price 
myCalculator.addExpression({ 'idDiv': 'EquilibriumQuantity', 'latex': "P_s(q)\\sim P_d(q)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'EquilibriumPrice', 'latex': "p = P_s(q)", 'listGraphs': [0] });

//label equilibrium quantity and price
myCalculator.addExpression({ 'idDiv': 'drawPline', 'latex': "y=p\\left\\{q>x>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'drawQline', 'latex': "x=q\\left\\{p>y>0\\right\\}", 'color': '#9c9c9c', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'EquilibriumPLabel', 'latex': "(0, p)", 'label': 'P', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation':Desmos.LabelOrientations.RIGHT, 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'EquilibriumQLabel', 'latex': "(q, 0)", 'label': 'Q', 'color': '#475569', 'pointStyle': Desmos.Styles.POINT, 'labelOrientation':Desmos.LabelOrientations.ABOVE, 'showLabel': true, 'listGraphs': [0] });

//add instructions
myCalculator.setInstructions({
    'title': 'Getting Started',
    'content': 'Welcome to the Supply and Demand interactive graph. This graph helps you visualize the impact of changes in supply and demand on equilibrium price and quantity.'
});
myCalculator.setInstructions({
    'title': 'Using the Interactive Graph',
    'content': 'Use the sliders to shift the curves laterally and/or change the elasticity of the curves. Watch how these changes affect equilibrium quantity and equilibrium price.'
});

//set creator
myCalculator.setCreators({ 'title': 'Developer', 'name': 'Kyla', 'school': "CC'24" });

//update bounds of the graph
// myCalculator.addExpression({ 'idDiv': 'BountdTop', 'latex': "B_{t}=P_d(0)", 'listGraphs': [0] });
// myCalculator.addExpression({ 'idDiv': 'BountdRight', 'latex': 'P_d(B_{r})\\sim 0', 'listGraphs': [0] });
// myCalculator.setBounds({ 'top': 'B_{t}', 'right': 'B_{r}', 'listGraphs': [0] });


</script>
