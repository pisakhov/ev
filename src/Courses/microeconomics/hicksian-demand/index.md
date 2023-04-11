---
tags: microeconomics
title: Hicksian Demand
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision(true);

myCalculator.setGraphs({ 'engine': 'desmos', 'idDiv': 'SimpleHicksianGraph', 'height': '650px', 'width': '100', 'left': '-2', 'right': '15', 'bottom': '-1', 'top': '10', 'copy': true, 'showGrid': false, 'expressions': true, 'zoomFit': true, 'showXAxis': true, 'showYAxis': true, 'xAxisLabel': 'x', 'yAxisLabel': 'y' });

//util function
myCalculator.addFuncInput({ 'idDiv': 'UtilityFunction', 'title': 'Utility Function', 'func': "U(x,y)", 'latex': "\\ln(x)+\\ln(y)", 'color': '#6d1fff', 'listGraphs': [0] });
myCalculator.addFuncInput({ 'idDiv': 'IsocostLine', 'title': 'Isocost Line', 'func': "F(x,y)", 'latex': "5x+6y", 'color': '#6d1fff', 'listGraphs': [0] });
//fixed utility
myCalculator.addSliderInput({ 'idDiv': 'FixedUtility', 'title': 'Fixed Utility Level', 'latex': 'K', 'min': '0', 'max': '100', 'step': '0.01', 'defaultValue': '2', 'listGraphs': [0] });
myCalculator.addExpression({ 'calc': 'simpleCompute', 'idDiv': 'totalUtilityCurve', 'compute': "UtilityFunction-FixedUtility", 'NewfunEqu': "f(x,y)", 'listGraphs': [0] });

//find Hicksian bundle
myCalculator.addExpression({ 'calc': 'simpleLag', 'idDiv': 'H', 'parentIdDiv': 'IsocostLine', 'constraint': 'totalUtilityCurve', 'FOCmax': false, 'NewfunEqu': '\\mu', 'listGraphs': [0] });

//draw IC and BL at Hicksian bundle
myCalculator.addExpression({ idDiv: "Pi2I1", latex: 'x_{2}\\left(x,y\\right)=x\\cos\\left(-2\\pi\\right)-y\\sin\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "Pi2I2", latex: 'y_{2}\\left(x,y\\right)=x\\sin\\left(-2\\pi\\right)+y\\cos\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "drawUtilityCurve", latex: 'U\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=K', color: '#2d70b3', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "drawIsocostline", latex: 'F\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=F(\\mu_{x},\\mu_{y})\\left\\{x\\ge0\\right\\}\\left\\{y\\ge0\\right\\}', color: '#06a13f', listGraphs: [0] });

//label Hicksian bundle 
myCalculator.addLabel({ 'idDiv': 'tangentHicksian', 'latex': "(\\mu_{x},\\mu_{y})", 'color': '#84009e', label: '', 'pointStyle': Desmos.Styles.OPEN, 'showLabel': true, 'listGraphs': [0] });

//display cost of Hicksian bundle
myCalculator.addExpression({ 'idDiv': 'HicksianCostDisplay', 'latex': "C_{H}=F(\\mu_{x},\\mu_{y})", 'listGraphs': [0] });
myCalculator.setValue({ 'idDiv': 'HicksianCostDisplayValue', 'latex': 'C_{H}', 'decimal': '2', 'listGraphs': [0] });

//instructions
myCalculator.setInstructions({ 'title': 'Input Utility Function', 'content': '<b>Input the utility function, e.g., "%%\\log\\left(x\\right)+\\log\\left(y\\right)%%”.</b> You do not need to set the utility function equal to any level of U. ' });
myCalculator.setInstructions({ 'title': 'Input Isocost Line', 'content': '<b>Input the isocost line in the form "%%P_{x}x+P_{y}y%%" with %%P_{x}%% and %%P_{y}y%% as set constants.</b>' });
myCalculator.setInstructions({
	'title': 'Input Fixed Utility Level', 'content': '<b> Input the utility level you want to hold constant and click "Refresh". </b> The calculator will display the Hicksian bundle in purple, the isocost line in blue, and the corresponding indifference curve in green. \
\\theory{"The Tangency Condition and the Feasibility Condition","The graphical solution demonstrates that the Hicksian demand bundle satisfies:\
<br><b>1) The tangency condition:</b> the isocost line and indifference curve are tangent at the Hicksian demand bundle — the slope of the isocost line (%%\\frac{P_{x}}{P_{y}}%%, the price ratio) and the slope of the indifference curve (%%\\frac{U_{x}}{U_{y}}%%, the marginal rate of substitution) are equal to each other\
<br><b>2) The feasibility condition: </b>the Hicksian demand bundle lies on utility curve fixed at the level of utility specified"}'});
myCalculator.setInstructions({'title':'Cost of the Hicksian Bundle','content':"The Hicksian bundle is the cheapest bundle that achieves the specified level of utility. The cost of the Hicksian bundle currently displayed is \\exp{HicksianCostDisplayValue}. "});

//updateboundsv
myCalculator.addExpression({ 'idDiv': 'findYintercept', 'latex': "C_{H}\\sim F(0,y_{1})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'findXintercept', 'latex': "C_{H}\\sim F(x_{1},0)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'BountdTop', 'latex': "B_{t}=y_1", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'BountdRight', 'latex': 'B_{r}=x_1', 'listGraphs': [0] });
myCalculator.setBounds({ 'top': 'B_{t}', 'right': 'B_{r}', 'listGraphs': [0] });

//creators
myCalculator.setCreators({ 'title': 'Developer', 'name': 'Kyla', 'school': "CC’24" });

//set script package
myCalculator.setScriptPackage({ 'replaceExp': true, 'replaceLatex': true, 'replaceTip': true, 'replaceTheory': true, 'refresh': true });

</script>
