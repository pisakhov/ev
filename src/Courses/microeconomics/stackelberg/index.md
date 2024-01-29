---
tags: microeconomics
title: Stackelberg
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();

myCalculator.setGraphs({'engine':'desmos','idDiv':'PriceVsQuantityGraph','height':'650px','width':'50','left':'-25','right':'150','bottom':'-15','top':'100','copy':true,'expressions':false,'zoomFit':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'Q(units)       ','yAxisLabel':'P($)'});
myCalculator.setGraphs({'engine':'desmos','idDiv':'QuantityVQuantityGraph','height':'650px','width':'50','left':'-25','right':'150','bottom':'-15','top':'100','copy':true,'expressions':false,'zoomFit':true,'showXAxis':true,'showYAxis':true,'xAxisLabel':'Q1(units)       ','yAxisLabel':'Q2(units)'});

//InverseDemandFunc
myCalculator.addFuncInput({'idDiv':'InverseDemandFunc','title':'Inverse Demand Function','func':'f_D(Q)','latex':"60-\\frac{Q}{2}",'constraint':"\\left\\{Q\\ge0\\right\\}",'color':'#ea5757','listGraphs':[0]});

//Leader and Follower TC
myCalculator.addFuncInput({'idDiv':'LeaderTC','title':'Leader’s Total Cost','func':'f_{TCL}(Q)','latex':"\\frac{Q^2}{10}",'hidden':true,'listGraphs':[0]});
myCalculator.addFuncInput({'idDiv':'FollowerTC','title':'Follower’s Total Cost','func':'f_{TCF}(Q)','latex':"\\frac{Q^2}{8}",'hidden':true,'listGraphs':[0]});

//Leader and Follower MC
myCalculator.addExpression({'calc':'simpleDerive','idDiv':'LeaderMC','parentIdDiv':'LeaderTC','NewfunEqu':"f_{mcL}(Q)",'hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'calc':'simpleDerive','idDiv':'FollowerMC','parentIdDiv':'FollowerTC','NewfunEqu':"f_{mcF}(Q)",'hidden':true,'listGraphs':[0]});


//Leader and Follower inverse
myCalculator.addExpression({'calc':'simpleInverse','idDiv':'LeaderSupply','parentIdDiv':'LeaderMC','NewfunEqu':'S_L(P)','hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'calc':'simpleInverse','idDiv':'FollowerSupply','parentIdDiv':'FollowerMC','NewfunEqu':'S_F(P)','hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'TotalSupply','compute':'LeaderSupply+FollowerSupply','NewfunEqu':'S_{total}(P)','hidden':true,'listGraphs':[0]});

//draw total MC
myCalculator.addExpression({'calc':'simpleInverse','idDiv':'TotalMC','parentIdDiv':'TotalSupply','NewfunEqu':'f_{mcT}(Q)','color':'#4730f3','listGraphs':[0]});

//ProfitFunctionLeader
myCalculator.addExpression({'idDiv':'Q1','latex':'f_{q1}(Q_{1})=Q_{1}','hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':'Q2','latex':'f_{q2}(Q_{2})=Q_{2}','hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'calc':'advanceSubstitute','idDiv':'LeaderTC1','parentIdDiv':["LeaderTC", "Q1"],'NewfunEqu':"F_{TCL}(Q_{1})",'subWith':'0','hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'calc':'advanceSubstitute','idDiv':'FollowerTC2','parentIdDiv':["FollowerTC", "Q2"],'NewfunEqu':"F_{TCF}(Q_{2})",'subWith':'0','hidden':true,'listGraphs':[0]});
myCalculator.addExpression({'idDiv':"simpleQB", 'latex':"f_{qB}(Q_{1},Q_{2})=Q_{1}+Q_{2}", 'hidden':true, 'listGraphs':[0]});
myCalculator.addExpression({'calc':"advanceSubstitute", 'idDiv':"priceFunc", 'parentIdDiv':["InverseDemandFunc", "simpleQB"], 'NewfunEqu':"f_{IDB}(Q_{1},Q_{2})", 'subWith':0, 'hidden':true, 'listGraphs':[0]});


myCalculator.addExpression({'calc':'simpleCompute','idDiv':'LeaderProfitFunc','compute':'priceFunc*[Q_1]-(LeaderTC1)','NewfunEqu':"P_{L}(Q_{1},Q_{2})",'hidden':true,'listGraphs':[0,1]});
myCalculator.addExpression({'calc':'simpleCompute','idDiv':'FollowerProfitFunc','compute':'priceFunc*[Q_2]-(FollowerTC2)','NewfunEqu':"P_{F}(Q_{1},Q_{2})",'hidden':true,'listGraphs':[0,1]});

// //MR
myCalculator.addExpression({'calc':"simpleCompute", 'idDiv':"revenueTotal", 'compute':"InverseDemandFunc*[Q]", 'NewfunEqu':"f_{rT}(Q)", 'hidden':true, 'listGraphs':[0]});
myCalculator.addExpression({'calc':"simpleDerive", 'idDiv':"MRFunc", 'parentIdDiv':"revenueTotal", 'NewfunEqu':"F_{MR}(Q)", 'color':"red", 'listGraphs':[0]});

// //Optimal MR=MC
myCalculator.addExpression({'idDiv':"OptimalCheckq", 'latex':"F_{MR}(Q_{q})\\sim f_{mcT}(Q_{q})", 'hidden':true, 'listGraphs':[0]});
myCalculator.addExpression({'idDiv':"OptimalCheckp", 'latex':"Q_{p}=f_D(Q_{q})", 'hidden':true, 'listGraphs':[0]});
myCalculator.addExpression({'idDiv':"OptimalCheckShade", 'color': 'gray', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': "0.9", 'latex':"\\operatorname{polygon}\\left(\\left[\\left(Q_{q},0\\right),\\left(Q_{q},Q_{p}\\right),\\left(0,Q_{p}\\right),\\left(0,0\\right)\\right]\\right)", 'listGraphs':[0]});
myCalculator.addLabel({ 'idDiv': 'cartelPoint', 'latex': '\\left(Q_{q},Q_{p}\\right)', 'color': 'gray', 'pointStyle':Desmos.Styles.OPEN, 'label': '','pointSize':15, 'listGraphs': [0] });
myCalculator.addSwitchInput({ 'idDiv': "displayCartelSolution", 'title': "Display Cartel Solution", 'idDivs': ["OptimalCheckShade", "cartelPoint"], 'hideToggle': true, 'listGraphs': [0] });


//show BackwardInduction first graph
myCalculator.addExpression({ 'idDiv': "findPriceLeader", 'latex': "P_{s1}=f_{IDB}\\left(Q_{s1},Q_{s2}\\right)", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': "sumQuantityStac", 'latex': "Q_{s}=Q_{s1}+Q_{s2}", 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': "sumQuantityStacAdj", 'latex': "Q_{sa}=Q_{s11}+Q_{s22}", 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'StackelbergOptimal', 'latex': '\\left(Q_{s},P_{s1}\\right)', 'color': '#388c46', 'label': 'Stackelberg(${Q_{s}},$${P_{s1}})', 'listGraphs': [0] });
//adjusted PriceQuantatity
myCalculator.addExpression({ 'idDiv': "findPriceLeaderAdj", 'latex': "P_{s11}=f_{IDB}\\left(Q_{s11},Q_{s22}\\right)", 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'StackelbergOptimalAdj', 'latex': '\\left(Q_{sa},P_{s11}\\right)', 'color': '#3d168c', 'label': '*(${Q_{sa}},$${P_{s11}})', 'listGraphs': [0] });




myCalculator.addExpression({'calc':"simpleFOC", 'idDiv':"FOCFollower", 'parentIdDiv':"FollowerProfitFunc", 'NewfunEqu':"R(Q_{1},Q_{2})", 'FOCmax':true, 'solveFor':1, 'hidden':true, 'listGraphs':[0,1]});
myCalculator.addExpression({'calc':"advanceSubstitute", 'idDiv':"profitFuncLeaderFromFollower", 'parentIdDiv':["LeaderProfitFunc", "FOCFollower"], 'NewfunEqu':"p_{LfF}(Q_{1},Q_{2})", 'subWith':1, 'hidden':true, 'listGraphs':[0,1]});
myCalculator.addExpression({'calc':"simpleFOC", 'idDiv':"FOCLeader", 'parentIdDiv':"profitFuncLeaderFromFollower", 'NewfunEqu':"\\mu(Q_{1},Q_{2})", 'FOCmax':true, 'solveFor':0, 'hidden':true, 'listGraphs':[0,1]});
myCalculator.addExpression({'calc':"advanceSubstitute", 'idDiv':"FOCFollowerFromLeader", 'parentIdDiv':["FOCFollower", "FOCLeader"], 'NewfunEqu':"\\rho(Q_{1},Q_{2})", 'subWith':0, 'hidden':true, 'listGraphs':[0,1]});

// //Stacklberg optimal
myCalculator.addExpression({ 'idDiv': "Quantity1Stackelberg", 'latex': "Q_{s1}=\\mu(Q_{1},Q_{2})", 'hidden': true, 'listGraphs': [0,1] });
myCalculator.addExpression({ 'idDiv': "Quantity2Stackelberg", 'latex': "Q_{s2}=\\rho(Q_{1},Q_{2})", 'hidden': true, 'listGraphs': [0,1] });

// //finding k_l k_f of isoprofits
myCalculator.addExpression({ 'idDiv': "k1IsoProfit", 'latex': "k_{s1}=P_{L}(Q_{s1},Q_{s2})", 'listGraphs': [0, 1] });
myCalculator.addExpression({ 'idDiv': "k2IsoProfit", 'latex': "k_{s2}=P_{F}(Q_{s1},Q_{s2})", 'listGraphs': [0, 1] });

// //rotaional
myCalculator.addExpression({ 'idDiv': "Pi2I1", 'latex': 'x_{2}\\left(x,y\\right)=x\\cos\\left(-2\\pi\\right)-y\\sin\\left(-2\\pi\\right)', 'listGraphs': [1] });
myCalculator.addExpression({ 'idDiv': "Pi2I2", 'latex': 'y_{2}\\left(x,y\\right)=x\\sin\\left(-2\\pi\\right)+y\\cos\\left(-2\\pi\\right)', 'listGraphs': [1] });

//drawIsoProfit
myCalculator.addExpression({ 'idDiv': "LeaderIsoProfit", 'latex': "P_{L}\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=k_{s1}\\left\\{0\\le x\\right\\}\\left\\{0\\le y\\right\\}", 'color': "#388c46", 'listGraphs': [1] });
myCalculator.addExpression({ 'idDiv': "FollowerIsoProfit", 'latex': "P_{F}\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=k_{s2}\\left\\{0\\le x\\right\\}\\left\\{0\\le y\\right\\}", 'color': "#2d70b3", 'listGraphs': [1] });

//addReactionFunction
myCalculator.addExpression({ 'idDiv': "ReactionFunction", 'latex': "R_{s1}(Q_{1})=R(Q_{1},Q_{2})", 'hidden':true, 'listGraphs': [0,1] });

//constraint ReactionFunction
myCalculator.addExpression({ 'idDiv': "ConstraintXAxis", 'latex': 'R_{s1}(q_{maxq1})\\sim0', 'listGraphs': [0, 1] });
myCalculator.addExpression({ 'idDiv': "ConstraintYAxis", 'latex': 'q_{maxq2}=R_{s1}(0)', 'listGraphs': [0, 1] });

myCalculator.line();

//adjustLabelIsoProfit
myCalculator.addSliderInput({ 'idDiv': "CheckIsoProfitOptimalQ1", 'title': "Leader’s Chosen Quantity", 'latex': "Q_{s11}", 'min': 0, 'max': 'q_{maxq1}', 'step': 1, 'defaultValue': 45, 'listGraphs': [0, 1] });
myCalculator.addSliderInput({ 'idDiv': "CheckIsoProfitOptimalQ2", 'title': "Follower’s Chosen Quantity", 'latex': "Q_{s22}", 'min': 0, 'max': 'q_{maxq2}', 'step': 1, 'defaultValue': 30, 'listGraphs': [0, 1] });
myCalculator.addLabel({ 'idDiv': 'IsoProfitAdjLabel', 'latex': '\\left(Q_{s11},Q_{s22}\\right)', 'color': '#3d168c', 'label': '(${Q_{s11}},${Q_{s22}})', 'pointSize': "1", 'dragMode': Desmos.DragModes.XY, 'labelOrientation': Desmos.LabelOrientations.BELOW, 'listGraphs': [1] });

//finding k_l k_f of isoprofits adjustable
myCalculator.addExpression({ 'idDiv': "k1IsoProfitAdj", 'latex': "k_{s11}=P_{L}(Q_{s11},Q_{s22})", 'listGraphs': [1] });
myCalculator.addExpression({ 'idDiv': "k2IsoProfitAdj", 'latex': "k_{s22}=P_{F}(Q_{s11},Q_{s22})", 'listGraphs': [1] });

//drawIsoProfit
myCalculator.addExpression({ 'idDiv': "LeaderIsoProfitAdj", 'latex': "P_{L}\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=k_{s11}\\left\\{0\\le x\\right\\}\\left\\{0\\le y\\right\\}", 'color': "#388c46", 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': "1", 'listGraphs': [1] });
myCalculator.addExpression({ 'idDiv': "FollowerIsoProfitAdj", 'latex': "P_{F}\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)=k_{s22}\\left\\{0\\le x\\right\\}\\left\\{0\\le y\\right\\}", 'color': "#2d70b3", 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': "1", 'listGraphs': [1] });
myCalculator.addExpression({ 'idDiv': "ShadedIsoProfits", 'latex': "0<x\\left\\{y>k_{s1}-P_{L}\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)\\right\\}\\left\\{y>k_{s2}-P_{F}\\left(x_{2}\\left(x,y\\right),y_{2}\\left(x,y\\right)\\right)\\right\\}", 'color': "#fa7e19", 'lineWidth': "0", 'listGraphs': [1] });
myCalculator.addSwitchInput({ 'idDiv': "ShadedIsoProfitsSwitch", 'title': "Display Area with Better Allocations", 'idDivs': ["ShadedIsoProfits"], 'hideToggle': true, 'listGraphs': [1] });



myCalculator.setInstructions({
	title: "Inverse Demand Function",
	content: '<b>Input the inverse of the market demand curve, such that P appears on the left hand side of the equation and Q appears on the right (i.e. P(Q) = aQ + b).</b>'
});

myCalculator.setInstructions({
	title: "Leader’s Total Cost",
	content: '<b>Input the total cost function of the leader.</b> Please make sure that any occurrence of Q within this expression has the subscript 1, as in, Q1. Q1 denotes the quantity produced by the leader.'
});

myCalculator.setInstructions({
	title: "Follower’s Total Cost",
	content: '<b>Input the total cost function of the follower.</b> Please make sure that any occurrence of Q within this expression has the subscript 2, as in, Q2. Q2 denotes the quantity produced by the follower.'
});

myCalculator.setInstructions({
	title: "Backward Induction",
	content: 'The calculator will immediately generate the quantity produced by the leader, the quantity produced by the follower, the total quantity sold on the market, and the corresponding market price following the assumptions of the Stackelberg model.\
	The quantity produced by the leader/ follower is displayed in the default value of the “Leader’s/ Follower’s Chosen Quantity” field on the left hand side, as well as at the point of intersection of the two isoprofit curves in the second graph.\
	The total quantity sold on the market and the corresponding market price under the Stackelberg model is labeled in green along the inverse market demand curve in the first graph.'
});

myCalculator.setInstructions({
	title: "Isoprofit Curves",
	content: 'At this market price and quantity sold on the market, the isoprofit curves of the leader and the follower are displayed in graph 2, with the leader’s isoprofit curve in green and the follower’s isoprofit curve in blue. The isoprofit curves intersect each other (not tangent to each other), which suggests that this allocation under the Stackelberg model is Pareto inefficient. The shaded orange area represents the better allocations, i.e., the allocations that Pareto dominate the current allocation. Both the leader and the follower would be better off (earn higher profits) if they moved to an allocation in the orange area.\
	\\tip{"You can choose whether to display the areas with better allocations in graph two by toggling the “display area with better allocations” switch."}\
	\\tip{"To experiment with different allocations of quantities between the leader and the follower, you can change the quantity sold by the leader and/ or the follower in a few ways: by typing the number directly into the “Leader’s/ Follower’s Chosen Quantity” fields, moving the slider underneath the “Leader’s/ Follower’s Chosen Quantity” fields, or clicking and dragging the red point in the second graph to change the allocation between them."}'
});

myCalculator.setInstructions({
	title: "Cartel Solution ",
	content: 'You can click and drag the red point in the second graph to adjust the allocation until the isoprofit curves of the leader and follower are tangent to each other. When the isoprofit curves are tangent, that is the allocation that maximizes the combined profits of the leader and follower. This allocation represents the cartel solution, i.e., if the leader and follower collude to maximize their combined profits.\
	The grey label shows the total quantity sold and market price under the cartel solution. The grey shaded area is the combined revenue the leader and follower receive under the cartel solution.\
	\\tip{"You can choose whether to display the cartel solution in graph one by toggling the “display cartel solution” switch."}'
});

myCalculator.setCreators({
	title: "Developer",
	name: "Radi",
	school: "GS’23"
  });
myCalculator.setCreators({
	title: "Editor",
	name: "Kyla",
	school: "CC’24"
});

myCalculator.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':false});
  </script>
