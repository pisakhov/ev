---
tags: microeconomics
thumbnail: /assets/img/multi-market-pricing.png
title: Multi Market Pricing
description: Visualize output decisions across two markets (competitive and non-competitive)
layout: model.njk
show: true
---
<script>
const MMP = new EconVision();

MMP.setGraphs({
  "idDiv": "MultiMarketPricingGraph",
  "height": "650px",
  "copy": true,
  "width": "100",
  "left": -65,
  "right": 400,
  "bottom": -5,
  "top": 400,
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
//Cost Function
MMP.addFuncInput({idDiv:'CostFunction', title:'Cost Function for the firm', func:'f_{cCA}\\left(Q\\right)', latex:'0.5\\left(Q\\right)^{2}+100', hidden:true, listGraphs:[0]});
//MC
MMP.addExpression({idDiv:"MC", latex:"f_{mcCA}\\left(Q\\right)=f_{cCA}'\\left(Q\\right)\\left\\{Q\\ge0\\right\\}", color:'#6042a6', listGraphs:[0]});
//MR
MMP.addExpression({idDiv:"MR", latex:"f_{mrCA}\\left(Q\\right)=f_{pCA}\\left(0\\right)+\\left[2Q\\cdot f_{pCA}'\\left(Q\\right)\\right]", color:'#388c46', listGraphs:[0]});
//MC=MR
MMP.addExpression({idDiv:"MCMR", latex:"f_{mcCA}\\left(Q_{maxCA}\\right)\\sim f_{mrCA}\\left(Q_{maxCA}\\right)", listGraphs:[0]});
//AC
MMP.addExpression({idDiv:"AC", latex:"f_{acCA}\\left(Q\\right)=\\frac{f_{cCA}\\left(Q\\right)}{Q}\\left\\{Q\\ge0\\right\\}", color:'#fa7e19', lineWidth:"1", listGraphs:[0]});
//AC=MC
MMP.addExpression({idDiv:"ACMC", latex:"f_{acCA}\\left(Q_{P}\\right)\\sim f_{mcCA}\\left(Q_{P}\\right)", listGraphs:[0]});
//California Market
MMP.addFuncInput({idDiv:'CaliforniaPF', title:'Price Function in non-competitive market', func:'f_{pCA}\\left(Q\\right)', latex:'280-2Q', constraint:'\\left\\{Q\\ge0\\right\\}', listGraphs:[0]});
MMP.addExpression({idDiv:"CaliforniaPFMax", latex:'P_{maxCA}=f_{pCA}\\left(Q_{maxCA}\\right)', listGraphs:[0]});
//Pre Optimization only CA
MMP.addLabel({idDiv:'OptimizationCAOnly', latex:'\\left(Q_{maxCA},P\\ _{maxCA}\\right)', color:'gray', label:'Non-competitive only (${Q_{maxCA}},$${P_{maxCA}})', labelOrientation:Desmos.LabelOrientations.RIGHT, listGraphs:[0]});
MMP.addExpression({idDiv:"dashedPreOptimizationY", latex:'y=P\\ _{maxCA}\\left\\{0\\le Q\\le Q_{maxCA}\\right\\}', color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"1.5", listGraphs:[0]});
MMP.addExpression({idDiv:"dashedPreOptimizationX", latex:'x=Q\\ _{maxCA}\\left\\{0\\le Q\\le f_{pCA}\\left(Q_{maxCA}\\right)\\right\\}', color:'gray', lineStyle:Desmos.Styles.DASHED, lineWidth:"1.5", listGraphs:[0]});
MMP.addExpression({idDiv:"ShadedPreOptimization", latex:'Q_{P}<y<P\\ _{maxCA}\\left\\{0<x<Q_{maxCA}\\right\\}', color:'gray', lineWidth:"0", listGraphs:[0]});
//NY Market
MMP.addExpression({idDiv:"NYPF", latex:'f_{pNY}\\left(Q\\right)=p\\left\\{Q\\ge0\\right\\}', color:'#c74440', listGraphs:[0]});
MMP.addExpression({idDiv:"minNYValue", latex:"m_{in}=f_{mrCA}\\left(Q_{maxCA}\\right)[1]", listGraphs:[0]});
MMP.addSliderInput({idDiv:"NYPFLine", title:"Price in competitive market", latex:"p", min:'m_{in}', max:'f_{pCA}\\left(0\\right)', step:'0.01', defaultValue:100, listGraphs:[0]});
MMP.addLabel({idDiv:'NYPFAdjLabel', latex:'\\left(0,p\\right)', color:'#c74440', label:'`P_{c}^M`', dragMode:Desmos.DragModes.Y, labelOrientation:Desmos.LabelOrientations.LEFT, listGraphs:[0]});
MMP.addLabel({idDiv:'NYPFAdjLabelPrice', latex:'\\left(0,p\\right)', color:'#c74440', label:'$${p}', pointSize:"0", labelOrientation:Desmos.LabelOrientations.RIGHT, listGraphs:[0]});
//NYMR
MMP.addExpression({idDiv:"NYMR", latex:'f_{mrNY}\\left(Q\\right)=f_{pNY}\\left(Q\\right)', hidden:true, listGraphs:[0]});
//Optimization NY-CA
MMP.addExpression({idDiv:"NYMR", latex:'f_{mrNY}\\left(Q\\right)=f_{pNY}\\left(Q\\right)', hidden:true, listGraphs:[0]});
MMP.addExpression({idDiv:"MRCAMRNY", latex:'f_{mrCA}\\left(Q_{CA}\\right)\\sim f_{mrNY}\\left(Q_{NY0}\\right)', hidden:true, listGraphs:[0]});
MMP.addExpression({idDiv:"MRNYMCCA", latex:'f_{mrNY}\\left(Q_{NY1}\\right)\\sim f_{mcCA}\\left(Q_{T}\\right)', hidden:true, listGraphs:[0]});
MMP.addExpression({idDiv:"PCA", latex:'P_{CA}=f_{pCA}\\left(Q_{CA}\\right)', hidden:true, listGraphs:[0]});
MMP.addExpression({idDiv:"QNY", latex:'Q_{NY}=Q_{T}-Q_{CA}', hidden:true, listGraphs:[0]});
MMP.addExpression({idDiv:"PNY", latex:'P_{NY}=f_{pNY}\\left(Q_{NY}\\right)', hidden:true, listGraphs:[0]});
//Optimization CA
MMP.addLabel({idDiv:'OptimizationCALabel', latex:'\\left(Q_{CA},P_{CA}\\right)', color:'#81A9D1', label:'Non-competitive (${Q_{CA}},$${P_{CA}})', labelOrientation:Desmos.LabelOrientations.RIGHT, listGraphs:[0]});
MMP.addExpression({idDiv:"dashedOptimizationCAY", latex:'y=P_{CA}\\left\\{0\\le Q\\le Q_{CA}\\right\\}', color:'#81A9D1', lineStyle:Desmos.Styles.DASHED, lineWidth:"1.5", listGraphs:[0]});
MMP.addExpression({idDiv:"dashedOptimizationCAX", latex:'x=Q_{CA}\\left\\{0\\le Q\\le P_{CA}\\right\\}', color:'#81A9D1', lineStyle:Desmos.Styles.DASHED, lineWidth:"1.5", listGraphs:[0]});
MMP.addExpression({idDiv:"ShadedOptimizationCA", latex:'Q_{P}<y<P_{CA}\\left\\{0<x<Q_{CA}\\right\\}', color:'#81A9D1', lineWidth:"0",listGraphs:[0]});
//Optimization NY
MMP.addLabel({idDiv:'OptimizationNYLabel', latex:'\\left(Q_{T},P_{NY}\\right)', color:'#163a8c', label:'Competitive (${Q_{NY}},$${P_{NY}})', labelOrientation:Desmos.LabelOrientations.RIGHT, listGraphs:[0]});
MMP.addExpression({idDiv:"dashedOptimizationNYX", latex:'x=Q_{T}\\left\\{0\\le Q<P_{NY}\\right\\}', color:'#163a8c', lineStyle:Desmos.Styles.DASHED, lineWidth:"1.5", listGraphs:[0]});
MMP.addExpression({idDiv:"ShadedOptimizationNY", latex:'Q_{P}<y<p\\left\\{Q_{CA}<x<Q_{T}\\right\\}', color:'#163a8c', lineWidth:"1.5", listGraphs:[0]});
//FooterSwitches
MMP.addSwitchInput({idDiv:"NoneCompetitiveOnlyOptipro", title:"Show non-competitive market-only profits", hideToggle:true, idDivs:["ShadedPreOptimization"], listGraphs:[0]});
MMP.addSwitchInput({idDiv:"NoneCompetitiveOnlyOpti", title:"Show non-competitive market-only optimization", hideToggle:true, idDivs:["OptimizationCAOnly","dashedPreOptimizationY","dashedPreOptimizationX"], listGraphs:[0]});
MMP.addSwitchInput({idDiv:"MultiMarketOpti", title:"Show multi-market profits", hideToggle:true, idDivs:["ShadedOptimizationCA", "ShadedOptimizationNY"], listGraphs:[0]});

MMP.setInstructions({
title: "Total Cost Function",
content: '<b>Input the total cost function of the firm.</b> The corresponding average cost curve is displayed in orange. The corresponding marginal cost curve is displayed in purple.'
});
MMP.setInstructions({
title: "Price Function non-Competitive Market",
content: '<b>Input the price function in the non-competitive market.</b>\
Assuming the firm only operates in one market (the non-competitive market), the profit-maximizing price and quantity for the firm in the non-competitive market only is labeled in gray. The shaded gray rectangle represents the supernormal profits earned at this point.\
\\tip{"You can choose whether to display the supernormal profits earned at this point by toggling the “show non-competitive market only profits” switch."}\
\\tip{"You can also choose whether to display this optimization in the non-competitive market only by toggling the “show non-competitive market only optimization” switch."}'
});
MMP.setInstructions({
title: "Entering a Competitive Market",
content: 'Let’s assume the firm operates in a competitive market as well. The firm is thus maximizing its profits across two markets: the non-competitive market and the competitive market.\
<b>Input the price in the competitive market.</b> The price in the competitive market is displayed in red. The red horizontal line that intersects the y-axis at that competitive market price represents the marginal revenue curve of the firm in the competitive market.\
\\tip{"You can change the price in the competitive market by clicking and dragging the red point along the y-axis as well!"}\
The profit-maximizing price and quantity sold in the non-competitive market is shown in light blue; the supernormal profits earned at this point from sales in the non-competitive market is represented by the light blue shaded rectangle. The profit-maximizing price and quantity sold in the competitive market is shown in dark blue; the supernormal profits earned at this point from sales in the competitive market is represented by the dark blue shaded rectangle.\
\\tip{"You can choose whether to display the supernormal profits earned in each market by toggling the “show multi-market profits” switch."}\
\\theory{"Deriving optimal allocations across multiple markets","Note that the quantity sold in the non-competitive market is found along the demand curve directly above the point at which the marginal revenue curve in the non-competitive market (green downward-sloping line) and the marginal revenue curve in the competitive market (red horizontal line) intersect. This is because the optimal allocation of sales across markets requires that the marginal revenues be equal across all markets.\
The total quantity sold in both markets is found at the point at which the marginal cost curve (purple upward-sloping line) intersects the marginal revenue curve in the competitive market (red horizontal line). This is because profit maximization requires that marginal revenue equal marginal cost. So, at the optimal allocation, the marginal revenue in the competitive market = the marginal revenue in the non-competitive market = the marginal cost of the firm.\
Thus, the quantity sold in the competitive market is calculated by taking the total quantity sold in both markets and subtracting the quantity sold in the non-competitive market from it. This quantity sold in the competitive market is what is labeled in dark blue."}'
});

MMP.setCreators({
        title: "Developer",
        name: "Radi",
        school: "GS’23"
      });
MMP.setCreators({
        title: "Editor",
        name: "Kyla",
        school: "CC’24"
});

MMP.setScriptPackage({'replaceExp':true,'replaceLatex':true,'replaceTip':true,'replaceTheory':true,'refresh':false});
</script>
