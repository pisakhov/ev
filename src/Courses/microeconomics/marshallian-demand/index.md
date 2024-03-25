---
tags: microeconomics
thumbnail: /assets/img/marshallian-demand.png
title: Marshallian Demand
description: Utility-maximizing consumption bundle dictated by prices and budget via equating marginal utilities
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();

myCalculator.setGraphs({ 'engine': 'desmos', 'idDiv': 'MarshalianGraph', 'height': '650px', 'width': '100', 'left': '-2', 'right': '15', 'bottom': '-1', 'top': '10', 'copy': true, 'showGrid': false, 'expressions': false, 'zoomFit': true, 'showXAxis': true, 'showYAxis': true, 'xAxisLabel': 'x', 'yAxisLabel': 'y' });

//util function
myCalculator.addFuncInput({ 'idDiv': 'UtilityFunction', 'title': 'Utility Function', 'func': "U(x,y)", 'latex': "\\ln(x)+\\ln(y)", 'color': '#6d1fff', 'listGraphs': [0] });
myCalculator.addFuncInput({ 'idDiv': 'BudgetLine', 'title': 'Budget Line', 'func': "F(x,y)", 'latex': "5x+6y", 'color': '#6d1fff', 'listGraphs': [0] });
//total budget
myCalculator.addSliderInput({ 'idDiv': 'totalBudget', 'title': 'Total Budget', 'latex': 'I', 'min': '0', 'max': '1000', 'step': '1', 'defaultValue': '30', 'listGraphs': [0] });
myCalculator.addExpression({ 'calc': 'simpleCompute', 'idDiv': 'totalBudgetLine', 'compute': "BudgetLine-totalBudget", 'NewfunEqu': "f(x,y)", 'listGraphs': [0] });

myCalculator.addExpression({ 'calc': 'simpleMarshalian', 'idDiv': 'M', 'parentIdDiv': 'UtilityFunction', 'constraint': 'totalBudgetLine', 'NewfunEqu': '\\mu', 'listGraphs': [0] });

myCalculator.addExpression({ idDiv: "Pi2I1", latex: 'x_{2}\\left(x,y\\right)=x\\cos\\left(-2\\pi\\right)-y\\sin\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "Pi2I2", latex: 'y_{2}\\left(x,y\\right)=x\\sin\\left(-2\\pi\\right)+y\\cos\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "drawBudgetLine", latex: 'F\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=I', color: '#2d70b3', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "drawUtilFunction", latex: 'U\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=U(\\mu_{x},\\mu_{y})\\left\\{x\\ge0\\right\\}\\left\\{y\\ge0\\right\\}', color: '#06a13f', listGraphs: [0] });

myCalculator.addLabel({ 'idDiv': 'tangentMarshalian', 'latex': "(\\mu_{x},\\mu_{y})", 'color': '#84009e', label: '', 'pointStyle': Desmos.Styles.OPEN, 'showLabel': true, 'listGraphs': [0] });

//set bounds
myCalculator.addExpression({ 'idDiv': 'findYinterceptOldBL', 'latex': "I\\sim F(0,B_{T})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'findXinterceptOldBL', 'latex': "I\\sim F(B_{R},0)", 'listGraphs': [0] });
myCalculator.setBounds({ 'top': 'B_{T}', 'right': 'B_{R}', 'tolerance':1.2, 'mtolerance':1.2, 'listGraphs': [0] });


//instructions
myCalculator.setInstructions({ 'title': 'Input Utility Function', 'content': '<b>Input the utility function, e.g., "%%\\log\\left(x\\right)+\\log\\left(y\\right)%%”.</b> You do not need to set the utility function equal to any level of U. ' });
myCalculator.setInstructions({ 'title': 'Input Budget Line', 'content': '<b>Input the budget line in the form "%%P_{x}x+P_{y}y%%" with %%P_{x}%% and %%P_{y}y%% as set constants.</b>' });
myCalculator.setInstructions({ 'title': 'Input Total Budget', 'content': '<b> Input the total budget. </b> The calculator will immediately calculate the Marshallian demand bundle, and display the budget line in blue, the corresponding indifference curve in green, and the bundle in purple.\
\\theory{"The Tangency Condition and the Feasibility Condition","The graphical solution demonstrates that the Marshallian demand bundle satisfies:\
<br><b>1) The tangency condition:</b> the budget line and indifference curve are tangent at the Marshallian demand bundle — the slope of the budget line (%%\\frac{P_{x}}{P_{y}}%%, the price ratio) and the slope of the indifference curve (%%\\frac{U_{x}}{U_{y}}%%, the marginal rate of substitution) are equal to each other\
<br><b>2) The feasibility condition: </b>the Marshallian demand bundle lies on the budget line"}'});

//creators
myCalculator.setCreators({ 'title': 'Developer', 'name': 'Kyla', 'school': "CC’24" });



</script>
