---
tags: microeconomics
thumbnail: public/assets/img/MarshalianGraph.png
title: Effect of a Price Change
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision(false);

myCalculator.setGraphs({ 'engine': 'desmos', 'idDiv': 'MarshalianGraph', 'height': '650px', 'width': '100', 'left': '-2', 'right': '40', 'bottom': '-1', 'top': '40', 'copy': true, 'showGrid': false, 'expressions': false, 'zoomFit': true, 'showXAxis': true, 'showYAxis': true, 'xAxisLabel': 'x', 'yAxisLabel': 'y' });

//util function
myCalculator.addFuncInput({ 'idDiv': 'UtilityFunction', 'title': 'Utility Function', 'func': "U(x,y)", 'latex': "\\ln(x)+2\\ln(y)", 'color': '#6d1fff', 'listGraphs': [0] });
myCalculator.addFuncInput({ 'idDiv': 'BudgetLine', 'title': 'Original Budget Function', 'func': "F(x,y)", 'latex': "5x+8y", 'color': '#6d1fff', 'listGraphs': [0] });

//total budget
myCalculator.addSliderInput({ 'idDiv': 'totalBudget', 'title': 'Total Budget', 'latex': 'I', 'min': '0', 'max': '1000', 'step': '1', 'defaultValue': '120', 'listGraphs': [0] });
myCalculator.addExpression({ 'calc': 'simpleCompute', 'idDiv': 'totalBudgetLine', 'compute': "BudgetLine-totalBudget", 'NewfunEqu': "f(x,y)", 'listGraphs': [0] });
myCalculator.setValue({ 'idDiv': 'totalBudgetDisplay', 'latex': 'I', 'decimal': '0', 'listGraphs': [0] });

//find original Marshallian bundle
myCalculator.addExpression({ 'calc': 'simpleLag', 'idDiv': 'M', 'parentIdDiv': 'UtilityFunction', 'constraint': 'totalBudgetLine', 'FOCmax': true, 'NewfunEqu': '\\mu', 'listGraphs': [0] });

//display original budget line and utility function
myCalculator.addExpression({ idDiv: "Pi2I1", latex: 'x_{2}\\left(x,y\\right)=x\\cos\\left(-2\\pi\\right)-y\\sin\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "Pi2I2", latex: 'y_{2}\\left(x,y\\right)=x\\sin\\left(-2\\pi\\right)+y\\cos\\left(-2\\pi\\right)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "drawBudgetLine", latex: 'F\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=I', color: 'rgb(22,163,74)', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "drawUtilFunction", latex: 'U\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=U(\\mu_{x},\\mu_{y})\\left\\{x>0\\right\\}\\left\\{y>0\\right\\}', color: 'rgb(14,165,233)', listGraphs: [0] });

//display marshallian bundle
myCalculator.addExpression({ idDiv: "muroundedx", latex: 'a_{x}=\\operatorname{round}\\left(\\mu_{x},2\\right)', color: '#204f7d', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "muroundedy", latex: 'a_{y}=\\operatorname{round}\\left(\\mu_{y},2\\right)', color: '#204f7d', listGraphs: [0] });
myCalculator.addLabel({ 'idDiv': 'MarshallianBundle', 'latex': "(\\mu_{x},\\mu_{y})", 'color': 'rgb(147,51,234)', label: '`M_1`(${\\a_{x}},${\\a_{y}})', 'showLabel': true, 'listGraphs': [0] });

//set dynamic field for original Marshallian utility
myCalculator.addExpression({ 'idDiv': 'MarshallianUtilityDisplay', 'latex': "U_{M1}=U(\\mu_{x},\\mu_{y})", 'listGraphs': [0] });
myCalculator.setValue({ 'idDiv': 'MarshallianUtilityDisplayValue', 'latex': 'U_{M1}', 'decimal': '2', 'listGraphs': [0] });

//change the prices 
myCalculator.addFuncInput({ 'idDiv': 'ChangedBudgetLine', 'title': 'Budget Function after Price Change', 'func': "G(x,y)", 'latex': "3x+8y", 'color': '#6d1fff', 'listGraphs': [0] });

//calculate utility at old Marshallian bundle
myCalculator.addExpression({ 'calc': 'simpleSubstitute', 'idDiv': 'OldUtilityMarshallian', 'parentIdDiv': 'UtilityFunction', 'NewfunEqu': "r(M_x,M_y)", 'listGraphs': [0] });
myCalculator.addExpression({ 'calc': 'simpleCompute', 'idDiv': 'UtilityWithK', 'compute': "UtilityFunction-OldUtilityMarshallian", 'NewfunEqu': "s(x,y)", 'listGraphs': [0] });

//find Hicksian bundle under new prices, fixing utility at old Marshallian bundle
myCalculator.addExpression({ 'calc': 'simpleLag', 'idDiv': 'LagForHicksian', 'parentIdDiv': 'ChangedBudgetLine', 'constraint': 'UtilityWithK', 'FOCmax': false, 'NewfunEqu': 'C', 'listGraphs': [0] });

//draw new indifference curve and Hicksian bundle
myCalculator.addExpression({ idDiv: "Croundedx", latex: 'c_{x}=\\operatorname{round}\\left(C_{x},2\\right)', color: '#204f7d', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "Croundedy", latex: 'c_{y}=\\operatorname{round}\\left(C_{y},2\\right)', color: '#204f7d', listGraphs: [0] });
myCalculator.addLabel({ 'idDiv': 'HicksianSolution', 'latex': "(C_{x},C_{y})", 'color': 'rgb(236,72,153)', label: '`H`(${c_{x}},${c_{y}})', 'showLabel': true, 'listGraphs': [0] });

//set dynamic field for Hicksian bundle cost
myCalculator.addExpression({ 'idDiv': 'HicksianCostDisplay', 'latex': "G_{H}=G(C_{x},C_{y})", 'listGraphs': [0] });
myCalculator.setValue({ 'idDiv': 'HicksianCostDisplayValue', 'latex': 'G_{H}', 'decimal': '2', 'listGraphs': [0] });

//find new budget line under new prices
myCalculator.addExpression({ 'idDiv': 'drawChangedBudgetLine', 'latex': "G\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=I", 'color': 'rgb(22,101,52)', 'listGraphs': [0] });

//find new marshallian bundle
myCalculator.addExpression({ 'calc': 'simpleCompute', 'idDiv': 'totalChangedBudgetLine', 'compute': "ChangedBudgetLine-totalBudget", 'NewfunEqu': "g(x,y)", 'listGraphs': [0] });
myCalculator.addExpression({ 'calc': 'simpleLag', 'idDiv': 'm', 'parentIdDiv': 'UtilityFunction', 'constraint': 'totalChangedBudgetLine', 'FOCmax': true, 'NewfunEqu': 'Q', 'listGraphs': [0] });

//display Marshallian bundle 
myCalculator.addExpression({ 'calc': 'simpleSubstitute', 'idDiv': 'NewUtilityMarshallian', 'parentIdDiv': 'UtilityFunction', 'NewfunEqu': "g(m_x,m_y)", 'listGraphs': [0] });
myCalculator.addExpression({ idDiv: "Qroundedx", latex: 'q_{x}=\\operatorname{round}\\left(Q_{x},2\\right)', color: '#204f7d', listGraphs: [0] });
myCalculator.addExpression({ idDiv: "Qroundedy", latex: 'q_{y}=\\operatorname{round}\\left(Q_{y},2\\right)', color: '#204f7d', listGraphs: [0] });
myCalculator.addLabel({ 'idDiv': 'NewMarshallianBundle', 'latex': "(Q_{x},Q_{y})", 'color': 'rgb(107,33,168)', label: '`M_2`(${q_{x}},${q_{y}})', 'showLabel': true, 'listGraphs': [0] });

//set dynamic field for new Marshallian utility
myCalculator.addExpression({ 'idDiv': 'NewMarshallianUtilityDisplay', 'latex': "U_{M2}=U(Q_{x},Q_{y})", 'listGraphs': [0] });
myCalculator.setValue({ 'idDiv': 'NewMarshallianUtilityDisplayValue', 'latex': 'U_{M2}', 'decimal': '2', 'listGraphs': [0] });

//draw new indifference curve
// myCalculator.addExpression({ idDiv: "Pi2I1a", latex: 'x_{3}\\left(x,y\\right)=x\\cos\\left(-2\\pi\\right)-y\\sin\\left(-2\\pi\\right)', listGraphs: [0] });//no needed
// myCalculator.addExpression({ idDiv: "Pi2I2a", latex: 'y_{3}\\left(x,y\\right)=x\\sin\\left(-2\\pi\\right)+y\\cos\\left(-2\\pi\\right)', listGraphs: [0] });//no needed
myCalculator.addExpression({ 'idDiv': "drawNewUtilFunction2", 'latex': 'U\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=U(Q_{x},Q_{y})\\left\\{x>0\\right\\}\\left\\{y>0\\right\\}', 'color': 'rgb(3,105,161)', 'listGraphs': [0] });

//set bounds
myCalculator.addExpression({ 'idDiv': 'findYinterceptOldBL', 'latex': "I\\sim F(0,y_{p1})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'findYinterceptNewBL', 'latex': "I\\sim G(0,y_{p2})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'findmaxYinterceptBL', 'latex': "B_{T}=\\max(y_{p1},y_{p2})", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'findXinterceptOldBL', 'latex': "I\\sim F(x_{p1},0)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'findXinterceptNewBL', 'latex': "I\\sim G(x_{p2},0)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'findmaxXinterceptBL', 'latex': "B_{R}=\\max(x_{p1},x_{p2})", 'listGraphs': [0] });
myCalculator.setBounds({ 'top': 'B_{T}', 'right': 'B_{R}', 'tolerance': 1.2, 'mtolerance': 1.2, 'listGraphs': [0] });

// set instructions
myCalculator.setInstructions({ 'title': 'Find the Original Marshallian Bundle under Initial Prices', 'content': '<b>Input the utility function, the budget function under original prices, and the total budget available.</b> The calculator will automatically display the Marshallian bundle %%M_1%% in <span class="text-purple-600"> purple</span>, the original budget line in <span class="text-green-600"> green</span>, and the corresponding indifference curve in <span class="text-sky-500"> blue</span>. The utility level of the current Marshallian bundle is \\exp{MarshallianUtilityDisplayValue}.' });
myCalculator.setInstructions({ 'title': 'Institute a Price Change', 'content': '<b>Input  the new budget function after the price change.</b>' });
myCalculator.setInstructions({ 'title': 'Substitution Effect of the Price Change', 'content': 'Holding the level of utility constant at the initial Marshallian bundle, the calculator will automatically display the the Hicksian bundle %%H%% under these new prices in <span class="text-pink-500">pink</span>. The movement from bundle %%M_1%% to bundle %%H%% represents the substitution effect of the price change.' });
myCalculator.setInstructions({ 'title': 'Income Effect of the Price Change', 'content': 'The calculator will also automatically display the new Marshallian bundle %%M_2%% at the new prices in <span class="text-purple-800">dark purple</span>,  the corresponding indifference curve in <span class="text-sky-700">dark blue</span>, and the new budget line under these changed prices in <span class="text-green-800">dark green</span>. The movement from the substitution bundle %%H%% to this final consumption bundle %%M_2%% represents the income effect of the price change. The utility level of this new Marshallian bundle is \\exp{NewMarshallianUtilityDisplayValue}.' });

myCalculator.setCreators({ 'title': 'Developer', 'name': 'Kyla', 'school': 'CC’24' });

myCalculator.setScriptPackage({ 'replaceExp': true, 'replaceLatex': true, 'replaceTip': true, 'replaceTheory': true, 'refresh': true });
</script>
