---
tags: microeconomics
title: Hicksian Demand
description: Input utility functions and isocost lines to find Hicksian demand bundles
thumbnail: /assets/img/hicksian-demand.png
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();
myCalculator.setGraphs({ 'engine': 'desmos', 'idDiv': 'SimpleHicksianGraph', 'height': '650px', 'width': '100', 'left': '-2', 'right': '15', 'bottom': '-1', 'top': '10', 'copy': true, 'showGrid': false, 'expressions': false, 'zoomFit': true, 'showXAxis': true, 'showYAxis': true, 'xAxisLabel': 'x', 'yAxisLabel': 'y' });

//util function
myCalculator.addTemplateInput({
  'idDiv': 'UtilityFunction',
  'title': 'Utility Function',
  'func': "U(x,y)",
  'placeholders': [
    "{\\placeholder[a]{2}}\\ln(x)+{\\placeholder[b]{3}}\\ln(y)",
    "{\\placeholder[a]{2}}x + {\\placeholder[b]{3}}\\ln(y)",
    "{\\placeholder[a]{5}}x + {\\placeholder[b]{2}}\\sqrt{y}",
    "x^{{\\placeholder[a]{2}}} \\cdot y^{{\\placeholder[b]{3}}}",
    "y^{{\\placeholder[b]{3}}} \\cdot e^{{\\placeholder[a]{2}}x}",
    "\\min({\\placeholder[a]{2}}x, {\\placeholder[b]{3}}y)"
  ],
  'color': '#6d1fff',
  'listGraphs': [0]
});
myCalculator.line();
myCalculator.addTemplateInput({
  'idDiv': 'IsocostLine',
  'title': 'Isocost Line',
  'func': "F(x,y)",
  'placeholders': [
    "{\\placeholder[a]{10}}x+{\\placeholder[b]{1}}y"
  ],
  'color': '#6d1fff',
  'listGraphs': [0]
});


//util function
// myCalculator.addFuncInput({ 'idDiv': 'UtilityFunction', 'title': 'Utility Function', 'func': "U(x,y)", 'latex': "\\min(x,y)", 'color': '#6d1fff', 'listGraphs': [0] });
// myCalculator.addFuncInput({ 'idDiv': 'IsocostLine', 'title': 'Isocost Line', 'func': "F(x,y)", 'latex': "1x+1y", 'color': '#6d1fff', 'listGraphs': [0] });
//fixed utility
myCalculator.addSliderInput({ 'idDiv': 'FixedUtility', 'title': 'Fixed Utility Level', 'latex': 'K', 'min': '0', 'max': '100000', 'step': '0.01', 'defaultValue': '5', 'listGraphs': [0] });
myCalculator.addExpression({ 'calc': 'simpleCompute', 'idDiv': 'totalUtilityCurve', 'compute': "UtilityFunction-FixedUtility", 'NewfunEqu': "f(x,y)", 'listGraphs': [0] });

//find Hicksian bundle
// myCalculator.addExpression({ 'calc': 'simpleLag', 'idDiv': 'H', 'parentIdDiv': 'IsocostLine', 'constraint': 'totalUtilityCurve', 'FOCmax': false, 'NewfunEqu': '\\mu', 'listGraphs': [0] });
myCalculator.addExpression({ 'calc': 'simpleHicksian', 'idDiv': 'H', 'utilityFunction': 'UtilityFunction', 'isocostLine': 'IsocostLine', 'fixedUtilityLevel': 'FixedUtility', 'NewfunEqu': '\\mu', 'listGraphs': [0] });

//draw IC and BL at Hicksian bundle
myCalculator.addExpression({ idDiv: "Pi2I1", latex: 'x_{2}\\left(x,y\\right)=x\\cos\\left(-2\\pi\\right)-y\\sin\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "Pi2I2", latex: 'y_{2}\\left(x,y\\right)=x\\sin\\left(-2\\pi\\right)+y\\cos\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "drawUtilityCurve", latex: 'U\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=K\\left\\{x\\ge0\\right\\}\\left\\{y\\ge0\\right\\}', color: '#2d70b3', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "drawIsocostline", latex: 'F\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=F(\\mu_{x},\\mu_{y})\\left\\{x\\ge0\\right\\}\\left\\{y\\ge0\\right\\}', color: '#06a13f', listGraphs: [0] });

//label Hicksian bundle 
myCalculator.addLabel({ 'idDiv': 'tangentHicksian', 'latex': "(\\mu_{x},\\mu_{y})", 'color': '#84009e', label: '(${\\mu_{x}},${\\mu_{y}})', 'pointStyle': Desmos.Styles.OPEN, 'showLabel': true, 'listGraphs': [0] });

//instructions
myCalculator.setInstructions({ 'title': 'Input Utility Function', 'content': '<b>Input the utility function, e.g., "%%\\log\\left(x\\right)+\\log\\left(y\\right)%%”.</b> You do not need to set the utility function equal to any level of U. ' });
myCalculator.setInstructions({ 'title': 'Input Isocost Line', 'content': '<b>Input the isocost line in the form "%%P_{x}x+P_{y}y%%" with %%P_{x}%% and %%P_{y}y%% as set constants.</b>' });
myCalculator.setInstructions({
    'title': 'Input Fixed Utility Level', 'content': '<b> Input the utility level you want to hold constant and click "Refresh". </b> The calculator will display the Hicksian bundle in purple, the isocost line in blue, and the corresponding indifference curve in green. \
\\theory{"The Tangency Condition and the Feasibility Condition","The graphical solution demonstrates that the Hicksian demand bundle satisfies:\
<br><b>1) The tangency condition:</b> the isocost line and indifference curve are tangent at the Hicksian demand bundle — the slope of the isocost line (%%\\frac{P_{x}}{P_{y}}%%, the price ratio) and the slope of the indifference curve (%%\\frac{U_{x}}{U_{y}}%%, the marginal rate of substitution) are equal to each other\
<br><b>2) The feasibility condition: </b>the Hicksian demand bundle lies on utility curve fixed at the level of utility specified"}'});
myCalculator.setInstructions({ 'title': 'Cost of the Hicksian Bundle', 'content': "The Hicksian bundle is the cheapest bundle that achieves the specified level of utility. The cost of the Hicksian bundle currently displayed is \\exp{HicksianCostDisplayValue}. " });

//creators
myCalculator.setCreators({ 'title': 'Developer', 'name': 'Kyla', 'school': "CC’24" });


</script>
