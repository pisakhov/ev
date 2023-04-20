---
tags: microeconomics
title: Multiple Marshallian Bundles
layout: model.njk
show: true
---
<script>
const myCalculator = new EconVision(true);

myCalculator.setGraphs({ 'engine': 'desmos', 'idDiv': 'DynamicMarshallianGraph', 'height': '650px', 'width': '100', 'left': '-25', 'right': '150', 'bottom': '-15', 'top': '100', 'copy': true, 'expressions': true, 'zoomFit': true, 'showXAxis': true, 'showYAxis': true, 'xAxisLabel': 'x(units)', 'yAxisLabel': 'y(units)' });

//utility function
myCalculator.addFuncInput({ 'idDiv': 'UtilityFunction', 'title': 'Utility Function', 'func': "U(x,y)", 'latex': "\\ln\\left(x\\right)+\\ln\\left(y\\right)", 'listGraphs': [0] });
myCalculator.line(); //draw line
//dynamic budget line
myCalculator.addDynamicInput({ 'idDiv': 'BudgetLine', 'title': 'Budget Line ', 'func': "F(x,y)", 'rhs': 'I', 'latex': '3x+4y=120', 'listGraphs': [0] });

//draw indifference curve
myCalculator.addExpression({ idDiv: "Pi2I1", latex: 'x_{2}\\left(x,y\\right)=x\\cos\\left(-2\\pi\\right)-y\\sin\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "Pi2I2", latex: 'y_{2}\\left(x,y\\right)=x\\sin\\left(-2\\pi\\right)+y\\cos\\left(-2\\pi\\right)', listGraphs: [0] });

myCalculator.addDynamicExp({ 'calc': 'simpleDraw', 'color': 'purple', 'idDiv': 'solvecompute', 'parentIdDiv': 'BudgetLine', 'lhs': ["x_{2}(x,y)", "y_{2}(x,y)"], 'rhs': 'I', 'listGraphs': [0] });
myCalculator.addDynamicExp({ 'calc': 'simpleCompute', 'idDiv': 'dynamicUtil', 'parentIdDiv': 'BudgetLine', 'compute': 'UtilityFunction', 'NewfunEqu': 'G(x,y)', 'listGraphs': [0] });


myCalculator.addDynamicExp({ 'calc': 'simpleCompute', 'idDiv': 'totalBudgetLine', 'parentIdDiv': 'BudgetLine', 'compute': 'BudgetLine-BudgetLine_rhs', 'NewfunEqu': '\\mu(x,y)', 'listGraphs': [0] });

myCalculator.addDynamicExp({ 'calc': 'simpleLag', 'idDiv': 'LagMultipleDynamic', 'parentIdDiv': 'totalBudgetLine', 'objective': 'UtilityFunction', 'constraint': 'totalBudgetLine', 'FOCmax': true, 'NewfunEqu': "\\theta", 'listGraphs': [0] });
myCalculator.addDynamicExp({ 'calc': 'simpleDraw', 'color': 'blue', 'idDiv': 'drawUtilEach', 'parentIdDiv': 'dynamicUtil', 'lhs': ["x_{2}(x,y)", "y_{2}(x,y)"], 'rhs': 'G(\\theta[2],\\theta[3])', 'listGraphs': [0] });

myCalculator.addDynamicExp({ 'calc': 'simpleDrawLabel', 'color': 'orange', 'idDiv': 'drawLabelEach', 'parentIdDiv': 'dynamicUtil', 'rhs': '(\\theta[2],\\theta[3])', 'label': '', 'listGraphs': [0] });

//add instructions
myCalculator.setInstructions({ 'title': 'Visualize Multiple Marshallian Bundles', 'content': 'This calculator allows you to visualize multiple Marshallian bundles in the same graph. <b>Use the "Add" button to input additional budget lines and click "Refresh".</b> The budget lines should be written in the format %%P_xx+P_yy=Income%% where %%P_x%%, %%P_y%%, and %%I%% are constants. The calculator will display the Marshallian bundle corresponding to each budget line.\
    \\tip{"If the bundles do not show up on the screen, they may be out of the frame. Use the zoom buttons at the right corner of the graph to zoom out and view the bundles."}'
  });                      
    
myCalculator.setCreators({
	title: "Developer",
	name: "Kyla",
	school: "CC’24"
});

myCalculator.setScriptPackage({ 'replaceExp': true, 'replaceLatex': true, 'replaceTip': true, 'replaceTheory': true, 'refresh': true });
</script>