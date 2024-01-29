---
tags: microeconomics
title: Price Dynamics
layout: model.njk
show: true
---
<script defer>
const PriceDynamics = new EconVision();

PriceDynamics.setGraphs({
  "idDiv": "PriceVQuantityGraph",
  "height": "650px",
  "width": "100",
  "left": -25,
  "right": 250,
  "bottom": -15,
  "top": 150,
  "showGrid": false,
  "expressions": false,
  "keypad": false,
  "zoomFit": true,
  "settingsMenu": false,
  "showXAxis": true,
  "showYAxis": true,
  "xAxisLabel": "Q(units)       ",
  "yAxisLabel": "P($)"
});




//InverseDemand/Demand
PriceDynamics.addFuncInput({idDiv:'DemandFunction', title:'Market Demand Function', func:'F(P)', latex:'0.5(75-P)', hidden:true, listGraphs:[0]});
PriceDynamics.addExpression({calc:"simpleInverse", idDiv:"InverseDemandFunction", parentIdDiv:"DemandFunction", NewfunEqu:"G(Q)", color:"black", hidden:false, listGraphs:[0]});
PriceDynamics.addDynamicInput({idDiv:'SupplyDynamic', title:'Supply Function of Firm ', func:'\\psi(P)', latex:'\\frac{P}{2}-\\frac{5}{2}', constraint:'', limit:10, color:'random', hidden:true, listGraphs:[0]});
PriceDynamics.addDynamicExp({calc:"simpleInverse", sticky: true, idDiv:"inverseIndSupply", parentIdDiv:"SupplyDynamic", NewfunEqu:"I(Q)", color:"random", lineWidth:'1.5', hidden:false, lineStyle:Desmos.Styles.DASHED, listGraphs:[0]});
PriceDynamics.addDynamicExp({calc:"simpleSum", sticky:true, idDiv:"TotalSupplyFunc", parentIdDiv:"SupplyDynamic", NewfunEqu:"g(P)", color:"green", hidden:true, listGraphs:[0]});
PriceDynamics.addDynamicExp({calc:"simpleInverse", sticky: true, idDiv:"TotalMC", parentIdDiv:"TotalSupplyFunc", NewfunEqu:"M(Q)", color:"red", hidden:true, lineStyle:Desmos.Styles.DASHED, listGraphs:[0]});
PriceDynamics.addExpression({idDiv:"DisplayedSumMC", latex:"y=M(Q)", color:"violet", listGraphs:[0]});
PriceDynamics.addExpression({idDiv:"OptimalTotalPrice", latex:"g(p_{op})\\sim F(p_{op})", listGraphs:[0]});
//condition
PriceDynamics.addExpression({idDiv:"pCondition", latex:"p_{opt}=\\left\\{g'\\left(P\\right)=0:g\\left(P\\right),p_{op}\\right\\}", listGraphs:[0]});
PriceDynamics.addExpression({idDiv:"qCondition", latex:"q_{opt}=\\left\\{g'\\left(P\\right)=0:F\\left(g\\left(P\\right)\\right),F(p_{opt})\\right\\}", listGraphs:[0]});
//rounding
PriceDynamics.addExpression({idDiv:"qrounded", latex:"q_{opt2}=\\operatorname{round}\\left(q_{opt},2\\right)", listGraphs:[0]});
PriceDynamics.addExpression({idDiv:"prounded", latex:"p_{opt2}=\\operatorname{round}\\left(p_{opt},2\\right)", listGraphs:[0]});
//label optimal
PriceDynamics.addLabel({idDiv:'EquilibriumClearingMarketLabel', latex:'\\left(q_{opt},p_{opt}\\right)', color:'gray', label:'Market Clearing (${q_{opt2}},$${p_{opt2}})', labelOrientation:Desmos.LabelOrientations.RIGHT, listGraphs:[0]});
//dashed lines
PriceDynamics.addExpression({idDiv:"OptimalQ1", latex:"x=q_{opt}\\left\\{0<y<p_{opt}\\right\\}", color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});
PriceDynamics.addExpression({idDiv:"OptimalP1", latex:"y=p_{opt}\\left\\{0<x<q_{opt}\\right\\}", color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"0.9", listGraphs:[0]});

PriceDynamics.setInstructions({
  title: "Demand Function",
  content: '<b>Input the demand function for the market in the form Q = -aP + c.</b>'
  });

PriceDynamics.setInstructions({
  title: "Supply Function firm 1",
  content: '<b>Input the supply function of the first firm.</b> The graph will automatically display the market clearing price and quantity.'
  });

PriceDynamics.setInstructions({
  title: "Add Firm",
  content: '<b>Click “Add” to input the supply function for another firm.</b> The graph will automatically display the new market clearing price and quantity. \
  The solid line represents the combined supply curve of the firms. The dotted lines represent the respective supply curves of each firm. Note that the combined supply curve is a horizontal summation of the firms’ individual supply curves. \
  The calculator can accommodate up to 10 firms.'
  });

PriceDynamics.setCreators({
  title: "Developer",
  name: "Radi",
  school: "GS’23"
});
PriceDynamics.setCreators({
  title: "Editor",
  name: "Kyla",
  school: "CC’24"
});

PriceDynamics.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':true});
  </script>
