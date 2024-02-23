---
tags: principal-economics
thumbnail: /assets/img/InterventionsGraph.png
title: Monopoly
layout: model.njk
show: true
---
<script defer>
const myCalculator = new EconVision();

myCalculator.setGraphs({
  "idDiv": "CostCurvesGraph",
  "height": "650px",
  "width": "100",
  "left": -15,
  "right": 170,
  "bottom": -10,
  "top": 150,
  "showGrid": false,
  "expressions": true,
  "keypad": false,
  "zoomFit": true,
  "settingsMenu": true,
  "showXAxis": true,
  "showYAxis": true,
  "xAxisLabel": "Quantity (units)",
  "yAxisLabel": "Price per unit ($)"})

//define monopoly demand curves
myCalculator.addSliderInput({'idDiv':'DemandIntercept','title':'Level of Demand','latex':'D_{i}','min':'50','max':'150','step':'1','multiVisibility':true,'defaultValue':'110','simpleMode':true,'legendText':["Decrease"," ","Increase"],'listGraphs':[0]});
myCalculator.addSliderInput({ 'idDiv': 'DemandElasticity', 'title': 'Elasticity of Demand', 'latex': 'D_{e}', 'min': '0', 'max': '3', 'step': '0.1', 'multiVisibility': true, 'defaultValue': '1.2', 'simpleMode': true, 'legendText': ["Increase", "", "Decrease"], 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'DemandCurve', 'latex': "P\\left(Q\\right)=D_{i}-D_{e}Q", 'color': '#000000', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'MRCurve', 'latex': "M_{R}\\left(Q\\right)=D_{i}-2D_{e}Q", 'color': '#475569', 'listGraphs': [0] });

//label monopoly demand curves
myCalculator.addLabel({ 'idDiv': 'DemandCurveLabel', 'latex': "\\left(82,P(82)\\right)", 'label': 'Demand Curve', 'color': '#000000', 'pointSize': '0', 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'MRCurveLabel', 'latex': "\\left(42,M_R(42)\\right)", 'label': 'Marginal Revenue Curve', 'color': '#475569', 'pointSize': '0', 'showLabel': true, 'listGraphs': [0] });

//define average fixed cost using slider
myCalculator.addSliderInput({ 'idDiv': 'AverageFixedCostSlider', 'title': 'Fixed Cost', 'latex': 'F_{c}', 'min': '0', 'max': '1000', 'step': '1', 'defaultValue': '100', 'simpleMode': true, 'legendText': ["Decrease", " ", "Increase"], 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'AverageFixedCost', 'latex': "A_{FC}\\left(x\\right)=\\frac{F_{c}}{x}\\left\\{x>0\\right\\}", 'color': '#be185d', 'hidden': false, 'listGraphs': [0] });

//define marginal cost using slider
myCalculator.addSliderInput({'idDiv':'MarginalCostSlider','title':'Marginal Cost','latex':'V','min':'0','max':'44','step':'0.5','defaultValue':'14','simpleMode':true,'legendText':["Decrease"," ","Increase"],'listGraphs':[0]});
myCalculator.addExpression({ 'idDiv': 'AverageVariableCost', 'latex': "A_{VC}\\left(x\\right)=V+0.5x\\left\\{x>0\\right\\}", 'color': '#2438cc', 'hidden': false, 'listGraphs': [0] });

//define average total cost
myCalculator.addExpression({ 'idDiv': 'AverageTotalCost', 'latex': "A_{TC}\\left(x\\right)=V+0.5x+(F_{c}/x)\\left\\{x>0\\right\\}", 'color': '#0284c7', 'hidden': false, 'listGraphs': [0] });

//define marginal cost
myCalculator.addExpression({ 'idDiv': 'MarginalCost', 'latex': "M_{c}\\left(x\\right)=V+x\\left\\{x>0\\right\\}", 'color': '#15803d', 'hidden': false, 'listGraphs': [0] });

//label marginal cost curve
myCalculator.addLabel({ 'idDiv': 'MarginalCostLabel', 'latex': "\\left(80,80+V\\right)", 'label': 'Marginal Cost', 'color': '#15803d', 'pointSize': '0', 'showLabel': true, 'listGraphs': [0] });

//label average cost curve
myCalculator.addLabel({ 'idDiv': 'AverageCostLabel', 'latex': "\\left(100,V+50+\\frac{F_{c}}{100}\\right)", 'label': 'Average Cost', 'color': '#0284c7', 'pointSize': '0', 'showLabel': true, 'listGraphs': [0] });

//label average variable cost
myCalculator.addLabel({ 'idDiv': 'AverageVariableCostLabel', 'latex': "\\left(140,V+70\\right)", 'label': 'Average Variable Cost', 'color': '#2438cc', 'pointSize': '0', 'showLabel': true, 'listGraphs': [0] });

//label average fixed cost
myCalculator.addLabel({ 'idDiv': 'AverageFixedCostLabel', 'latex': "\\left(50,\\frac{F_{c}}{50}\\right)", 'label': 'Average Fixed Cost', 'color': '#be185d', 'pointSize': '0', 'showLabel': true, 'listGraphs': [0] });

//add intersection Marginal Cost and Unit Price
myCalculator.addExpression({ 'idDiv': 'IntersectMcP', 'latex': "M_{R}\\left(q\\right)\\sim M_{c}\\left(q\\right)", 'color': '#000000', 'hidden': false, 'min': '0', 'listGraphs': [0] });

//find profit maximizing unit price
myCalculator.addExpression({ 'idDiv': 'UnitPrice', 'latex': "P_{u}=P\\left(q\\right)", 'color': '#000000', 'hidden': true, 'listGraphs': [0] });

//profit box
myCalculator.addExpression({ 'idDiv': 'findFOC', 'latex': "A_{TC}'\\left(c\\right)\\sim0", 'hidden': true, 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'ProfitBox', 'latex': "0<x<q\\left\\{A_{TC}\\left(q\\right)<y<P_{u}\\right\\}", 'color': '#ea580c', 'hidden': false, 'lineStyle': 'Desmos.Styles.DASHED', 'lineWidth': '1', 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'ProfitBoxLabel', 'latex': "\\left(q,\\ P_{u}\\right)\\left\\{A_{TC}\\left(q\\right)<P_{u}\\right\\}", 'label': 'Firm Profit', 'color': '#ea580c', 'pointSize': '0', 'showLabel': true, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'notProfitBoxLabel', 'latex': "\\left(q,\\ P_{u}\\right)\\left\\{A_{TC}\\left(q\\right)\\ge P_{u}\\right\\}", 'label': 'No Profit', 'color': 'red', 'pointSize': '0', 'showLabel': true, 'listGraphs': [0] });

//labels
myCalculator.addExpression({ 'idDiv': 'EquilibriumPrice', 'latex': "y=P_{u}\\left\\{0<x<q\\right\\}", 'color': '#404040', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1.5', 'max': '3', 'step': '0.5', 'listGraphs': [0] });
myCalculator.addExpression({ 'idDiv': 'EquilibriumQuantity', 'latex': "x=q\\left\\{0<y<P_{u}\\right\\}", 'color': '#404040', 'lineStyle': Desmos.Styles.DASHED, 'lineWidth': '1.5', 'max': '3', 'step': '0.5', 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'EquilibriumQuantityLabel', 'latex': "\\left(q,0\\right)", 'label': 'Q*', 'color': '#404040', 'pointSize': '8', 'showLabel': true, 'labelOrientation': Desmos.LabelOrientations.BELOW, 'listGraphs': [0] });
myCalculator.addLabel({ 'idDiv': 'EquilibriumPriceLabel', 'latex': "\\left(0,P_{u}\\right)", 'label': 'P*', 'color':'#404040','pointSize':'8','showLabel':true,'labelOrientation':Desmos.LabelOrientations.LEFT,'listGraphs':[0]});


//INSTRUCTIONS
myCalculator.setInstructions({ 'title': 'Determining the equilibrium quantity and price in a perfectly competitive market', 'content': '<p class="p1"><strong>Increase/ decrease the market unit price</strong>&mdash;corresponding to the firm&rsquo;s marginal revenue&mdash;to observe how the firm adjusts the quantity it produces, Q* according to the equilibrium price P*.</p>' });

myCalculator.setInstructions({ 'title': 'Impacts on firm profit', 'content': '<b>You can also notice the impact of market fluctuations on the firm’s profit.</b> In a perfectly competitive market, when the market demand for a good changes, the price of this good is affected, thus increasing or reducing the difference between the firm’s marginal revenue (unit price) and its average cost that jointly determine how much profit the firm will make. <br> <br> As a reminder, Firm Profit %%\\π=[Unit Price(MR) * Q produced] - [Average Cost * Q produced]%%\\  \\tip{"You can change the unit price in the competitive market by clicking and dragging the black point up and down as well."}'});

myCalculator.setInstructions({ 'title': 'Variations in the firm’s cost structure also affect the equilibrium quantity and firm profit.', 'content': 'Use the sliders on the left to increase or decrease the firm’s Fixed Cost and Marginal Cost and observe the result of these shifts on the firm’s profit. <br> <br> When average cost is equal or greater than the market unit price, the firm makes no profit. On the opposite, when the market unit price is greater than average cost curve, the firm makes positive profits(supernormal profits).'});

myCalculator.setInstructions({ 'title': 'Impacts on firm profit', 'content': '<b>You can also notice the impact of market fluctuations on the firm’s profit.</b> In a perfectly competitive market, when the market demand for a good changes, the price of this good is affected, thus increasing or reducing the difference between the firm’s marginal revenue (unit price) and its average cost that jointly determine how much profit the firm will make. <br> <br>\\theory{"Firm Profit","%%\\Pi=[P \\cdot Q]-[AC \\cdot Q]%%<br> %%\\Pi%% - xxxxx <br>%%P%% - xxxxxx <br> %%AV%% - xxxxx<br>%%Q%% - xxxxx "}  \\tip{"You can change the unit price in the competitive market by clicking and dragging the black point up and down as well."}'});


myCalculator.setCreators({ 'title': 'Developer', 'name': 'Elea', 'school': 'GS25’' });

</script>
